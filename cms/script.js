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
