const navToggle = document.querySelector('.toggle-menu');
const links = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-btn');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-nav')
})

closeBtn.addEventListener('click', () => {
  links.classList.toggle('show-nav')
})