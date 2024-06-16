
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const login_btn = document.getElementById('login-btn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.id = "navbar-scrolled";
            login_btn.id = "login-btn-scrolled";
        } else {
            navbar.id = "navbar";
            login_btn.id = "login-btn"
        }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const categories = [
        { name: 'Pastries', text: 'Delicious pastries to satisfy your sweet tooth.', icon: 'icons/pastry-icon.svg', image: 'images/cat-pastry.jpg' },
        { name: 'Desserts', text: 'Sweet and savory desserts to end your meal.', icon: 'icons/dessert-icon.svg', image: 'images/cat-dessert.jpeg' },
        { name: 'Coffee and Tea', text: 'Savor the best in coffee and tea, any time of day', icon: 'icons/coffee-icon.svg', image: 'images/cat-tea.jpg' },
        { name: 'Beverages', text: 'Refreshing drinks to quench your thirst.', icon: 'icons/beverage-icon.svg', image: 'images/cat-bev.jpeg' },
        { name: 'Breakfast', text: 'Enjoy a hearty breakfast to fuel your day.', icon: 'icons/breakfast-icon.svg', image: 'images/cat-bf.jpg' },
        { name: 'Lunch', text: 'Delicious lunch meals for your afternoon break.', icon: 'icons/lunch-icon.svg', image: 'images/lunch.jpg' },
        { name: 'Soups', text: 'Indulge in our variety of fresh, tasty soups.', icon: 'icons/soup-icon.svg', image: 'images/cat-soup.jpg' }
    ];

    const carouselInner = document.getElementById('carousel-inner');

    categories.forEach((category, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <div class="card text-center mx-auto">
                <img src="${category.image}" class="card-img-top" alt="${category.name}">
                <div class="card-body">
                    <h5 class="card-title">${category.name}</h5>
                    <p class="card-text">${category.text}</p>
                    <div class="card-icon">
                        <button type="button" class="btn btn-outline-primary" style = "width:25%; color: black; border-color: black; border-radius: 15px;">Go!</button>
                        
                    </div>
                </div>
            </div>
        `;
        carouselInner.appendChild(div);
    });
});


