function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const btnChangeColor = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')
const bodyEl = document.querySelector('body')
btnChangeColor.addEventListener('click', onBtnChangeColorClick)



function onBtnChangeColorClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}