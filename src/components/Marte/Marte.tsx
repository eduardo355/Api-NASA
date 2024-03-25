import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Photos } from "./TypesMarte";
import Loader from "../Loader/Loader";
import Getter from "../Getter";

const Marte = () => {
    const navegacion = useNavigate();
    const location = useLocation();
    const [filterAct, setFilterAct] = useState<boolean>(false);
    const [marte, setMarte] = useState<Photos[] | null>(null);
    const [loader, setLoader] = useState<boolean>(false);
    const [error, estError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [reset, setReset] = useState(false)
    const [cargo, setCargo] = useState(false)
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const pageParam = searchParams.get('page');
        setPage(pageParam ? parseInt(pageParam, 10) : 1);
        setCargo(true)
    }, [location.search]);    
    
    useEffect(() => {
        if(cargo) {
            const getMarte = async () => {
                setLoader(true);
                    try {
                        const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
                        const response = await Getter(URL);
                        if (response) {
                            const data = response;
                            setMarte(data.photos);
                            setLoader(false);
                            setReset(false)
                        } else {
                        estError(true);
                        }
        
                    } catch (error) {
                    estError(true);
                    }
                };
                getMarte();
        }
    }, [page, reset, cargo]);

    useEffect(() => {
        if(filterAct) {
            setLoader(true);
            try {
            const getMarte = async () => {
                const response = await Getter(url);
                if (response) {
                const data = response;
                console.log(data);
                setMarte(data.photos);
                setLoader(false);
                } else {
                estError(true);
                }
            };
            getMarte();
            } catch (error) {
            estError(true);
            }
        }
    }, [url, filterAct]);


    const filterUrl = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const camera = e.currentTarget.value;
        setFilterAct(true);
        navegacion(`/Marte`);
        switch (camera) {
        case "FHAZ":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        case "NAVCAM":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        case "MAST":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        case "CHEMCAM":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        case "MAHLI":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        case "MARDI":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        case "RHAZ":
            setUrl(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
            );
            break;
        }
    };

    if (error) {
        return;
    }

    const handleNext = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        navegacion(`/Marte?page=${nextPage}`);
    };
    
    const handlePrev = () => {
        const prevPage = page - 1;
        setPage(prevPage);
        navegacion(`/Marte?page=${prevPage}`);
    };
    
    const handleReset = () => {
        setFilterAct(false)
        setReset(true)
        navegacion(`/Marte?page=${page}`);
    };

    return (
        <div className=" flex flex-col p-4">
        <div className="flex">
            <small className="text-gray-500">Inicio / Marte Fotos</small>
        </div>
        <div className="flex items-center gap-4">
            <span>Filtrar por camara:</span>
            <select
            onChange={filterUrl}
            name=""
            id=""
            className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
            <option value="FHAZ">Front Hazard Avoidance Camera</option>
            <option value="NAVCAM">Navigation Camera</option>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">Chemistry and Camera Complex</option>
            <option value="MAHLI">Mars Hand Lens Imager</option>
            <option value="MARDI">Mars Descent Imager</option>
            <option value="RHAZ">RHAZ</option>
            </select>
            {filterAct && <button onClick={handleReset}>Restaurar</button>}
        </div>
        <div className=" flex gap-5 mt-4 flex-wrap max-sm:flex-nowrap max-sm:flex-col justify-center">
            {loader ? (
            <div className="flex flex-col justify-center">
                <Loader />
                <span className="text-2xl text-center">Cargando Imagenes..</span>
            </div>
            ) : marte && marte?.length > 0 ? (
            marte.map((photos: Photos) => (
                <div key={photos.id} className=" flex flex-col w-1/3 max-sm:w-full ">
                    <h1>Rover {photos.rover.name}</h1>
                    <img
                        src={photos.img_src}
                        alt={photos.img_src}
                        className=" aspect-video"
                    />
                    <small>Fecha: {photos.earth_date}</small>
                    <span>Camara: {photos.camera.full_name}</span>
                    <span>Estatus: {photos.rover.status}</span>
                    <span>Total de fotos: {photos.rover.total_photos}</span>
                </div>
            ))
            ) : (
            <span className="text-2xl text-center">No se encontraron imagenes.</span>
            )}
        </div>
        <div className=" flex items-center justify-center gap-5 mt-4">
            {page > 1 && !loader && !filterAct && (
                <button onClick={handlePrev} className="relative overflow-hidden transition text-xl">
                <span className="absolute inset-0 before:bg-black before:w-0 before:h-[1px] before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full"></span>
                    Regresar
                </button>
            )}
            {!loader && !filterAct && (
                <button onClick={handleNext} className="relative overflow-hidden transition text-xl">
                <span className="absolute inset-0 before:bg-black before:w-0 before:h-[1px] before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full"></span>
                    Siguiente
                </button>
            )}
        </div>

        </div>
    );
};

export default Marte;
