// Load GSAP dynamically and initialize animations
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
  script.onload = initGSAP;
  document.head.appendChild(script);

  // Highlight active navigation link
  function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPage) {
        link.classList.add('active');
      }
    });
  }

  function initGSAP() {
    // Set active navigation
    highlightActiveNav();

    // Enhanced header animations with wave effect
    const tl = gsap.timeline();
    tl.from('header h1', { 
      duration: 1.2, 
      y: -60, 
      opacity: 0, 
      ease: 'elastic.out(1, 0.5)',
      onComplete: () => {
        gsap.to('header h1::before, header h1::after', {
          rotation: 360,
          duration: 2,
          ease: 'none',
          repeat: -1
        });
      }
    })
    .from('nav li', { 
      duration: 0.8, 
      opacity: 0, 
      y: 30, 
      stagger: 0.08, 
      ease: 'back.out(1.4)' 
    }, '-=0.5')
    .from('main', { 
      duration: 1.2, 
      opacity: 0, 
      y: 40, 
      ease: 'power2.out' 
    }, '-=0.3');

    // Enhanced page-specific animations
    const title = document.title;
    
    if (title.includes('Spawning')) {
      gsap.from('.lifestyle-card', { 
        duration: 0.8, 
        opacity: 0, 
        y: 50, 
        stagger: 0.2, 
        delay: 1.2, 
        ease: 'power2.out' 
      });
    } else if (title.includes('Mechanics')) {
      gsap.from('.mechanic-card', { 
        duration: 0.7, 
        opacity: 0, 
        scale: 0.8, 
        stagger: 0.15, 
        delay: 1.2, 
        ease: 'back.out(1.4)' 
      });
    } else if (title.includes('War')) {
      gsap.from('.casus-card, .unit-card', { 
        duration: 0.6, 
        opacity: 0, 
        x: -30, 
        stagger: 0.1, 
        delay: 1.2, 
        ease: 'power2.out' 
      });
    } else if (title.includes('Culture')) {
      gsap.from('.tech-card', { 
        duration: 0.8, 
        opacity: 0, 
        rotationY: 45, 
        stagger: 0.1, 
        delay: 1.2, 
        ease: 'power2.out' 
      });
    }

    // Animate sections with stagger
    gsap.from('section', { 
      duration: 0.8, 
      opacity: 0, 
      y: 30, 
      stagger: 0.2, 
      delay: 1.5, 
      ease: 'power2.out' 
    });

    // Animate headings
    gsap.from('h2, h3', { 
      duration: 0.6, 
      opacity: 0, 
      x: -20, 
      stagger: 0.1, 
      delay: 1.8, 
      ease: 'power2.out' 
    });

    // Add hover animations for cards
    const cards = document.querySelectorAll('.lifestyle-card, .mechanic-card, .casus-card, .unit-card, .tech-card, .resource-card, .nation-type-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { duration: 0.3, scale: 1.02, y: -3, ease: 'power2.out' });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 0.3, scale: 1, y: 0, ease: 'power2.out' });
      });
    });

    // Add scroll-triggered animations for long pages
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.utils.toArray('.lazy-animate').forEach(element => {
        gsap.from(element, {
          scrollTrigger: element,
          duration: 0.8,
          opacity: 0,
          y: 30,
          ease: 'power2.out'
        });
      });
    }
  }

  // Add loading animation
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    gsap.to(document.body, { duration: 0.5, opacity: 1, ease: 'power2.out' });
  });
})();
