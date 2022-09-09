const name = document.querySelector('.name');
const occupation = document.querySelector('.occupation');
const summary = document.querySelector('.summary');
const img = document.querySelector('.img');

const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next')

function createProfessionals(img, name, occupation, summary) {
  return {
    img,
    name,
    occupation,
    summary
  };
};

const professional1 = new createProfessionals(
  './img/daniele.jpg',
  'Daniele',
  'Web Designer',
  'corrupti dignissimos modi sapiente eos! Libero odio dolore cum iste in veritatis optio atque pariatur et.' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic ab! Nam asperiores sit.'
);

const professional2 = new createProfessionals(
  './img/pedro.jpg',
  'Pedro',
  'Web Developer',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic ab! Nam asperiores sit.' +
  'corrupti dignissimos modi sapiente eos! Libero odio dolore cum iste in veritatis optio atque pariatur et.'
);

const professional3 = new createProfessionals(
  './img/joao.jpg',
  'João',
  'Intern',
  'Lorem ipsum dolor sit Libero odio dolore cum iste in veritatis optio atque pariatur et.' +
  'corrupti dignissimos modi sapiente eos! amet consectetur adipisicing elit. Exercitationem, hic ab! Nam asperiores sit.'
);

window.addEventListener('DOMContentLoaded', () => {
  showProfessional(currentProfessional)
})

let currentProfessional = 0;
let professionals = [professional1, professional2, professional3];

function showProfessional(worker) {

  let professional = professionals[worker];

  img.src = professional.img ;
  name.textContent = professional.name;
  occupation.textContent = professional.occupation;
  summary.textContent = professional.summary;
}

btnNext.addEventListener('click', () => {
  currentProfessional++

  if (currentProfessional > professionals.length - 1) {
    currentProfessional = 0;
  };
  console.log(currentProfessional)
  showProfessional(currentProfessional)
});

btnPrevious.addEventListener('click', () => {
  currentProfessional--

  if (currentProfessional < 0) {
    currentProfessional = professionals.length - 1
  };
  console.log(currentProfessional)
  showProfessional(currentProfessional)
});
