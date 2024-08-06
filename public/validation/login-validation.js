import { addListener, formListener } from "./eventListeners.js"

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formulary-login")
    const loginInputs = document.querySelectorAll("#formulary-login > input")
    const formSignin = document.getElementById("formulary-signin")
    const signInputs = document.querySelectorAll("#formulary-signin > input")

    const invalidHints = document.querySelectorAll(".hint-invalid")

    addListener(loginInputs, "keydown")
    addListener(signInputs, "keydown")
    formListener(formLogin)
    formListener(formSignin)
})