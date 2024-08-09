import { addListener } from "../validation/eventListeners.js"
import { fetchCurriculums } from "./profilesFetch.js"

const searchBar = document.getElementById('searchBar')
const searchBarInput = document.querySelectorAll('#filterName')
const searchBarSelect = document.querySelectorAll('#filterSelect')

searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = searchBarInput[0].value
    let selectValue = searchBarSelect[0].value
    if (selectValue == "role") {
        fetchCurriculums(`users/search/${inputValue}`)
    } 
    // else if (selectValue == "name") {
        // fetchCurriculums(`users/search/${inputValue}`)
    // }
})

searchBar.addEventListener("keydown", () => {
    let inputValue = searchBarInput[0].value
    if (inputValue == "") {
        fetchCurriculums(`users/`)
    }
})

addListener(searchBarInput, 'keydown')
addListener(searchBarSelect, 'mouseup')