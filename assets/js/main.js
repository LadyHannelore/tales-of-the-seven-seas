// Load GSAP dynamically and initialize animations
(function() {
  let gsapLoaded = false;
  
  // Load GSAP with error handling
  function loadGSAP() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      gsapLoaded = true;
      initGSAP();
    };
    script.onerror = () => {
      console.warn('GSAP failed to load, animations disabled');
      // Fallback: just show the page normally
      document.body.style.opacity = '1';
    };
    document.head.appendChild(script);
  }

  // Debounce function to optimize event handling
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  // Optimized highlightActiveNav with limited scope
  function highlightActiveNav() {
    try {
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const nav = document.querySelector('nav');
      if (!nav) return;

      const navLinks = nav.querySelectorAll('a');
      navLinks.forEach(link => {
        link.classList.remove('active'); // Remove existing active classes
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage) {
          link.classList.add('active');
        }
      });
    } catch (error) {
      console.warn('Navigation highlighting failed:', error);
    }
  }

  function initGSAP() {
    if (!gsapLoaded || typeof gsap === 'undefined') {
      console.warn('GSAP not available, skipping animations');
      document.body.style.opacity = '1';
      return;
    }

    try {
      // Set active navigation first
      highlightActiveNav();

      // Ensure body is visible
      document.body.style.opacity = '1';

      // Check if elements exist before animating
      const header = document.querySelector('header h1');
      const navItems = document.querySelectorAll('nav li');
      const main = document.querySelector('main');

      // Main timeline for initial page load
      const tl = gsap.timeline();

      // Animate header if it exists
      if (header) {
        tl.from(header, { 
          duration: 1.2, 
          y: -60, 
          ease: 'elastic.out(1, 0.5)'
        });

        // Add logo animation after header loads
        const logo = document.querySelector('.header-logo');
        if (logo) {
          tl.call(() => {
            gsap.to(logo, {
              rotation: 5,
              duration: 3,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1
            });
          });
        }
      }

      // Animate navigation if it exists
      if (navItems.length > 0) {
        tl.from(navItems, { 
          duration: 0.8, 
          y: 30, 
          stagger: 0.08, 
          ease: 'back.out(1.4)' 
        }, header ? '-=0.5' : 0);
      }

      // Animate main content if it exists
      if (main) {
        tl.from(main, { 
          duration: 1.2, 
          y: 40, 
          ease: 'power2.out' 
        }, '-=0.3');
      }

      // Page-specific animations with element checks
      const title = document.title;
      
      if (title.includes('Spawning')) {
        const lifestyleCards = document.querySelectorAll('.lifestyle-card');
        if (lifestyleCards.length > 0) {
          gsap.from(lifestyleCards, { 
            duration: 0.8, 
            y: 50, 
            stagger: 0.2, 
            delay: 1.2, 
            ease: 'power2.out' 
          });
        }
      } else if (title.includes('Mechanics')) {
        const mechanicCards = document.querySelectorAll('.mechanic-card');
        if (mechanicCards.length > 0) {
          gsap.from(mechanicCards, { 
            duration: 0.7, 
            scale: 0.8, 
            stagger: 0.15, 
            delay: 1.2, 
            ease: 'back.out(1.4)' 
          });
        }
      } else if (title.includes('War')) {
        const warCards = document.querySelectorAll('.casus-card, .unit-card');
        if (warCards.length > 0) {
          gsap.from(warCards, { 
            duration: 0.6, 
            x: -30, 
            stagger: 0.1, 
            delay: 1.2, 
            ease: 'power2.out' 
          });
        }
      } else if (title.includes('Culture')) {
        const techCards = document.querySelectorAll('.tech-card');
        if (techCards.length > 0) {
          gsap.from(techCards, { 
            duration: 0.8, 
            rotationY: 45, 
            stagger: 0.1, 
            delay: 1.2, 
            ease: 'power2.out' 
          });
        }
      }

      // Animate sections if they exist
      const sections = document.querySelectorAll('section');
      if (sections.length > 0) {
        gsap.from(sections, { 
          duration: 0.8, 
          y: 30, 
          stagger: 0.2, 
          delay: 1.5, 
          ease: 'power2.out' 
        });
      }

      // Animate headings if they exist
      const headings = document.querySelectorAll('h2, h3');
      if (headings.length > 0) {
        gsap.from(headings, { 
          duration: 0.6, 
          x: -20, 
          stagger: 0.1, 
          delay: 1.8, 
          ease: 'power2.out' 
        });
      }

      // Modularized setupCardHoverAnimations
      function setupCardHoverAnimations() {
        try {
          const cardSelectors = [
            '.lifestyle-card', '.mechanic-card', '.casus-card', '.unit-card',
            '.tech-card', '.resource-card', '.nation-type-card', '.feature-card', '.tutorial-card'
          ];
          const cards = document.querySelectorAll(cardSelectors.join(', '));

          cards.forEach(card => {
            if (!card.dataset.hoverSetup) { // Prevent duplicate event listeners
              card.dataset.hoverSetup = 'true';

              const hoverIn = () => {
                if (gsapLoaded && typeof gsap !== 'undefined') {
                  gsap.to(card, {
                    duration: 0.3,
                    scale: 1.02,
                    y: -3,
                    ease: 'power2.out',
                    overwrite: 'auto' // Prevent animation conflicts
                  });
                }
              };

              const hoverOut = () => {
                if (gsapLoaded && typeof gsap !== 'undefined') {
                  gsap.to(card, {
                    duration: 0.3,
                    scale: 1,
                    y: 0,
                    ease: 'power2.out',
                    overwrite: 'auto'
                  });
                }
              };

              card.addEventListener('mouseenter', hoverIn);
              card.addEventListener('mouseleave', hoverOut);
            }
          });
        } catch (error) {
          console.warn('Card hover animations setup failed:', error);
        }
      }

      // Call hover animations setup
      setupCardHoverAnimations();

    } catch (error) {
      console.error('GSAP animation initialization failed:', error);
      // Ensure page is visible even if animations fail
      document.body.style.opacity = '1';
    }
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial state
    document.body.style.opacity = '0';
    document.body.style.visibility = 'visible';
    
    // Load GSAP
    loadGSAP();
    
    // Fallback: show page after 3 seconds if GSAP fails
    setTimeout(() => {
      if (!gsapLoaded) {
        document.body.style.opacity = '1';
        console.warn('GSAP loading timeout, showing page without animations');
      }
    }, 3000);
  });

  // Debounced visibilitychange event
  document.addEventListener('visibilitychange', debounce(() => {
    if (!document.hidden && gsapLoaded) {
      highlightActiveNav();
    }
  }, 200));

})();
