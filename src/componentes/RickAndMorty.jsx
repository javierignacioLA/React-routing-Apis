import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

const RickAndMorty = () => {
    const [listaPersonajes, setListaPersonajes] = useState([]);

    useEffect(() => {
      obtenerEpisodios();
    }, []);

    const obtenerEpisodios = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          const data = await response.json();
          console.log (data)
          setListaPersonajes(data.results)
          
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div>
        <h1>Personajes Rick and Morty</h1>
        {listaPersonajes? (<ul>
          {listaPersonajes.map((personajes) => (
            <li key={personajes.id}>
                <Link to={`/rickandmorty/${personajes.id}`} style={{textDecoration: "none"}}>{personajes.name} - {personajes.location.name} </Link>
            </li>
          ))}
        </ul>): (<h2>Cargando personajes de RAM</h2>)}
      </div>
  )
}


export default RickAndMorty