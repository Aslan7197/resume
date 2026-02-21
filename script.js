// ── Navbar: shadow on scroll + active section highlighting ──
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar ul li a');
const sections = document.querySelectorAll('section[id], #hero');

window.addEventListener('scroll', () => {
  // Shadow
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ── Animated stat counters (fires once when strip enters viewport) ──
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current < target) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statNumbers.forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);
