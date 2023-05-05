import React, {useEffect, useState} from 'react'

const Pokemones = () => {
    const [listaPokemones, setListaPokemones] = useState([]);

    useEffect(() => {
      obtenerPokemones();
    }, []);

    const obtenerPokemones = async () => {
        try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
          const data = await response.json();
          console.log (data)
          setListaPokemones(data.results)
          
        } catch (error) {
          console.log(error);
        }
      };
  
    return (
      <div>
        <h1>Lista de pokemones</h1>
       {listaPokemones? ( <ul>
          {listaPokemones.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>)
        : 
        (<h2>Cargando pokemones pa</h2>)
        }
      </div>
    );
  };

export default Pokemones