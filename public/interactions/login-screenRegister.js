document.addEventListener('DOMContentLoaded', (e) => {
    const registerButton = document.getElementById('btnRegister')

    registerButton.addEventListener('click', (e) => {
        window.location.pathname = '/register-screen.html'
    })
})
