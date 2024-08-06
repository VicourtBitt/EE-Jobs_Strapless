import { addListener, formListener } from "./eventListeners.js"

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formulary-login")
    const loginInputs = document.querySelectorAll("#formulary-login > input")

    const invalidHints = document.querySelectorAll(".hint-invalid")

    addListener(loginInputs, "keydown")
    formListener(formLogin, loginInputs)
})