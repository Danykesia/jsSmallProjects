const navToggle = document.querySelector('.toggle-menu');
const links = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-nav')
})