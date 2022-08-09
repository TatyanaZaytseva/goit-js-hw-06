function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
inputBtn: document.querySelector('input'),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
boxes: document.querySelector('#boxes')
}

refs.createBtn.addEventListener('click', createBoxes)
function createBoxes(event) {
  console.log(event.currentTarget.value)
  const divBoxes = document.createElement('div')
  divBoxes.style.width = '30px'
  divBoxes.style.height = '30px'
  divBoxes.style.backgroundColor = getRandomHexColor()
}
