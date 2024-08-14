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

    userDiv.innerHTML = mainCardLayout
    userCard.appendChild(userDiv)
}

const showJob = async (JobExperiences) => {
    JobExperiences.forEach((job) => {
        const jobDiv = document.createElement('div')
        jobDiv.classList.add('job-card')

        const jobCardLayout = `
            <div class="company-info">
                <h2 id='CompanyName' class='people-info'>
                    ${job.CompanyRegister.company_name}
                </h2>

                <h3 id='RoleName' class='people-info'>
                    ${job.role_at_time}
                </h3>
            </div>

        `

        jobDiv.innerHTML = jobCardLayout
        jobTable.appendChild(jobDiv)
    })
}