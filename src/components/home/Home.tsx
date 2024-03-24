import { useEffect, useState } from "react";
import { near_earth_objects, data } from "./TypesHome";
import { useNavigate } from "react-router-dom";
import { SearchGlobal } from "../Global";
import Loader from "../Loader/Loader";
import Getter from "../Getter";
import Nav from "../nav/nav";

const Home = () => {
    const navegacion = useNavigate();
    const { SearchInput } = SearchGlobal();
    const [error, setError] = useState(false);
    const [nextPage, setNextPage] = useState(0);
    const [loader, setLoader] = useState(false);
    const [apo, setApo] = useState<near_earth_objects[]>([]);

    useEffect(() => {
        setLoader(true);
        const get = async () => {
        try {
            const URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${nextPage}&size=20&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`;
            const response = await Getter(URL);
            if (response) {
            const data: data = response;
            setApo(data.near_earth_objects);
            setLoader(false);
            } else {
            setError(true);
            }
        } catch (error) {
            setError(true);
        }
        };
        get();
    }, [nextPage]);

    if (error) {
        return (
        <h1 className=" text-center font-bold text-2xl text-balance">
            Ha ocurrido un error, intentalo mas tarde.
        </h1>
        );
    }

    const handleNext = () => {
        setNextPage(nextPage + 1);
    };

    const handlePrev = () => {
        setNextPage(nextPage - 1);
    };

    const listFilter = SearchInput
        ? apo.filter((name) => name.name.includes(SearchInput))
        : apo;

    const typeColor = (typeAsteroid: boolean) => {
        return typeAsteroid
        ? "from-red-500 to-red-900"
        : "from-indigo-500 to-indigo-900";
    };
    return (
        <div>
        <Nav />
        {loader && <Loader />}
        <div className=" flex flex-col">
            <div className=" flex gap-5 mt-4 flex-wrap justify-center">
            {listFilter.length > 0 && !loader ? (
                listFilter.map((neo: near_earth_objects) => {
                const typeAsteroid = neo.is_potentially_hazardous_asteroid;
                const gradientColor = typeColor(typeAsteroid);
                return (
                    <div
                    key={neo.id}
                    className={`group flex flex-col justify-start items-start gap-2 w-80 max-sm:w-96 h-auto duration-500 relative rounded-lg p-4 bg-gradient-to-r ${gradientColor}`}
                    >
                    <div className=" flex flex-col h-52">
                        <h2 className="text-2xl font-bold mb-2 text-balance text-gray-100">
                        {neo.name}
                        </h2>
                        <span className="text-gray-400">
                        <b className="text-white">Designacion:</b>{" "}
                        {neo.designation}
                        </span>
                        <span className="text-gray-400">
                        <b className="text-white">Magnitud absoluta:</b>{" "}
                        {neo.absolute_magnitude_h}
                        </span>
                        <span className="text-white text-xl">
                        <b>Diametro:</b>
                        </span>
                        <div className=" flex flex-col">
                        <span className="text-gray-400">
                            <b className="text-white">Maximo:</b>{" "}
                            {
                            neo.estimated_diameter.kilometers
                                .estimated_diameter_max
                            }
                        </span>
                        <span className="text-gray-400">
                            <b className="text-white">Minimo:</b>{" "}
                            {
                            neo.estimated_diameter.kilometers
                                .estimated_diameter_min
                            }
                        </span>
                        </div>
                        <span className="text-gray-400">
                        <b className="text-white">Potencialmente peligroso:</b>{" "}
                        {neo.is_potentially_hazardous_asteroid ? "Si" : "No"}
                        </span>
                        <img
                        className="absolute left-52 top-20 opacity-40"
                        src="./asteroide.png"
                        alt=""
                        width={90}
                        />
                    </div>
                    <button
                        onClick={() => navegacion(`/Asteroide/${neo.id}`)}
                        className={` ${
                        typeAsteroid
                            ? "bg-red-400 hover:bg-red-500"
                            : "bg-indigo-400 hover:bg-indigo-500"
                        } bg-indigo-300 text-gray-100 mt-6 rounded p-2 px-6`}
                    >
                        Ver mas
                    </button>
                    </div>
                );
                })
            ) : (
                <span className="text-2xl">Buscando Asteroides...☄️</span>
            )}
            </div>
            <div className="flex justify-center items-center gap-10 mt-4 mb-4">
            {!SearchInput && nextPage > 0 && listFilter.length > 0 && !loader && (
                <button
                onClick={handlePrev}
                className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-neutral-400 border border-indigo-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                >
                <span className="bg-indigo-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Pagina anterior
                </button>
            )}
            {!SearchInput && !loader && (
                <button
                onClick={handleNext}
                className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-neutral-400 border border-indigo-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                >
                <span className="bg-indigo-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Siguiente pagina
                </button>
            )}
            </div>
        </div>
        </div>
    );
};

export default Home;
