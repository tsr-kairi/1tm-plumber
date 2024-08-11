const menuToggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-button');
const ctaNav = document.querySelector('.cta-nav');
const nav = document.querySelector('nav');
const dropdownItems = document.querySelectorAll('.nav-links li .dropdown');

// Get the current pathname
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul.nav-links > li > a');

// Remove 'active-nav' from all links
navLinks.forEach(link => {
  link.classList.remove('active-nav');
});

// Add 'active-nav' to the link that matches the current pathname
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active-nav');
  }
});

function toggleNavHeaderButtons() {
  if (ctaNav.classList.contains('active') || nav.classList.contains('active')) {
    menuToggle.style.display = 'none';
    closeButton.style.display = 'block';
  } else {
    menuToggle.style.display = 'block';
    closeButton.style.display = 'none';
  }
}

menuToggle.addEventListener('click', () => {
  ctaNav.classList.toggle('active');
  nav.classList.toggle('active');
  toggleNavHeaderButtons();
});

closeButton.addEventListener('click', () => {
  ctaNav.classList.remove('active');
  nav.classList.remove('active');
  toggleNavHeaderButtons();
});
