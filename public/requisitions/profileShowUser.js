import { gatherUser, getAddress, getJob} from "./profileScreenFetch.js"

const userCard = document.getElementById('UserCard')
const jobTable = document.getElementById('JobTable')

document.addEventListener('DOMContentLoaded', (e) => {
    showInfo()
})

const showInfo = async () => {
    const { UserInfo, JobExperiences } = await gatherUser()
    const Address = await UserInfo.Address
    await showUser(UserInfo, Address)
    await showJob(JobExperiences)
}

const showUser = async (UserInfo, Address) => {
    const userDiv = document.createElement('div')
    userDiv.classList.add('profile-main-section')
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
    userCard.appendChild(userDiv)
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