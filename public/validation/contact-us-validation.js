import { addListener } from "./eventListeners.js";

document.addEventListener("DOMContentLoaded", () => {
    const companyInputs = document.querySelectorAll("#companyFormulary > input");
    const companySelect = document.querySelectorAll("#companyFormulary > select");
    const companyForm = document.getElementById("companyFormulary")

    addListener(companySelect, "mouseup");
    addListener(companyInputs, "keydown");
})