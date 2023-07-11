

import { useContext } from "react";
import {TareasContexto} from '../contexto/TareasContexto'

function TareaTargeta({task}) {

  const {  borrarTarea}=useContext(TareasContexto)
  return (
    <div className="bg-gray-800  text-white  
    p-4
    rounded-md

    
    "  
      
    >
      <h1 className="text-xl
      font-bold capitalize
      
      ">{task.titulo}</h1>
      <p className="text-gray-500
      text-sm
      ">{task.descripcion}</p>
      <button onClick={() => borrarTarea(task.id)}
      className="bg-red-500
      px-2
      py-1
      rounded-md
      mt-4

hover:bg-red-400

      
      "
      
      
      >Borrar tarea</button>
    </div>
  );
}

export default TareaTargeta;
