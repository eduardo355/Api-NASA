import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Getter from "../Getter"
import { getNeo } from "../types"
import Loader from "../Loader/Loader"

const AsteroideId = () => {
    const { id } = useParams()
    const [asteroid, setAsteroid] = useState<getNeo | null>(null)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoader(true)
        const idGet = async () => {
            const URL = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            const data = await Getter(URL)
            if (data) {
                setAsteroid(data)
                setLoader(false)
            } else {
                setError(true)
            }
        }
        idGet()
    }, [])
    console.log(asteroid);

    if(loader) {
        return <Loader />
    }
    return (
        <div
            className={"flex flex-col p-4 items-center"}
        >
        <div className="flex w-full">
            <small className="text-gray-500">Inicio / Asteroide</small>
        </div>
        {asteroid &&     
            <div className=" flex flex-row gap-10 max-sm:flex-col max-sm:gap-0 max-sm:w-full">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold mb-2 text-balance">{asteroid.name}</h1>
                    <span ><b >Designacion:</b> {asteroid.designation}</span>
                    <span ><b >Magnitud absoluta:</b> {asteroid.absolute_magnitude_h}</span>
                    <span><b>Potencialmente peligroso:</b> {asteroid.is_potentially_hazardous_asteroid ? 'Si' : 'No'}</span>
                    <span className=" text-2xl font-bold">Diametro:</span>
                    <div className=" flex flex-col">
                        <span ><b >Maximo:</b> {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</span>
                        <span ><b >Minimo:</b> {asteroid.estimated_diameter.kilometers.estimated_diameter_min}</span>
                    </div>
                    <span className=" text-2xl font-bold">Clase de orbita:</span>
                    <div className=" flex flex-col">
                        <span ><b >Tipo de clase de órbita:</b> {asteroid.orbital_data.orbit_class.orbit_class_type}</span>
                        <p className="w-[34rem] max-sm:w-auto "><b >Descripción de la clase de órbita:</b> {asteroid.orbital_data.orbit_class.orbit_class_description}</p>
                        <span className="w-[34rem] max-sm:w-auto"><b >Rango de la clase de órbita:</b> {asteroid.orbital_data.orbit_class.orbit_class_range}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className=" text-2xl font-bold">Detalles de orbitacion: </span>
                    <dl>
                        <dt><b>Fecha de determinación de la órbita:</b></dt>
                        <dd>{asteroid.orbital_data.orbit_determination_date}</dd>

                        <dt><b>Primera fecha de observación:</b></dt>
                        <dd>{asteroid.orbital_data.first_observation_date}</dd>

                        <dt><b>Última fecha de observación:</b></dt>
                        <dd>{asteroid.orbital_data.last_observation_date}</dd>
                        <dt><b>Arco de datos en días:</b></dt>
                        <dd>{asteroid.orbital_data.data_arc_in_days.toLocaleString('en-US')}</dd>
                        
                        <dt><b>Observaciones utilizadas:</b></dt>
                        <dd>{asteroid.orbital_data.observations_used.toLocaleString('en-US')}</dd>

                        <dt><b>Incertidumbre de la órbita:</b></dt>
                        <dd>{asteroid.orbital_data.orbit_uncertainty}</dd>

                        <dt><b>Intersección mínima de órbita:</b></dt>
                        <dd>{asteroid.orbital_data.minimum_orbit_intersection}</dd>
                    </dl>
                </div>
            </div>}
        </div>
    )
}


export default AsteroideId