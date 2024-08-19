export const formJobs = async (userId, table, title) => {
    const jobRequest = await fetch(`http://localhost:3001/api/search/userJobs/${userId}`)
    const info = await jobRequest.json()
    title.innerText = "Experiências de Trabalho"

    await addInfo(info, table, 'jobs')
}

const addInfo = async (info, table, type) => {
    info.forEach( async (job) => {
        const newRow = document.createElement('tr')
        newRow.classList.add('info-row')
        let rowData = null
        if (type == 'jobs') {
            rowData = `
                <td class='form-id'>
                    ${job.id}
                </td>

                <td class='form-name'>
                    ${job.full_name}
                </td>

                <td class='form-role'>
                    ${job.role_at_time}
                </td>

                <td class='form-company'>
                    ${job.company_name}
                </td>

                <td class='form-payment'>
                    R$ ${job.average_payment}
                </td>    
            `
        } else if (type == 'role') {
            rowData = `
                <td class='form-role'>
                    ${job.general_role}
                </td>
            `
        }

        newRow.innerHTML = rowData
        table.appendChild(newRow)
    })
}

export const formAddress = async () => {
    console.log('oi')
}

export const formPhones = async () => {
    console.log('oi')
}

export const formRole = async (userId, table, title) => {
    const roleRequest = await fetch(`http://localhost:3001/api/search/role/${userId}`)
    const info = await roleRequest.json()
    title.innerText = "Cargo Geral"

    await addInfo(info, table, 'role')
}

export const editRole = async (value, userId) => {
    const request = await fetch(`http://localhost:3001/api/search/role/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({general_role: value})
    })
    const info = await request.json()
}