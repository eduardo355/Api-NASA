import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Photos } from "./TypesMarte";
import Loader from "../Loader/Loader";
import Getter from "../Getter";
import Filter from "./Filter";
import { SearchGlobal } from "../Global";

const Marte = () => {
  const navegacion = useNavigate();
  const location = useLocation();
  const { SearchInput, reset } = SearchGlobal()
  const [marte, setMarte] = useState<Photos[] | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, estError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [cargo, setCargo] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    setPage(pageParam ? parseInt(pageParam, 10) : 1);
    setCargo(true);
  }, [location.search]);

  useEffect(() => {
    if (cargo) {
      const getMarte = async () => {
        setLoader(true);
        try {
          const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`;
          const response = await Getter(URL);
          if (response) {
            const data = response;
            setMarte(data.photos);
            setLoader(false);
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
    if (SearchInput) {
      setLoader(true);
      try {
        const getMarte = async () => {
          const response = await Getter(SearchInput);
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
  }, [SearchInput]);

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

  return (
    <div className=" flex flex-col p-4">
      <div className="flex">
        <small className="text-gray-500">Inicio / Marte Fotos</small>
      </div>
      <Filter />
      <div className=" flex gap-5 mt-4 flex-wrap max-sm:flex-nowrap max-sm:flex-col justify-center">
        {loader ? (
          <div className="flex flex-col justify-center">
            <Loader />
            <span className="text-2xl text-center">Cargando Imagenes..</span>
          </div>
        ) : marte && marte?.length > 0 ? (
          marte.map((photos: Photos) => (
            <div
              key={photos.id}
              className=" flex flex-col w-1/3 max-sm:w-full "
            >
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
          <span className="text-2xl text-center">
            No se encontraron imagenes.
          </span>
        )}
      </div>
      <div className=" flex items-center justify-center gap-5 mt-4">
        {page > 1 && !loader && (
          <button
            onClick={handlePrev}
            className="relative overflow-hidden transition text-xl"
          >
            <span className="absolute inset-0 before:bg-black before:w-0 before:h-[1px] before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full"></span>
            Regresar
          </button>
        )}
        {!loader && !reset && (
          <button
            onClick={handleNext}
            className="relative overflow-hidden transition text-xl"
          >
            <span className="absolute inset-0 before:bg-black before:w-0 before:h-[1px] before:absolute before:left-0 before:bottom-0 before:transition-all hover:before:w-full"></span>
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Marte;
