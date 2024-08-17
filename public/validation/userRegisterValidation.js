import { addListener } from "./eventListeners.js"

document.addEventListener('DOMContentLoaded', (e) => {
    const formInputs = document.querySelectorAll('#userRegister input')
    const formSelects = document.querySelectorAll('#userRegister select')

    addListener(formInputs, 'keydown')
    addListener(formInputs, 'keyup')
    addListener(formSelects, 'change')
})