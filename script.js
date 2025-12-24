// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Reset to Home if at top
    if (scrollY < 100) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[0].classList.add('active');
    }
}

window.addEventListener('scroll', updateActiveNav);

// Subtle parallax on hero
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < 500) {
            hero.style.transform = `translateY(${scrollY * 0.1}px)`;
            hero.style.opacity = 1 - (scrollY * 0.002);
        }
    });
}

// Add staggered animation to project items
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach((item, index) => {
    item.style.animationDelay = `${0.3 + index * 0.1}s`;
    item.classList.add('fade-in');
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Console Easter egg
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold;');
console.log('%cInterested in working together? Reach out!', 'font-size: 14px; color: #d4a574;');

