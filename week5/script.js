// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetElement = document.querySelector(this.getAttribute('href'));
        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scroll
        });
    });
});
