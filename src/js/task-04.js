const counterValue = document.querySelector('#value')
const dectementBtn = document.querySelector('[data-action="decrement"]')
const inctementBtn = document.querySelector('[data-action="increment"]')

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
    
}

dectementBtn.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
});
inctementBtn.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value;
});