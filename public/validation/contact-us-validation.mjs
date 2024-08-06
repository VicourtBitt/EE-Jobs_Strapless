import { addListener } from "./eventListeners.js";
import { validateElem } from "./validations.js";

const companyInputs = document.querySelectorAll("#company-formulary > input");
const companySelect = document.querySelectorAll("#company-formulary > select");
const companyForm = document.getElementById("companyFormulary")

addListener(companySelect, "mouseup");
addListener(companyInputs, "keydown");