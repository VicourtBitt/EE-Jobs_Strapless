export const postUsers = async (valuesList) => {
    const treatedUser = treatUsers(valuesList)
    console.log(JSON.stringify(treatedUser))
    const requisition = await fetch('http://localhost:3001/api/users', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(treatedUser)
    })
    await console.log(requisition)
    // await console.log(info)
}

const treatUsers = (values) => {
    let treatedUser = {
        cpf_cnpj : values.cpf_cnpj,
        first_name : values.first_name,
        last_name : values.last_name,
        gender : values.gender,
        age : values.age,
        email: values.email,
        password: values.password,
        general_role : values.general_role
    }

    return treatedUser
}