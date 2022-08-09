
const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const formElements = event.target.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
 
    if (!mail || !password) {
        alert("Всі поля повинні бути заповнені!")
        return
    } 

    const formData = {
        mail,
        password,
    }
    console.log(formData)
   form.reset()
}