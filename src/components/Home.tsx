import { useEffect, useState } from "react"


const Home = () => {

    const [apo, setApo] = useState([])

    useEffect(() => {
            const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR'
            fetch(URL)
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    return
                }
            })
            .then((data) => {
                console.log(data)
                return setApo(data) 
            }) 
            .catch((error) => {
                console.log(error)
            })
    }, [])
    
    return (
        <>
            <h1>Pagina de la nasa</h1>
        </>
    )
}

export default Home