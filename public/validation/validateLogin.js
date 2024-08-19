export const validateLogin = async (values) => {
    const toSearch = JSON.parse(values)
    const registerInfo = await fetch(`http://localhost:3001/api/private/register/${toSearch.email}`)
    const info = await registerInfo.json()
    if (toSearch.password == info.password) {
        return info.userRegisterId
    } else {
        return false
    }
}