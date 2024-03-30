import { useNavigate } from "react-router-dom"
import Search from "./Search"

const Nav = () => {
    const navegacion = useNavigate()
    return (
        <div className="flex items-center justify-between p-5 max-sm:flex-col max-md:flex-col">
            <div className="flex items-center">
            <h1 className="text-4xl font-bold">NASA - API</h1>
            <img src="./nasa.png" className="max-sm:w-[50px] w-[96px]" alt="" />
            </div>
            <div className=" flex items-center justify-center gap-4 max-sm:flex-col">
                <button onClick={() => navegacion('/Marte')} className="relative overflow-hidden transition">
                    <span className="absolute inset-0 before:bg-black before:w-0 before:h-[1px] before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full"></span>
                    Imagenes de Marte
                </button>
                <button onClick={() => navegacion('Apod')} className="relative overflow-hidden transition">
                    <span className="absolute inset-0 before:bg-black before:w-0 before:h-[1px] before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full"></span>
                    Imagen del día
                </button>
                <Search />
            </div>
        </div>
    )
}

export default Nav