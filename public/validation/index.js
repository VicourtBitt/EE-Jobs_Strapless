// EMAIL REGEX
export function validateEmail (emailValue) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailValue)
}

// INPUT NAME VALIDATION BY LENGHT
export function validateName (elem, min_lenght) {
    let name = elem.value
    if (name.length < min_lenght) {
        return false
    }
    return true
}

// SELECTION VALIDATION
export function validateSelection (elem) {
    let selectionValue = elem.value
    if (selectionValue == "placeholder") {
        return false
    } else {
        return true
    }
}

// VALIDATION SETTER
export function fieldIsValid (elem, hint= false) {
    if (hint) {
        const spanHint = elem.previousElementSibling.children[1]
        spanHint.innerText = ""
        spanHint.classList.add("hidden-hint")
    }
    
    elem.classList.remove("input-invalid")
    elem.classList.add("input-valid")
}

// INVALID FIELD SETTER
export function fieldIsNotValid (elem, hint= false) {
    if (hint) {
        const spanHint = elem.previousElementSibling.children[1]
        spanHint.innerText = "Entrada Inválida"
        spanHint.classList.remove("hidden-hint")
    }
    
    elem.classList.remove("input-valid")
    elem.classList.add("input-invalid")
}


// RUN ELEMENT VALIDATION
// TEST ELEMENT VALIDATION
export function validateElem (elem) {
    // This function is called whenever it should validate a element
    if (elem.id == "loginEmail" || elem.id == "signEmail" || elem.id == "companyEmail") {
        let isEmailValid = validateEmail(elem.value)
        if (isEmailValid) {
            fieldIsValid(elem)
        } else {
            fieldIsNotValid(elem)
        }
    }

    if (elem.id == "signName" || elem.id == "signLastName") {
        let isNameValid = validateName(elem, 2)
        if (isNameValid) {
            fieldIsValid(elem)
        } else {
            fieldIsNotValid(elem)
        }
    }

    if (elem.id == "companyName") {
        let isNameValid = validateName(elem, 5)
        if (isNameValid) {
            fieldIsValid(elem)
        } else {
            fieldIsNotValid(elem)
        }
    }

    if (elem.id == "companySector" || elem.id == "companyIntention" || elem.id == 'genderInput') {
        let selectionValue = validateSelection(elem)
        if (selectionValue) {
            fieldIsValid(elem)
        } else {
            fieldIsNotValid(elem)
        }
    }
}

// SELECT/INPUT EVENT LISTENER 
export function addListener (list, type) {
    // This function adds a event listener to every element we pass
    // in the function call, so we can pass a list of elems
    list.forEach((elem) => {
        elem.addEventListener(type, () => {
            validateElem(elem)
        })
    })
}

// EVENT LISTENERS TO FORMULARIES
// EVENT LISTENERS TO FORMULARIES

export function formListener (elem) {
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