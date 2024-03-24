import { useEffect, useState } from "react"
import { Apods } from "./TypeApod"



const Apod = () => {
    const [apod, setApod] = useState<Apods | null >(null)

    useEffect(() => {
        const getApod = () => {
            const URL = 'https://api.nasa.gov/planetary/apod?api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR'
            fetch(URL)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setApod(data)
            })
        }
        getApod()
    },[])

    if(!apod) {
        return
    }
    return (
        <div className=" flex flex-col p-4">
        <div className="flex">
            <small className="text-gray-500">Inicio / Imagen del dia</small>
        </div>
            <div className=" flex items-center justify-center">
                <div className=" flex flex-col items-center justify-center w-2/4 max-md:max-lg:w-[70%] max-sm:w-full ">
                    <h1 className="text-3xl font-bold max-sm:text-2xl max-md:max-lg:text-2xl">{apod.title}</h1>
                    <img src={apod.hdurl} alt={apod.title} className="object-cover" />
                    <div className="flex p-2 gap-4 ">
                        <small>{apod.date}</small>
                        <small>copyright {apod.copyright}</small>
                    </div>
                    <p>{apod.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default Apod