/**
 * Nguyen Khac Thanh — Portfolio Interactivity Script
 * Production-ready, zero-dependency, accessible vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initStatCounters();
  initClipboardCopy();
  initInteractiveWidgets();
});

/**
 * 1. STICKY HEADER & SHADOW ON SCROLL
 */
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. MOBILE MENU DRAWER
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggleBtn || !navMenu) return;

  const toggle = (force) => {
    const isOpen = typeof force === 'boolean' ? force : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      toggleBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    } else {
      toggleBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    }
  };

  toggleBtn.addEventListener('click', () => toggle());

  // Close when clicking nav links
  const links = navMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggle(false);
    }
  });

  // Escape key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggle(false);
      toggleBtn.focus();
    }
  });
}

/**
 * 3. SCROLLSPY (Highlight active nav link)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 4. SCROLL REVEAL ANIMATIONS
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-up');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 5. ANIMATED STAT COUNTERS
 */
function initStatCounters() {
  const counterElements = document.querySelectorAll('.counter');
  if (!counterElements.length) return;

  const animateCounter = (el) => {
    const rawTarget = el.getAttribute('data-target');
    if (!rawTarget) return;

    const target = parseFloat(rawTarget);
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Quartic ease-out curve for professional smoothness
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = easeOut * target;

      el.textContent = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal).toString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toString();
      }
    };

    requestAnimationFrame(updateCount);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.2
  });

  counterElements.forEach(el => observer.observe(el));
}

/**
 * 6. CLIPBOARD COPY WITH FEEDBACK TOAST
 */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn[data-copy]');
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  const showToast = (text) => {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        showToast(`Copied "${textToCopy}" to clipboard`);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
        showToast(`Failed to copy automatically`);
      }
    });
  });
}

/**
 * 7. INTERACTIVE WIDGET MICRO-INTERACTIONS
 */
function initInteractiveWidgets() {
  // Animate mini financial bars on hover or view
  const widget = document.querySelector('.card-financial-widget');
  if (widget) {
    widget.addEventListener('mouseenter', () => {
      const bars = widget.querySelectorAll('.bar-fill');
      bars.forEach((bar, idx) => {
        bar.style.transform = 'scaleY(1.08)';
        bar.style.transition = `transform 0.25s ease ${idx * 0.04}s`;
      });
    });

    widget.addEventListener('mouseleave', () => {
      const bars = widget.querySelectorAll('.bar-fill');
      bars.forEach(bar => {
        bar.style.transform = 'scaleY(1)';
      });
    });
  }
}
