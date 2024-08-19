import {formJobs, formAddress, formPhones, formRole, editRole} from '../requisitions/updateInfosForms.js'

document.addEventListener('DOMContentLoaded', async (e) => {
    const chgButton = document.getElementById('chgButton')
    const chgField = document.getElementById('chgField')
    const tableToDisplay = document.getElementById('toDisplay')
    const title = document.getElementById('typeOfOperation')
    const userId = sessionStorage.getItem('userId')

    chgButton.addEventListener('click', async (e) => {
        const value = chgField.value
        
        if (!value) {
        
        } else {
            await editRole(value, userId)
        }
    })

    const runOperation = async (obj) => {
        const value = sessionStorage.getItem('operation')
        if (!value) {
            window.location.pathname = '/login-screen.html'
        }

        if (value == 'jobs') {
            await formJobs(userId, tableToDisplay, title)
        } else if (value == 'address') {
            await formAddress(userId, tableToDisplay, title)
        } else if (value == 'phones') {
            await formPhones(userId, tableToDisplay, title)
        } else if (value == 'role') {
            await formRole(userId, tableToDisplay, title)
        }
    }
    await runOperation()
})

window.addEventListener('beforeunload', (e) => {
    sessionStorage.removeItem('operation')
    sessionStorage.removeItem('userId')
})