import { validateName, validateEmail, validateSelection } from "./validations.js"
import { addListener } from "./eventListeners.js"

const companyInputs = document.querySelectorAll("#company-formulary > input")
const companySelect = document.querySelectorAll("#company-formulary > select")

addListener(companySelect, "mouseup")
addListener(companyInputs, "keydown")