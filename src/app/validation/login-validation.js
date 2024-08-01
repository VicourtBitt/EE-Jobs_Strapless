const formLogin = document.getElementById("formulary-login")
const loginInputs = document.querySelectorAll("#formulary-login > input")
const formSignin = document.getElementById("formulary-signin")
const signInputs = document.querySelectorAll("#formulary-signin > input")

const invalidHints = document.querySelectorAll(".hint-invalid")


// Hello Teacher Steffany, I'm only writing this in english because it
// seems better (in my opinion at least), and because it seems right when
// we talk about documentation (even if my code seems worse than the "Tiête")

function validateElem (elem) {
    // This function is called whenever it should validate a element
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
    // This function adds a event listener to every element we pass
    // in the function call, so we can pass a list of elems
    list.forEach((elem) => {
        elem.addEventListener("keydown", () => {
            validateElem(elem)
        })
    })
}

// EVENT LISTENERS TO FORMULARIES
// EVENT LISTENERS TO FORMULARIES

function formListener (elem) {
    // This is the event specific event listener for the formulary
    // Basically we are only gathering the values to see if the code
    // is actuaçy working as intended
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
    // Seems quite self-explanatory. This function test the regular
    // expression in the email that it receives
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailValue)
}

// ADD VALIDATION HINT RESULTS
// ADD VALIDATION HINT RESULTS

function fieldIsValid (elem) {
    // It just alters the input validity state (in the hard way),
    // not using setCustomValidity. °
    const spanHint = elem.previousElementSibling.children[1]
    spanHint.classList.add("hidden-hint")
    elem.classList.remove("input-invalid")
    elem.classList.add("input-valid")
}

function fieldNotValid (elem) {
    // It just alters the input validity state (in the hard way),
    // not using setCustomValidity. °°
    const spanHint = elem.previousElementSibling.children[1]
    spanHint.innerText = "Entrada Inválida"
    spanHint.classList.remove("hidden-hint")
    
    elem.classList.remove("input-valid")
    elem.classList.add("input-invalid")
}

function removePrevious (elem) {
    // tbh, i cannot remember what this function has even meant
    // to be one day. If I remember, then I will change this..
}

addListener(loginInputs)
addListener(signInputs)
formListener(formLogin)
formListener(formSignin)