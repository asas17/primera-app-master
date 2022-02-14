import React from 'react';
import Cursoform from './Cursoform';


export default function Cursos({cursos, onEliminarCursos}) {
    const recibir=()=>{
        var rec = document.getElementById("id").value;
        document.getElementById("escribir").innerHTML= "EL curso nuevo es :"+rec+""
    }
    const eliminarCursoHandler = (id) =>{
        console.log("Eliminando curso...", id);
        onEliminarCursos(id);
    }
    
  return <div>
      <h2>
          Listado de Cursos
      </h2>
      <hr/>
            <Cursoform/>
            <div id='escribir'>
                <button onClick={recibir}>
                    Agregar
                </button>
            </div>
        <hr/>
      <ul>  
          {
              cursos.map(item =>(
                  <li key={item.id} >{item.id} - {item.Cursos}
                  <br></br>
                    <button className='btn btn-warning' onClick={ ()=>eliminarCursoHandler(item.id)} >Eliminar curso  </button>
                  </li>
              ))
          }
      </ul>
  </div>;
}
