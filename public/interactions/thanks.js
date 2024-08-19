document.addEventListener('DOMContentLoaded', (e) => {
    const goBack = document.getElementById('goBack')

    goBack.addEventListener('click', (e) => {
        window.location.pathname = '/index.html'
    })
})