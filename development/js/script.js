document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navItems = document.querySelectorAll(".nav-menu li");

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');

        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');

        navItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
        });
    });
});