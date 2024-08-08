const menuToggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-button');
const ctaNav = document.querySelector('.cta-nav');
const nav = document.querySelector('nav');
const dropdownItems = document.querySelectorAll('.nav-links li .dropdown');

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

dropdownItems.forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', toggleNavHeaderButtons);
  dropdown.addEventListener('mouseleave', toggleNavHeaderButtons);
});