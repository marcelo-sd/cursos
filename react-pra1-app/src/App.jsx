import TaskList from "./componentes/TaskList";
import TareaFormulario from "./componentes/TareaFormulario";

/* function HolaMundo() {
  return 
    <div>
      hola hijop de puta
      <TaskList />
    </div>
  
} */

//los ... son para copiar el arreglo
//lo que hace esta funcion es copiar el arreglo y luego agregar mas objetos(va a retornar un NUEVO arreglo)

function App() {
  return (
    <main
      className="bg-zinc-900 
    h-screen 
    
    "
    >
      <h1>hijo de puta</h1>

      <div className="conteiner  mx-auto
     pt-10
     
      ">
     
        <TareaFormulario />
        <TaskList />
      </div>
    </main>
  );
}
//problemas con el create tasks

export default App;
/* rfce PARA rear un componente 
imp para importar


*/
