import { addListener } from "../validation/eventListeners.js"
import { fetchIntoTable } from "./fetchUsers.js"

const searchBar = document.getElementById('searchBar')
const searchBarInput = document.querySelectorAll('#filterName')
const searchBarSelect = document.querySelectorAll('#filterSelect')

searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = searchBarInput[0].value
    let selectValue = searchBarSelect[0].value
    if (selectValue == "role") {
        fetchIntoTable(`users/search/${inputValue}`)
    } 
    // else if (selectValue == "name") {
        // fetchIntoTable(`users/search/${inputValue}`)
    // }
})

searchBar.addEventListener("keydown", () => {
    let inputValue = searchBarInput[0].value
    if (inputValue == "") {
        fetchIntoTable(`users/`)
    }
})

addListener(searchBarInput, 'keydown')
addListener(searchBarSelect, 'mouseup')