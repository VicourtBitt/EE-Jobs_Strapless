import { addListener, formListener } from "./eventListeners.js"

document.addEventListener("DOMContentLoaded", () => {
    const formSignin = document.getElementById("formulary-signin")
    const signInputs = document.querySelectorAll("#formulary-signin > input")

    const invalidHints = document.querySelectorAll(".hint-invalid")

    addListener(signInputs, "keydown")
    formListener(formSignin)
})