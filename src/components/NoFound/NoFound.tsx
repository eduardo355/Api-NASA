import { useNavigate } from "react-router-dom"

const NoFound = () => {
    const navegacion = useNavigate()
    return (
        <div className=" relative h-screen">
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src="./cielo-estrellado.webp" alt="" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="text-sky-400 text-5xl" >Error 404: Pagina no encontrada</h2>
                <p className="text-white text-3xl">Lo sentimos, la página que estás buscando no existe.</p>
                <button onClick={() => navegacion('/')} className="mt-10 bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Ir al inicio
                </button>
            </div>
        </div>
    )
}

export default NoFound