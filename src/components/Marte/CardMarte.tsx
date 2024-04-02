import { Photos } from "./TypesMarte";

const CardMarte: React.FC<{ photos: Photos}> = ({photos}) =>{
    return (
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
    )
}

export default CardMarte