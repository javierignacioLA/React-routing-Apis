import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const PersonajeRAM = () => {
    
    //console.log (useParams())
    const {id} = useParams()
    //console.log (id)
    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
      obtenerPersonaje();
    }, []);

    const obtenerPersonaje = async () => {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          const data = await response.json();
          console.log (data)
          setPersonaje(data)
          
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div> { 
        personaje.id? (
        <div className="card" style={{width: "10rem"}}>
        <img className="card-img-top" src={personaje.image} alt={personaje.name}/>
        <div className="card-body">
         <h5 className="card-title">{personaje.name}</h5>
            <p className="card-text">Genero: {personaje.gender} Estatus: {personaje.status}  Especie: {personaje.species}</p>
            </div>
         </div>
        ):
        (<h2>Cargando personaje</h2>)
        
        }
        
    </div>
    
  )
}

export default PersonajeRAM