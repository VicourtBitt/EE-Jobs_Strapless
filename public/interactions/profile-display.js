async function gatherFromJson () {
    const request = await fetch("/db.json")
    const info = await request.json()
    const resumes = info["resumes"]
    putInScreen(resumes)
}

const curriculumTable = document.getElementById("curriculum-table")

async function putInScreen (array) {
    array.forEach((elem) => {
        const newDiv = document.createElement("div")
        newDiv.classList.add("card-curriculum")
        let cardStyle = `
                        <!-- Each Curricullum -->
                        <div class="curriculum-image">
                            <img src="./assets/images/logo_ee_old.png">
                        </div>

                        <div class="curriculum-data">
                            <div class="curriculum-name">
                                <h6 class="each-name">${elem.name}</h6>
                            </div>

                            <div class="curriculum-info">
                                <ul class="each-info">
                                    <li class="personal-info">${elem.naturality}, ${elem.age} anos</li>
                                    <li class="each-skill">${elem.generalRole}</li>
                                </ul>
                            </div>
                        </div>
                        `
        newDiv.innerHTML += cardStyle
        curriculumTable.appendChild(newDiv)
    })
} 

gatherFromJson()