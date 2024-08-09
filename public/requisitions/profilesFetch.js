export const fetchCurriculums = async (method= "users") => {
    const request = await fetch(`http://34.95.142.6:3001/api/${method}`)
    const infoGathered = await request.json()
    await insertOnScreen(infoGathered)
}

const curriculumTable = document.getElementById("curriculum-table")

const insertOnScreen = async (curriculumArray) => {
    curriculumTable.innerHTML = ""
    curriculumArray.forEach((curriculum) => {
        const resumeDiv = document.createElement('div')
        resumeDiv.classList.add('card-curriculum')
        resumeDiv.id = `${curriculum.id}`
        let resumeStyle = `
            <div class="curriculum-image">
                <img src="./assets/images/logo_ee_old.png">
            </div>

            <div class="curriculum-data">
                <div class="curriculum-name">
                    <h6 class="each-name">${curriculum.UserInfo.first_name} ${curriculum.UserInfo.last_name}</h6>
                </div>

                <div class="curriculum-info">
                    <ul class="each-info">
                        <li class="personal-info">${curriculum.UserInfo.gender}, ${curriculum.UserInfo.age} anos</li>
                        <li class="each-skill">${curriculum.UserInfo.general_role}</li>
                    </ul>
                </div>
            </div>
        `

        resumeDiv.innerHTML += resumeStyle
        curriculumTable.appendChild(resumeDiv)
    })
}

fetchCurriculums()