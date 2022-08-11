const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputCheck)
const dataLength = inputEl.getAttribute('data-length')

function onInputCheck(event) {
   
    if (event.target.value.length == dataLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}