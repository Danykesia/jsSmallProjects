const inputColors = document.querySelector('.number-of-colors');
const colorWrapper = document.querySelector('.colors');
const colorText = document.querySelector('.color-text');
const colorCircle = document.querySelector('.color-circle');

const btnMoreColors = document.querySelector('.btn-more');
const btnClick = document.querySelector('.btn-click');
const btnLessColors = document.querySelector('.btn-less');
const btnNewColors = document.querySelector('.btn-add');

const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

let arrayColors = [];

// Create random number from array "Colors"
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
};

function getRandomColor() {
  const randomColor = colors[getRandomNumber()];

  return randomColor;
};

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
}

// Apply colors to the circles
function applyCircleColor(color) {
  const colorCircle = createCircle();

  const randomNumber = color;

  colorCircle.style.background = randomNumber;
  colorCircle.nextElementSibling.textContent = `Color: ${randomNumber}`;

  arrayColors.push(color);
  setCurrentColor(arrayColors);
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

  for (let i = 0; i < value; i++) {
    applyCircleColor(getRandomColor())
  };

  inputColors.value = '';
};

function addNewColors() {
  colorsSettings()
};
btnNewColors.addEventListener('click', addNewColors);

// Create random color from "click me" button
function colorGenerator() {
  const colorCircle = colorWrapper.querySelectorAll('.color-circle');

  arrayColors = [];

  colorCircle.forEach(circle => {
    const randomNumber = getRandomColor();
    circle.style.background = randomNumber;
    circle.nextElementSibling.textContent = `Color: ${randomNumber}`;
    arrayColors.push(randomNumber);
  });

  setCurrentColor(arrayColors);
}
btnClick.addEventListener('click', () => {
  colorGenerator()
});

inputColors.addEventListener('keypress', (e) => {
  colorsSettings()
})

// Local storage API
function setCurrentColor(color) {
  const colorJSON = JSON.stringify(color);
  localStorage.setItem('currentSimpleColor', colorJSON);
};

function getCurrentColor() {
  const colors = localStorage.getItem('currentSimpleColor');
  const colorsList = JSON.parse(colors);

  return colorsList;
};

const savedColors = getCurrentColor();

if (savedColors === null) {
  applyCircleColor(getRandomColor())
} else {
  savedColors.forEach(color => {
    applyCircleColor(color)
  });
};
