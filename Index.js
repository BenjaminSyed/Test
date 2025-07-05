document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navItems = document.getElementById('nav-items');

  hamburger.addEventListener('click', () => {
    navItems.classList.toggle('show');
    hamburger.addEventListener('click', () => {
  navItems.classList.toggle('show');
  hamburger.innerHTML = navItems.classList.contains('show') ? '&#x2716;' : '&#9776;';
});
  });
});