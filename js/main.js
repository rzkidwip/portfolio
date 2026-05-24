/* ============================================================
   main.js — shared across all pages
   ============================================================ */

/* ----- Navbar scroll effect ----- */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
  if (window.scrollY > 10) navbar.classList.add('scrolled');
}

/* ----- Hamburger menu ----- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

/* ----- Search: Enter key navigates to artsworks ----- */
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') goSearch();
  });

  /* Pre-fill search from URL param on artsworks page */
  const q = new URLSearchParams(location.search).get('q');
  if (q) searchInput.value = q;
}

function goSearch() {
  const q = (searchInput?.value || '').trim();
  if (!q) return;
  window.location.href = `artsworks.html?q=${encodeURIComponent(q)}`;
}

/* ----- Scroll-reveal ----- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.06}s`;
  revealObserver.observe(el);
});

/* ----- Leadership counter animation ----- */
(function () {
  const nums = document.querySelectorAll('.ls-stat-num[data-target]');
  if (!nums.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const elapsed = Math.min(now - start, duration);
      el.textContent = Math.round(easeOut(elapsed / duration) * target) + suffix;
      if (elapsed < duration) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nums.forEach(el => counterObserver.observe(el));
})();

/* ----- Smooth scroll for anchor links ----- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
