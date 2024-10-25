"use strict"
const menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Fanta", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese Steak Sandwich",
        "Grilled Chicken",
        "Chicken Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Tres Leche Cake"
    ]
};

const categorySelect = document.getElementById('categorySelect');
const itemsList = document.getElementById('itemsList');
const confirmButton = document.getElementById('confirmButton');


categorySelect.addEventListener('change', function() {
  
    itemsList.innerHTML = '';
    confirmButton.style.display = 'none'; 

    
    const selectedCategory = categorySelect.value;
    const items = menu[selectedCategory];

    if (items) {
        items.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item;
            itemsList.appendChild(option);
        });
    }
});

itemsList.addEventListener('change', function() {
    confirmButton.style.display = itemsList.selectedIndex !== -1 ? 'block' : 'none';
});

// Confirm button 
confirmButton.addEventListener('click', function() {
    const selectedItem = itemsList.value;
    if (selectedItem) {
        alert(`You have selected: ${selectedItem}`);
    }
});
