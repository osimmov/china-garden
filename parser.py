import requests
from requests.exceptions import RequestException
from bs4 import BeautifulSoup
import json
import sys

URL = "https://www.wooshdelivery.com/order/restaurant/china-garden-menu/87313"

headers = {
    "User-Agent": "Mozilla/5.0"
}

try:
    # Security: Timeout added to prevent indefinite hanging (DoS risk)
    response = requests.get(URL, headers=headers, timeout=10)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
except RequestException as e:
    print(f"Error fetching menu: {e}")
    sys.exit(1)

menu = {}
current_category = None

# This grabs both headings and menu items in page order
for element in soup.find_all(["div"], recursive=True):

    # CATEGORY
    if "restaurant_heading" in element.get("class", []):
        h4 = element.find("h4")
        if h4:
            current_category = h4.get_text(strip=True)
            menu[current_category] = []

    # MENU ITEM
    if element.get("class") == ["order_restaurant--menu_item_name"]:
        name = element.get_text(strip=True)

        price_div = element.find_next("div", class_="menu_item_price")
        price = price_div.get_text(strip=True) if price_div else None

        if current_category:
            menu[current_category].append({
                "name": name,
                "price": price
            })

with open("menu.json", "w", encoding="utf-8") as f:
    json.dump(menu, f, indent=2, ensure_ascii=False)

print("menu.json created with categories")
