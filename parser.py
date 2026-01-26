import requests
from bs4 import BeautifulSoup
import json

URL = "https://www.wooshdelivery.com/order/restaurant/china-garden-menu/87313"

headers = {
    "User-Agent": "Mozilla/5.0"
}

response = requests.get(URL, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

items = []

names = soup.find_all("div", class_="order_restaurant--menu_item_name")
prices = soup.find_all("div", class_="menu_item_price")

for name, price in zip(names, prices):
    items.append({
        "name": name.get_text(strip=True),
        "price": price.get_text(strip=True)
    })

with open("menu.json", "w", encoding="utf-8") as f:
    json.dump(items, f, indent=2, ensure_ascii=False)

print("menu.json created")
