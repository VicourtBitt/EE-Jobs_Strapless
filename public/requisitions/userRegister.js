import { postUsers } from './postUsers.js'

const userRegister = document.getElementById('userRegister')
const btnSend = document.getElementById('userInfo')
const inputs = document.querySelectorAll("#userRegister input")
const selects = document.querySelectorAll('#userRegister select')

document.addEventListener('DOMContentLoaded', (e) => {
    const modalConfirmation = document.getElementById('modal')
    const agreeModal = document.getElementById('agreeModal')
    const disagreeModal = document.getElementById('disagreeModal')
    btnSend.setAttribute('disabled', 'true')

    btnSend.addEventListener('click', (e) => {
        modalConfirmation.showModal()
    })

    userRegister.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    userRegister.addEventListener('change', (e) => {
        let onSight = false
        
        inputs.forEach((elem) => {
            let isValid = elem.classList.contains('input-valid')
            if (!isValid) {
                onSight = false
            } else {
                onSight = true
            }
        })
        if (onSight) {
            btnSend.removeAttribute('disabled')
        } else {
            btnSend.setAttribute('disabled', 'true')
        }
    })

    disagreeModal.addEventListener('click', (e) => {
        modalConfirmation.close()
    })

    agreeModal.addEventListener('click', async (e) => {
        const elemValues = getElemValues(inputs, selects)
        await postUsers(elemValues)
    })

    function getElemValues (inputs, selects) {
        let newObject = {}

        inputs.forEach((elem) => {
            if(elem.id == 'nameInput') {
                newObject['first_name'] = elem.value
            } else if (elem.id == 'surnameInput') {
                newObject['last_name'] = elem.value
            } else if (elem.id == 'ageInput') {
                newObject['age'] = elem.value 
            } else if (elem.id == 'cpfInput') {
                newObject["cpf_cnpj"] = elem.value
            } else if (elem.id == 'emailInput') {
                newObject["email"] = elem.value
            } else if (elem.id == 'roleInput') {
                newObject['general_role'] = elem.value
            }
        })

        selects.forEach((elem) => {
            if (elem.id == 'genderInput') {
                newObject['gender'] = elem.value
            }
        })

        return newObject
    }
})