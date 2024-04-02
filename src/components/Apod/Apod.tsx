import { useEffect, useState } from "react"
import { Apods } from "./TypeApod"
import Loader from "../Loader/Loader"


const Apod = () => {
    const [apod, setApod] = useState<Apods | null >(null)
    const [loader, setLoader] = useState<boolean>(false)

    useEffect(() => {
        setLoader(true)
        const getApod = () => {
            const URL = 'https://api.nasa.gov/planetary/apod?api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR'
            fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setApod(data)
                setLoader(false)
            })
        }
        getApod()
    },[])

    return (
        <div className="flex flex-col p-4">
        <div className="flex">
            <small className="text-gray-500">Inicio / Imagen del dia</small>
        </div>
        {loader && <Loader />}
        <div className=" flex items-center justify-center">
            {!loader && apod ?
                <div className=" flex flex-col justify-center w-2/4 max-md:max-lg:w-[70%] max-sm:w-full ">
                    <h1 className="text-3xl font-bold max-sm:text-2xl max-md:text-2xl max-lg:text-2xl">{apod.title}</h1>
                    <img src={apod.hdurl} alt={apod.title} className="object-cover aspect-video" />
                    <div className="flex my-2 gap-4 ">
                        <small>{apod.date}</small>
                        <small>copyright {apod.copyright}</small>
                    </div>
                    <p>{apod.explanation}</p>
                </div>
                : <span className="text-2xl">Buscando Imagen del Dia...</span>}
            </div>
            
        </div>
    )
}

export default Apod