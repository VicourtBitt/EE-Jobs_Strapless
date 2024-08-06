import { validateElem } from "./validations.js"

// SELECT/INPUT EVENT LISTENER 
export function addListener (list, type) {
    // This function adds a event listener to every element we pass
    // in the function call, so we can pass a list of elems
    console.log("Listening to")
    list.forEach((elem) => {
        elem.addEventListener(type, () => {
            validateElem(elem)
        })
    })

    list.forEach((elem) => {
        elem.addEventListener("blur", () => {
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