import React from 'react';
import Cursoform from './Cursoform';


export default function Cursos({cursos, onEliminarCursos}) {
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
