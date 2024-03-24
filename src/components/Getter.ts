import { data } from "./home/TypesHome"


const Getter = async (URL: string): Promise<data | null> => {
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