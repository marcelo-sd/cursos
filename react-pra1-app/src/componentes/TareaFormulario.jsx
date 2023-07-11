import { useState, useContext } from "react";
import { TareasContexto } from "../contexto/TareasContexto";

function TareaFormulario() {
  const [titulo, settitulo] = useState("");

  const [descripcion, setdescripcion] = useState("");
  const { createTarea } = useContext(TareasContexto);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTarea({ titulo, descripcion });

    settitulo("");
    setdescripcion("");
  };

  return (
    <div
      className="max-w-md  
  mx-auto
"
    >


      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-slate-800
    p-10
    mb-4
    
    "
      >
        <h1 className="capitalize text-2xl font-bold text-white mb-3">crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            settitulo(e.target.value);
          }}
          value={titulo}
          autoFocus
          //hace que el cursor ya este para escribir
          className="bg-slate-300 p-3 w-full mb-2 "
        />

        <textarea
          placeholder="escribe una descripcion de la tarea"
          onChange={(e) => setdescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 
       p-3
        w-full
         mb-2 "
        />
        <button className="bg-indigo-800 px-3 py-1 text-emerald-200">
          GUARDAR
        </button>
      </form>
    </div>
  );
}

export default TareaFormulario;
// una vez que estoy seguro que capturo el dato lo voy a guardar en un estado para eso importo use State
