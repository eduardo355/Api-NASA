import { getNeo } from "./types"



const Getter = async (URL: string): Promise<getNeo | null> => {
    return await fetch(URL)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return new Error('La solicitud no fue exitosa')
        }
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.log(error)
        return false
    })
}

export default Getter