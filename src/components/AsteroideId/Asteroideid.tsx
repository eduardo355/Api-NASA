import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Getter from "../Getter"
import { getNeo } from "../types"
const AsteroideId = () => {
    const { id } = useParams()
    const [asteroid, setAsteroid] = useState<getNeo | null>(null)

    useEffect(() => {
        const idGet = async () => {
            const URL = `http://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            const data = await Getter(URL)
            setAsteroid(data)
        }
        idGet()
    }, [])

    if(!asteroid) {
        return
    }
    return (
        <div
            className={`group flex flex-col justify-start items-start gap-2 w-80 h-auto duration-500 relative rounded-lg p-4 bg-gradient-to-r hover:shadow-xl shadow-gray-800`}
        >
            <div className=" flex flex-col h-52">
                <h2 className="text-2xl font-bold mb-2 text-balance text-gray-100">{asteroid.name}</h2>
                <span className="text-gray-400"><b className="text-white">Designacion:</b> {asteroid.designation}</span>
                <span className="text-gray-400"><b className="text-white">Magnitud absoluta:</b> {asteroid.absolute_magnitude_h}</span>
                <span className="text-white text-xl"><b>Diametro:</b></span>
                <div className=" flex flex-col">
                    <span className="text-gray-400"><b className="text-white">Maximo:</b> {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</span>
                    <span className="text-gray-400"><b className="text-white">Minimo:</b> {asteroid.estimated_diameter.kilometers.estimated_diameter_min}</span>
                </div>
                <span className="text-gray-400"><b className="text-white">Potencialmente peligroso:</b> {asteroid.is_potentially_hazardous_asteroid ? 'Si' : 'No'}</span>
                <img className="absolute left-52 top-20 opacity-40" src="./asteroide.png" alt="" width={90} />
            </div>
        </div>
    )
}


export default AsteroideId