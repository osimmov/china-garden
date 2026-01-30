function toggleCategory(button) {
    const category = button.parentElement;
    const menuItems = category.querySelector('.menu-items');
    const arrow = button.querySelector('.dropdown-arrow');
    
    // Toggle the active class
    category.classList.toggle('active');
    
    // Toggle arrow direction
    if (category.classList.contains('active')) {
        arrow.textContent = '▲';
    } else {
        arrow.textContent = '▼';
    }
}

// Function to get image URL based on food name
function getFoodImage(foodName) {
    const name = foodName.toLowerCase();
    
    // Image mapping for common Chinese dishes
    const imageMap = {
        'egg roll': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'spring roll': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'shrimp roll': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'wonton': 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'dumpling': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'crab rangoon': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'chicken wing': 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'spare rib': 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'soup': 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'hot & sour': 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'egg drop': 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'chicken': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'general tso': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'kung pao': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'sesame chicken': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'orange chicken': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'beef': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'pepper steak': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'shrimp': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'lobster sauce': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'pork': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'sweet & sour': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'roast pork': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'fried rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'lo mein': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'chow mein': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'chop suey': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'tofu': 'https://images.unsplash.com/photo-1616190174793-4d96d5b8e7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'mapo': 'https://images.unsplash.com/photo-1616190174793-4d96d5b8e7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'vegetable': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'broccoli': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'egg foo young': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'moo shu': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'scallop': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'seafood': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'dragon': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'phoenix': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'happy family': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'triple delight': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'fortune cookie': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'rice': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };

    // Try to find a matching image
    for (const [key, url] of Object.entries(imageMap)) {
        if (name.includes(key)) {
            return url;
        }
    }

    // Default Chinese food image
    return 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
}

// Function to extract clean food name (remove numbers and Chinese characters)
function getCleanFoodName(fullName) {
    // Remove leading numbers, dots, and Chinese characters
    return fullName
        .replace(/^\d+[a-z]?\.\s*/, '') // Remove leading number and dot
        .replace(/\s*[\u4e00-\u9fff]+.*$/, '') // Remove Chinese characters
        .trim();
}

// Load and render menu
async function loadMenu() {
    try {
        const response = await fetch('menu.json');
        const menuData = await response.json();
        const container = document.getElementById('menu-container');
        
        // Category order - Appetizers should be open by default
        const preferredOrder = [
            'Appetizers',
            'Soup',
            'Most Popular',
            'Lunch Special',
            'Special Combination Platters',
            'Chef\'s Specialties',
            'Chicken',
            'Beef',
            'Seafood',
            'Roast Pork',
            'Vegetable',
            'Fried Rice',
            'Lo Mein',
            'Chow Mein',
            'Chop Suey',
            'Sweet & Sour',
            'Egg Foo Young',
            'Chow Mei Fun',
            'Moo Shu',
            'Side Orders',
            'Health Food Dishes'
        ];

        // Get all categories from JSON and order them
        const allCategories = Object.keys(menuData);
        const categoryOrder = preferredOrder.filter(cat => allCategories.includes(cat))
            .concat(allCategories.filter(cat => !preferredOrder.includes(cat)));

        // Generate HTML for each category
        categoryOrder.forEach((categoryName, index) => {
            if (!menuData[categoryName]) return;

            const isOpen = categoryName === 'Appetizers';
            const categoryDiv = document.createElement('div');
            categoryDiv.className = `menu-category ${isOpen ? 'active' : ''}`;
            
            const button = document.createElement('button');
            button.className = 'category-title';
            button.onclick = function() { toggleCategory(this); };
            button.innerHTML = `
                <span>${categoryName}</span>
                <span class="dropdown-arrow">${isOpen ? '▲' : '▼'}</span>
            `;
            
            const menuItemsDiv = document.createElement('div');
            menuItemsDiv.className = 'menu-items';
            
            menuData[categoryName].forEach(item => {
                const cleanName = getCleanFoodName(item.name);
                const imageUrl = item.image || getFoodImage(item.name);
                
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <div class="item-image">
                        <img src="${imageUrl}" alt="${cleanName}" loading="lazy">
                    </div>
                    <div class="item-details">
                        <div class="item-name-price">
                            <span class="item-name">${item.name}</span>
                            <span class="item-price">${item.price}</span>
                        </div>
                    </div>
                `;
                menuItemsDiv.appendChild(menuItem);
            });
            
            categoryDiv.appendChild(button);
            categoryDiv.appendChild(menuItemsDiv);
            container.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error('Error loading menu:', error);
        document.getElementById('menu-container').innerHTML = 
            '<p>Error loading menu. Please refresh the page.</p>';
    }
}

// Load menu when page loads
loadMenu();