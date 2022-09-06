const inputColors = document.querySelector('.number-of-colors');
const colorWrapper = document.querySelector('.colors');
const colorText = document.querySelector('.color-text');
const btnClick = document.querySelector('.btn-click');
const colorCircle = document.querySelector('.color-circle');

const btnNewColors = document.querySelector('.btn-add');
const btnMoreColors = document.querySelector('.btn-more');
const btnLessColors = document.querySelector('.btn-less');

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

let arrayColors = [];

// Create random number from array "Colors"
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
};

function getRandomColor() {
  const randomColor = colors[getRandomNumber()];

  return randomColor;
}

// Create element "Circle"
function createCircle() {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');

  const colorCircle = document.createElement('div');
  colorCircle.classList.add('color-circle');

  const p = document.createElement('p');
  p.classList.add('color-text');

  appendCircle(colorBox, colorCircle, p);
  return colorCircle
};

// Append circle
function appendCircle(colorBox, colorCircle, p) {
  colorBox.appendChild(colorCircle);
  colorBox.appendChild(p)
  colorWrapper.appendChild(colorBox);
};

// Apply colors to the circles
function applyCircleColor() {
  const colorCircle = createCircle();

  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomColor();
    hexColor += randomNumber;
  }

  colorCircle.style.background = hexColor;
  colorCircle.nextElementSibling.textContent = `Color: ${hexColor}`;

  arrayColors.push(hexColor);
  setCurrentColor(arrayColors);
};

// Local storage API
function setCurrentColor(color) {
  const colorJSON = JSON.stringify(color);
  localStorage.setItem('currentHexColor', colorJSON)
}

function getCurrentColor() {
  const colors = localStorage.getItem('currentHexColor');
  const colorsList = JSON.parse(colors);

  return colorsList;
};

// Events
btnMoreColors.addEventListener('click', () => {
  if (isNaN(inputColors.value)) return inputColors.value = 0;
  inputColors.textContent = inputColors.value++;
});

btnLessColors.addEventListener('click', () => {
  if (inputColors.value === '') return;

  inputColors.textContent = inputColors.value--;

  if (inputColors.value < 0) return inputColors.value = 0;
});

function colorsSettings() {
  if (inputColors.value === '' || inputColors.value == 0) return;
  if (isNaN(inputColors.value)) return inputColors.value = 1;
  const divs = colorWrapper.querySelectorAll('div');

  for (let div of divs) {
    if (div) {
      div.remove();
    };
  };

  const value = inputColors.value;

  // It "cleans" the array
  arrayColors = [];

  for (let i = 0; i < value; i++) applyCircleColor(getRandomColor());

  inputColors.value = '';
}

function addNewColors() {
  colorsSettings()
};
btnNewColors.addEventListener('click', addNewColors);

inputColors.addEventListener('keypress', (e) => {
  colorsSettings()
})

// // Create random color
function colorGenerator() {
  const colorCircle = colorWrapper.querySelectorAll('.color-circle');

  arrayColors = [];

  colorCircle.forEach(circle => {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      const randomNumber = getRandomNumber()
      hexColor += colors[randomNumber];
    };

    circle.style.background = hexColor;
    circle.nextElementSibling.textContent = `Color: ${hexColor}`;
    arrayColors.push(hexColor);
    setCurrentColor(arrayColors)
  });
}
btnClick.addEventListener('click', colorGenerator);

const savedColors = getCurrentColor();

if (savedColors === null) {
  applyCircleColor()
} else {
  savedColors.forEach(color => {
    const colorCircle = createCircle();

    colorCircle.style.background = color;
    colorCircle.nextElementSibling.textContent = `Color: ${color}`;
  });
};