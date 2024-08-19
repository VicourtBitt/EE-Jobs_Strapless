import { fetchUser } from './fetchUsers.js'
import { getAddress } from './profileScreenFetch.js'

document.addEventListener('DOMContentLoaded', async (e) => {
    sessionStorage.removeItem('loginInfo')
    const userCard = document.getElementById('UserCard')
    const chgJob = document.getElementById('chgJob')
    const chgAddress = document.getElementById('chgAddress')
    const chgPhones = document.getElementById('chgPhones')
    const chgRole = document.getElementById('chgRole')

    const btnChg = [chgJob, chgAddress, chgPhones, chgRole]

    const currentUser = sessionStorage.getItem('userId')
    if (!currentUser) {
        window.location.pathname = '/login-screen.html'
    }

    const info = await fetchUser(`users/${currentUser}`)

    const showUser = async (allInfos= info) => {
        const { Email, UserInfo, JobExperience } = allInfos
        const { Address, PhoneNumbers } = UserInfo
        const newDiv = document.createElement('div')
        newDiv.classList.add('profile-sheet') 

        const divLayout = `
            <h1 class='profile-greetings'>
                Seja bem-vindo(a) ${UserInfo.first_name + ' ' + UserInfo.last_name}
            </h1>

            <div class='profile-card'>
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
            </div>
        `

        newDiv.innerHTML = divLayout

        userCard.appendChild(newDiv)
    }

    const buttonListener = (list) =>{
        const btnConf = {
            chgJob: 'jobs',
            chgAddress: 'address',
            chgPhones: 'phones',
            chgRole: 'role'
        }

        list.forEach((elem) => {
            elem.addEventListener(('click'), (e) => {
                sessionStorage.setItem('operation', btnConf[elem.id])
                window.location.pathname = '/update-infos.html'
            })
        })
    }

    buttonListener(btnChg)
    await showUser()
})