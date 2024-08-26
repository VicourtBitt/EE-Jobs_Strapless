const curriculumTable = document.getElementById("curriculum-table")

export const fetchUser = async (method= "users") => {
    const request = await fetch(`http://localhost:3001/api/${method}`)
    const info = await request.json()
    return info
}

export const fetchIntoTable = async (method= "users") => {
    const info = await fetchUser(method)
    await insertOnScreen(info)
}

export const insertOnScreen = async (curriculumArray) => {
    // ZERA A TABELA DE CURRÍCULOS SEMPRE QUE HOUVER UMA
    // NOVA CONSULTA
    curriculumTable.innerHTML = ""

    // PARA CADA OBJETO NA REQUISIÇÃO, CRIA UM ELEMENTO/CARD
    // PARA SER INSERIDO NA TELA, CLICÁVEL
    curriculumArray.forEach((curriculum) => {
        const resumeDiv = document.createElement('div')
        resumeDiv.classList.add('card')
        resumeDiv.id = `${curriculum.id}`

        // AQUI ESTÁ A PARTE DE TORNAR O CARD CLICÁVEL
        resumeDiv.onclick = function () {
            sessionStorage.setItem('last_profile', resumeDiv.id)
            window.location.pathname = '/profile-screen.html'
        }

        // AQUI ESTÁ O LAYOUT (provavel necessidade de refatorar)
        let resumeStyle = `
            <div class="curriculum-image">
                <img src="./assets/images/logo_ee_old.png">
            </div>

            <div class="curriculum-data">
                <div class="curriculum-name">
                    <h6 class="each-name">
                        ${curriculum.UserInfo.first_name} ${curriculum.UserInfo.last_name}
                    </h6>
                </div>

                <div class="curriculum-info">
                    <ul class="each-info">
                        <li class="personal-info">
                            ${curriculum.UserInfo.gender}, ${curriculum.UserInfo.age} anos
                        </li>

                        <li class="each-skill">
                            ${curriculum.UserInfo.general_role}
                        </li>
                    </ul>
                </div>
            </div>
        `

        // ADICIONA O LAYOUT COM AS INFORMAÇÕES DENTRO DO CARD
        resumeDiv.innerHTML += resumeStyle

        // INSERE ELE DENTRO DA TABELA DE CURRÍCULOS
        curriculumTable.appendChild(resumeDiv)
    })
}