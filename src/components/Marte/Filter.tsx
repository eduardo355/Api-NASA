import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchMarteGlobal } from "../Global";

const Filter = () => {
  const navegacion = useNavigate();
  const { setSearchMarte, setReset } = SearchMarteGlobal()
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterAct, setFilterAct] = useState<boolean>(false);
  
  const filterUrl = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const camera = e.currentTarget.value;
    setFilterAct(true);
    setSelectedFilter(camera)
    navegacion(`/Marte`);
    switch (camera) {
      case "FHAZ":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
      case "NAVCAM":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
      case "MAST":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
      case "CHEMCAM":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
      case "MAHLI":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
      case "MARDI":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
      case "RHAZ":
        setSearchMarte(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=xO15lhanHARD6LlOCuvcLDbWgKt0cmXLr3nTaoKR`
        );
        break;
    }
    setReset(true)
  };
  
  const handleReset = () => {
    setFilterAct(false);
    setReset(false)
    setSearchMarte('')
    setSelectedFilter("")
    navegacion(`/Marte`);
  };

  return (
    <div className="flex items-center gap-4">
      <span>Filtrar por camara:</span>
      <select
        onChange={filterUrl}
        value={selectedFilter}
        name=""
        id=""
        className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option selected>Selecciona un filtro..</option>
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
  );
};

export default Filter;
