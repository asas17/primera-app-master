import Hola from "./components/Hola";
//import Contador from "./components/Contador";
import Cursos from './components/Cursos';
import React,{useState} from "react";
import Cursoform from "./components/Cursoform";

const Listado_Cursos =[
  {id:1, cursos:'Aprendiendo Laravel'},
  {id:2, cursos:'Curso de docker para principiantes'},
  {id:3, cursos:'Construyenedo Rest api desde cero'},
  {id:4, cursos:'Curso de POO'},
]

function App() {
  const [cursos,setCursos] = useState(Listado_Cursos);

  const eliminarCursos = (id)=>{
    console.log("Eliminar cursos" ,id )
    const nuevosCursos = cursos.filter(item =>{
        return item.id!==id;
    });
    setCursos(nuevosCursos);
}
  return (
    <div>
        <h1>
          Hola Mundo
          </h1>
        { /*<Hola mensaje="Este es un mensaje" pie="fecha 7-2-22" />
        <Hola mensaje="Esmeraldas"  pie="Ciudad" />
        <Hola mensaje="Ecuador" pie="pais"/>
        */
         //<Contador></Contador>
         }
         <Cursos cursos={cursos} onEliminarCursos={eliminarCursos} />  
          
    </div>
  );
}

export default App