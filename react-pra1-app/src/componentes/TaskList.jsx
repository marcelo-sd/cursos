import TareaTargeta from './TareaTargeta'


import { useContext } from "react";
import {TareasContexto} from '../contexto/TareasContexto'



//clg es de console.log
function TaskList() {

const{tasks}=useContext(TareasContexto)



  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center my-20'>no hay tareas aun</h1>;
  }

  return (
    <div className='grid grid-cols-4  gap-2'>
      {tasks.map((task) => (
        <TareaTargeta key={task.id} task={task}   />
      ))}
    </div>
  );
}

export default TaskList;
