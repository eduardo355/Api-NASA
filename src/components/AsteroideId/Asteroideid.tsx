import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNeo, close_approach_data, orbital_data } from '../types'
import Loader from '../Loader/Loader'
import Proxim from './Proxim'
import Orbitaciones from './Orbitaciones'

const AsteroideId: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [asteroid, setAsteroid] = useState<getNeo | null>(null)
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [aprox, setAprox] = useState<close_approach_data[] | null>(null)
    const [orbitacion, setOrbitaciones] = useState<orbital_data | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoader(true)
            try {
                const URL = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`;
                const response = await fetch(URL)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data: getNeo = await response.json()
                setAsteroid(data)
                setAprox(data.close_approach_data)
                setOrbitaciones(data.orbital_data)
                setLoader(false)
            } catch (error) {
                setError(true)
                setLoader(false)
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [id])

    if (error) {
        return <div>Error fetching data</div>
    }

    if (loader) {
        return <Loader />
    }

    return (
        <div className="flex flex-col p-4 items-center">
            <div className="flex w-full">
                <small className="text-gray-500">Inicio / Asteroide</small>
            </div>
            {asteroid && (
                <div className="flex flex-row max-lg:flex-col gap-10 max-sm:flex-col max-sm:gap-0 max-sm:w-full">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold mb-2 text-balance">{asteroid.name}</h1>
                        <span><b>Designacion:</b> {asteroid.designation}</span>
                        <span><b>Magnitud absoluta:</b> {asteroid.absolute_magnitude_h}</span>
                        <span><b>Potencialmente peligroso:</b> {asteroid.is_potentially_hazardous_asteroid ? 'Si' : 'No'}</span>
                        <span className="text-2xl font-bold mt-4">Diametro:</span>
                        <span><b>Maximo:</b> {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km</span>
                        <span><b>Minimo:</b> {asteroid.estimated_diameter.kilometers.estimated_diameter_min} km</span>
                        <span className="text-2xl font-bold mt-4">Clase de orbita:</span>
                        <span><b>Tipo de clase de órbita:</b> {asteroid.orbital_data.orbit_class.orbit_class_type}</span>
                        <p className="w-[34rem] max-sm:w-auto"><b>Descripción de la clase de órbita:</b> {asteroid.orbital_data.orbit_class.orbit_class_description}</p>
                        <span className="w-[34rem] max-sm:w-auto"><b>Rango de la clase de órbita:</b> {asteroid.orbital_data.orbit_class.orbit_class_range}</span>
                        {aprox && <span className="text-2xl font-bold mt-4">Proximas aproximaciones cercanas:</span>}
                        <Proxim aprox={aprox} />
                    </div>
                <div className="flex flex-col">
                    <span className=" text-2xl font-bold">Detalles de orbitacion: </span>
                    <Orbitaciones orbitacion={orbitacion} />
                </div>
            </div>)}
        </div>
    )
}


export default AsteroideId