const formLogin = document.getElementById("formulary-login")
const loginInputs = document.querySelectorAll("#formulary-login > input")
const formSignin = document.getElementById("formulary-signin")
const signInputs = document.querySelectorAll("#formulary-signin > input")

const invalidHints = document.querySelectorAll(".hint-invalid")


function validateElem (elem) {
    if (elem.id == "loginEmail" || elem.id == "signEmail") {
        let isEmailValid = validateEmail(elem.value)
        if (isEmailValid) {
            fieldIsValid(elem)
        } else {
            fieldNotValid(elem)
        }
    }
}

// EVENT LISTENERS TO INPUTS
// EVENT LISTENERS TO INPUTS

function addListener (list) {
    list.forEach((elem) => {
        elem.addEventListener("blur", () => {
            validateElem(elem)
        })
    })
}

// EVENT LISTENERS TO FORMULARIES
// EVENT LISTENERS TO FORMULARIES
function formListener (elem) {
    elem.addEventListener("submit", (e) => {
        e.preventDefault()
        if (elem.id == "formulary-signin") {
            let values = {
                "name" : signInputs[0].value,
                "lastName" : signInputs[1].value,
                "email" : signInputs[2].value
            }
            localStorage.setItem("registerInfo", JSON.stringify(values))
        }
    })
}

// REGEX EXPRESSIONS
// REGEX EXPRESSIONS

function validateEmail (emailValue) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailValue)
}

// ADD VALIDATION HINT RESULTS
// ADD VALIDATION HINT RESULTS

function fieldIsValid (elem) {
    const spanHint = elem.previousElementSibling.children[1]
    spanHint.classList.add("hidden-hint")
    elem.classList.remove("input-invalid")
    elem.classList.add("input-valid")
}

function fieldNotValid (elem) {
    const spanHint = elem.previousElementSibling.children[1]
    spanHint.innerText = "Entrada Inválida"
    spanHint.classList.remove("hidden-hint")
    
    elem.classList.remove("input-valid")
    elem.classList.add("input-invalid")
}

function removePrevious (elem) {
}

addListener(loginInputs)
addListener(signInputs)
formListener(formLogin)
formListener(formSignin)