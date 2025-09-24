// Navbar scroll
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  // Highlight nav links for sections
  let fromTop = window.scrollY + 70;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Responsive menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
