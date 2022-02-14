
import React,{useState} from 'react';

export default function Cursoform(props) {
    const [texto,setTexto] = useState('');
    const textoIngresadoHalder=(event)=>{
        setTexto(event.target.value);
    }
    const agregarCursoHandler=(event)=>{
        event.preventDefault();
        const nuevoCurso = {
            id: Math.floor(Math.random()*10000),
            cursos: texto
        }

        console.log("Enviando Formulario",nuevoCurso);
    }
  return(
  <form onSubmit={agregarCursoHandler} >
      <input type='text' 
      id='id'
      placeholder='Ingrese un nuevo curso' 
      onChange={textoIngresadoHalder}
      value={texto}
      />
      {/*<button>
          Agregar Curso
      </button>*/}
  </form> 
  );
}
