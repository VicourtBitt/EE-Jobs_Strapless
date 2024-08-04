import { btnInteraction } from './btnInteractions.js'

const btnLogin = document.getElementById("btnLogin")
const btnSignin = document.getElementById("btnSignin")

// There are these 2 "equal" buttons, because in the future we will make
// an specific page for each user action.
btnInteraction(btnLogin, "location", "/login-screen.html")
btnInteraction(btnSignin, "location", "/login-screen.html")