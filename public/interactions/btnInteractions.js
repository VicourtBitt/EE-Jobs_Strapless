// BUTTON INTERACTION FUNCTION
export function btnInteraction (elem, type, href) {
    if (type == "location") {
        elem.addEventListener("click", () => {
            location = href
        })
    }
}