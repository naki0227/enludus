// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Target elements to animate
const animatedElements = document.querySelectorAll('.project-card, .section-title, .mission-text, .about-content');
animatedElements.forEach(el => {
  el.classList.add('fade-in-section');
  observer.observe(el);
});

// Hero Parallax Effect
const heroSection = document.querySelector('.hero-section');
const heroBg = document.querySelector('.hero-background');

if (heroSection && heroBg) {
  heroSection.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    heroBg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
  });
}

// Add CSS class for fade-in animation dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-in-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
