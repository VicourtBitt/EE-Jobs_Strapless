import { validateLogin } from './validateLogin.js'

document.addEventListener('DOMContentLoaded', (e) => {
    const formLogin = document.getElementById('formulary-login')
    const loginEmail = document.getElementById('loginEmail')
    const loginPass = document.getElementById('loginPassword')
    const dialog = document.querySelector('dialog')
    const btnClose = document.getElementById('closeModal')

    // PAY ATENTION TO THE LOGIN FORMULARY, THEN SEND ALL THE
    // INFORMATIONS INTO THE STORAGE FOR A WHILE
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault()
        const emailValue = loginEmail.value
        const passValue = loginPass.value 

        // PUSH THE VALUES 
        setIntoSessionStorage('loginInfo', {
            email : emailValue,
            password : passValue  
        })

        const state = await validateLogin(sessionStorage.getItem('loginInfo'))
        if (state) {
            setIntoSessionStorage('userId', state)
            window.location.pathname = '/login-profile.html'
        } else {
            dialog.showModal()
        }
    })

    btnClose.addEventListener('click', (e) => {
        dialog.close()
    })

    const setIntoSessionStorage = (key, value) => {
        try {
            sessionStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error.message)
        }
    }
})