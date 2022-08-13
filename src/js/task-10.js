function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
input: document.querySelector('input'),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
boxes: document.querySelector('#boxes')
}

refs.createBtn.addEventListener('click',handleClick)
function handleClick () {
  createBoxes(refs.input.value)
}
function createBoxes(amount) {
   if (amount > 100 || amount<1) {
     alert("Число повинно бути в межах від 1 до 100")
     refs.input.value = ""
    return
  }
  const boxesArray = [];

  let size = 30;

  for (let i = 0; i < amount; i += 1, size += 10) {
    const divBox = document.createElement('div');

    divBox.style.height = `${size}px`;
    divBox.style.width = `${size}px`;
    divBox.style.background = getRandomHexColor();
    boxesArray.push(divBox);
  }
  refs.boxes.append(...boxesArray);
}

refs.destroyBtn.addEventListener('click', destroyBoxes)
function destroyBoxes() {
  refs.boxes.innerHTML = ""
  refs.input.value = ""
}
