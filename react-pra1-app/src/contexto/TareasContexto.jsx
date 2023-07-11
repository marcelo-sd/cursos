import { createContext, useState ,useEffect} from "react";
import { tasks as data } from "../datos/tasks";

export const TareasContexto = createContext();
// este es el que almacena los datos

//y este lo contine a todos los componenetes
export function TareasContextoProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTarea({ titulo, descripcion }) {
    setTasks([
      ...tasks,
      {
        titulo: titulo,
        id: tasks.length,
        descripcion: descripcion,
      },
    ]);
  }

  function borrarTarea(tareaId) {
    setTasks(tasks.filter((tta) => tta.id !== tareaId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TareasContexto.Provider
      value={{
        tasks,
        createTarea,
        borrarTarea,
      }}
    >
      {props.children}
    </TareasContexto.Provider>
  );
}
