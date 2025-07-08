// Load GSAP dynamically and initialize animations
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
  script.onload = initGSAP;
  document.head.appendChild(script);

  function initGSAP() {
    // Animate header title
    gsap.from('header h1', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    // Animate nav items
    gsap.from('nav li', { duration: 0.5, opacity: 0, x: -20, stagger: 0.1, delay: 0.5 });
    // Fade in main content
    gsap.from('main', { duration: 1, opacity: 0, delay: 1 });

    // Page-specific animations
    const title = document.title;
    if (title.includes('Spawning')) {
      gsap.from('main ol li', { duration: 0.5, x: 50, opacity: 0, stagger: 0.2, delay: 1.5, ease: 'power2.out' });
    } else if (title.includes('Mechanics')) {
      gsap.from('main ul li', { duration: 0.6, y: 20, opacity: 0, stagger: 0.15, delay: 1.5, ease: 'back.out(1.7)' });
    } else if (title.includes('Nation Types')) {
      gsap.from('main ul li', { duration: 0.5, scale: 0.8, opacity: 0, stagger: 0.1, delay: 1.5, ease: 'elastic.out(1, 0.5)' });
    } else if (title.includes('Migration')) {
      gsap.from('main ol, main ul', { duration: 0.8, opacity: 0, y: 20, delay: 1.5, ease: 'power1.out' });
    } else if (title.includes('Map & Visibility')) {
      gsap.from('main section', { duration: 0.7, opacity: 0, x: -30, stagger: 0.2, delay: 1.5, ease: 'power2.out' });
    } else if (title.includes('Terrain')) {
      gsap.from('main section', { duration: 0.7, opacity: 0, scale: 0.9, stagger: 0.2, delay: 1.5, ease: 'elastic.out(1, 0.3)' });
    } else if (title.includes('Exploration')) {
      gsap.from('main section', { duration: 0.6, opacity: 0, y: 40, stagger: 0.2, delay: 1.5, ease: 'bounce.out' });
    } else if (title.includes('Worldbuilding')) {
      gsap.from('main section', { duration: 0.6, opacity: 0, x: 40, stagger: 0.2, delay: 1.5, ease: 'back.out(1.7)' });
    } else {
      // Default section fade-in
      gsap.from('main section', { duration: 0.7, opacity: 0, delay: 1.5, ease: 'power1.out' });
    }

    // Highlight current page in nav
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });

    // Add GSAP hover animations to nav items
    document.querySelectorAll('nav li').forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.2, duration: 0.2, ease: 'power1.out' });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.2, ease: 'power1.out' });
      });
    });
  }
})();
