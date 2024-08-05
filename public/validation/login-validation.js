import { addListener, formListener } from "./eventListeners.js"

const formLogin = document.getElementById("formulary-login")
const loginInputs = document.querySelectorAll("#formulary-login > input")
const formSignin = document.getElementById("formulary-signin")
const signInputs = document.querySelectorAll("#formulary-signin > input")

const invalidHints = document.querySelectorAll(".hint-invalid")

// Hello Teacher Steffany, I'm only writing this in english because it
// seems better (in my opinion at least), and because it seems right when
// we talk about documentation (even if my code seems worse than the "Tiête")

function removePrevious (elem) {
    // tbh, i cannot remember what this function has even meant
    // to be one day. If I remember, then I will change this..

    // Oh, i guess this specific function was means to be used
    // when we gather a specific profile or send this profile info
    // into another screen. ~00:55
}

addListener(loginInputs, "keydown")
addListener(signInputs, "keydown")
formListener(formLogin)
formListener(formSignin)