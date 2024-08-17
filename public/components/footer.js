const footer = document.querySelector('footer')

document.addEventListener('DOMContentLoaded', (e) => {
    const footerPages = document.createElement('div')
    footerPages.classList.add('links-section')
    footerPages.innerHTML = `
                <ul class="footer-list">
                    <li class="footer-item">
                        <a href="index.html" class="footer-link">Home</a>
                    </li>

                    <li class="footer-item">
                        <a href="contact-us.html" class="footer-link">Contato</a>
                    </li>

                    <li class="footer-item">
                        <a href="profiles.html" class="footer-link">Perfis</a>
                    </li>

                    <li class="footer-item">
                        <a href="our-partners.html" class="footer-link">Parcerias</a>
                    </li>

                    <li class="footer-item">
                        <a href="about-us.html" class="footer-link">Sobre</a>
                    </li>

                    <li class="footer-item">
                        <a href="#" class="footer-link">Dúvidas</a>
                    </li>
                </ul>
    ` 

    const footerSocials = document.createElement('div')
    footerSocials.classList.add('social-section')
    footerSocials.innerHTML = `
                <ul class="footer-list">
                    <li class="footer-item footer-item__social">
                        <a href="#" class="footer-link"><i class="fa-brands fa-square-facebook"></i></a>
                    </li>

                    <li class="footer-item footer-item__social">
                        <a href="#" class="footer-link"><i class="fa-brands fa-square-instagram"></i></a>
                    </li>

                    <li class="footer-item footer-item__social">
                        <a href="#" class="footer-link"><i class="fa-brands fa-linkedin"></i></a>
                    </li>

                    <li class="footer-item footer-item__social">
                        <a href="#" class="footer-link"><i class="fa-solid fa-inbox"></i></a>
                    </li>
                </ul>
    `

    footer.appendChild(footerPages)
    footer.appendChild(footerSocials)
})