const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onFieldInput)

function onFieldInput(event) {
outputEl.textContent = event.target.value || 'Anonymous'
}