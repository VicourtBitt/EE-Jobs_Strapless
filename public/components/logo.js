const header = document.querySelector('header')

document.addEventListener('DOMContentLoaded', (e) => {
    const logoBox = document.createElement('div')
    logoBox.classList.add('logo-text-box')

    const layout = `
                <a href="index.html">
                    <div class="header-logo">
                        <img class="logo-image" src="assets/images/logo_ee_oldcane.png" alt="Logo da E&E-Jobs: Senhor de Idade com Muleta">
                    </div>
                </a>

                <div class="header-text">
                    <h3 class="logo-title">Jobs</h3>
                </div>
    `

    logoBox.innerHTML = layout
    header.appendChild(logoBox)
})