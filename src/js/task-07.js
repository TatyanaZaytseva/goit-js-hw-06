const fontSizeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
fontSizeEl.addEventListener('input', onSizeControlInput)

function onSizeControlInput(event) {
   textEl.style.fontSize = `${event.target.value}px`
}