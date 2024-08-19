import { gatherUser, getAddress, getJob} from "./profileScreenFetch.js"

const userCard = document.getElementById('UserCard')
const jobTable = document.getElementById('JobTable')
const btnModal = document.getElementById('OpenModalBtn')
const modal = document.querySelector('dialog')
const modalBox = document.getElementById('InfoModal')
const closeModal = document.getElementById('closeModal')

btnModal.addEventListener('click', (e) => {
    modal.showModal()
})

closeModal.addEventListener('click', (e) => {
    modal.close()
})

document.addEventListener('DOMContentLoaded', (e) => {
    showInfo()
})

const showInfo = async () => {
    const { UserInfo, JobExperiences, Email } = await gatherUser()
    const Address = await UserInfo.Address
    await showUser(UserInfo, Address, Email)
    await showJob(JobExperiences)
}

const showUser = async (UserInfo, Address, Email) => {
    await addIntoModal(UserInfo, Email)

    const newBanner = document.createElement('div')
    newBanner.classList.add('card-banner')

    const userDiv = document.createElement('div')
    userDiv.classList.add('user-card')
    userDiv.id = 'UserProfile'
    
    const mainCardLayout = `
        <div class="people-photo-box">
            <img loading="lazy" class="profile-photo" src="./assets/images/obj_person.png">
        </div>

        <div class="people-info-box">
            <h2 id='UserName' class="people-name">
                ${UserInfo.first_name} ${UserInfo.last_name}
            </h2>

            <h3 id="UserRole" class="people-info">
                ${UserInfo.general_role}
            </h3>

            <h3 id='UserGenderAge' class="people-info">
                ${UserInfo.gender}, ${UserInfo.age} anos
            </h3>

            <h3 id='UserLocality' class='people-locality'>
                ${getAddress(Address)}
            </h3>
        </div>
    `
    document.title = `Perfil de ${UserInfo.first_name} ${UserInfo.last_name}`
    userDiv.innerHTML = mainCardLayout

    newBanner.appendChild(userDiv)

    userCard.appendChild(newBanner)
}

const showJob = async (JobExperiences) => {
    JobExperiences.forEach((job) => {
        const jobDiv = document.createElement('div')
        jobDiv.classList.add('job-card')

        const jobCardLayout = `
            <div class="company-info">
                <h2 id='CompanyName' class='job-company'>
                    ${job.CompanyRegister.company_name}
                </h2>

                <h2 id='RoleName' class='job-info'>
                    ${job.CompanyRegister.company_sector}
                </h2>

                <h2 id='RoleName' class='job-info'>
                    ${job.role_at_time}
                </h2>
                
                <h2 id='RoleName' class='job-info'>
                    R$${job.average_payment}
                </h2>
            </div>

        `

        jobDiv.innerHTML = jobCardLayout
        jobTable.appendChild(jobDiv)
    })
}

const addIntoModal = async (UserInfo, Email) => {
    const { PhoneNumbers } = UserInfo
    const modalInfo = document.createElement('div')
    modalInfo.classList.add('modal-info')

    let infoLayout = ``

    if (!PhoneNumbers[0]) {
        infoLayout += `
            <div class='modal-contact'>
                Telefone: Nenhum Cadastrado
            </div>
        `
    } else {
        infoLayout += `
            <div class='modal-contact'>
                Telefone: ${PhoneNumbers[0].phone_number}
            </div>
        `
    }

    if (!Email) {
        infoLayout += `
        <div class='modal-contact'>
            Email: ${'Não cadastrado'}
        </div>
    `
    } else {
        infoLayout += `
        <div class='modal-contact'>
            Email: ${Email.email}
        </div>
    `
    }

    

    modalInfo.innerHTML += infoLayout
    modalBox.appendChild(modalInfo)
}