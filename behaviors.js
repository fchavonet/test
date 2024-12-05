//
document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const sections = document.querySelectorAll('section');

    // Scroll to the specified section smoothly
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Make the function available globally
    window.scrollToSection = scrollToSection;

    // Update active link based on current scroll position
    function updateActiveLink() {
        let currentSection = '';

        // Determine which section is currently in view
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active class on navigation links
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('data-section-id') === currentSection);
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            navMenu.classList.remove('show');
            
            const sectionId = link.getAttribute('data-section-id');

            scrollToSection(sectionId);

        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);

    hamburgerIcon.addEventListener('click', function (event) {
        event.preventDefault();

        navMenu.classList.toggle("show");
    })
});

// Particles.js
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
