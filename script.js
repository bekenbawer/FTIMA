// Navbar scroll + mobile toggle
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Countdown to 13 June 2026 18:00 UTC
const TARGET = new Date('2026-06-13T18:00:00Z').getTime();
const cd = {
  d: document.querySelector('[data-d]'),
  h: document.querySelector('[data-h]'),
  m: document.querySelector('[data-m]'),
  s: document.querySelector('[data-s]'),
};
const pad = n => String(Math.max(0, n)).padStart(2, '0');
function tick() {
  const diff = Math.max(0, TARGET - Date.now());
  cd.d.textContent = pad(Math.floor(diff / 86400000));
  cd.h.textContent = pad(Math.floor((diff / 3600000) % 24));
  cd.m.textContent = pad(Math.floor((diff / 60000) % 60));
  cd.s.textContent = pad(Math.floor((diff / 1000) % 60));
}
tick();
setInterval(tick, 1000);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
