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

    if (elem.id == "signName" || elem.id == "signLastName" || elem.id == "filterName") {
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

    if (elem.id == "companySector" || elem.id == "companyIntention" || elem.id == "filterSelect") {
        let selectionValue = validateSelection(elem)
        if (selectionValue) {
            fieldIsValid(elem)
        } else {
            fieldIsNotValid(elem)
        }
    }
}

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