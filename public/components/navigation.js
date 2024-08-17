export const header = document.querySelector('header')

document.addEventListener('DOMContentLoaded', (e) => {
    const navigationBar = document.createElement('nav')
    navigationBar.classList.add('header-navigation')

    const navigationLayout = `
                <!-- Invisible Checkbox Button || Botão de Check Invisível -->
                <!-- Opens the "hamburguer" navigation || Abre a navegação hamburguer -->
                <input type="checkbox" class="checkbox-cascata" id="check-cascata">
                <label for="check-cascata">
                    <span class="botao-cascata">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                </label>

                <ul class="list-navigation">
                    <li class="navigation-item">
                        <a href="index.html" class="navigation-link">HOME</a>
                    </li>

                    <li class="navigation-item">
                        <a href="contact-us.html" class="navigation-link">CONTATO</a>
                    </li>

                    <li class="navigation-item">
                        <a href="profiles.html" class="navigation-link">PERFIS</a>
                    </li>

                    <li class="navigation-item">
                        <a href="our-partners.html" class="navigation-link">PARCERIAS</a>
                    </li>

                    <li class="navigation-item">
                        <a href="about-us.html" class="navigation-link">SOBRE</a>
                    </li>

                    <li class="navigation-item botao-login">
                        <a href="login-screen.html" class="navigation-link navigation-link__login">Entrar</a>
                    </li>
                </ul>
    `
    navigationBar.innerHTML = navigationLayout
    header.appendChild(navigationBar)
})