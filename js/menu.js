const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const dropdownParents = document.querySelectorAll('.has-dropdown');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

dropdownParents.forEach((item) => {
  const button = item.querySelector('.dropdown-toggle');
  if (!button) return;

  button.addEventListener('click', (event) => {
    if (window.innerWidth > 860) return;
    event.preventDefault();
    item.classList.toggle('open');
  });
});
