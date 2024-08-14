import { fetchUser } from "./fetchUsers.js"

export const gatherUser = async () => {
    let userId = sessionStorage.getItem('last_profile')
    const info = await fetchUser(`users/${userId}`)
    return info
}

export const getAddress = (obj) => {
    try {
        const { city, state, country } = obj
        return `${city}, ${state} - ${country}`
    } catch (error) {
        return `Brasil`
    }
}

export const getJob = (obj) => {
    try {
        const { role_at_time, average_payment} = obj
        
    } catch (error) {

    }
}