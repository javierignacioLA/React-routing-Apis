import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import Inicio from './componentes/Inicio.jsx';
import Pokemones from './componentes/Pokemones';
import Marvel from './componentes/Marvel';
import RickAndMorty from './componentes/RickAndMorty';
import PersonajeRAM from './componentes/PersonajeRAM';

function App() {
  return (
    <Router>
      <div className="container mt-5">

        <nav className='navbar navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand btn btn-dark'> Inicio </Link>
          <Link to='/contacto' className='navbar-brand btn btn-dark'> Contacto </Link>
          <Link to='/nosotros' className='navbar-brand btn btn-dark'> Nosotros</Link>
          <Link to='/pokemones' className='navbar-brand btn btn-dark'> Pokemones</Link>
          <Link to='/marvel' className='navbar-brand btn btn-dark'> Marvel</Link>
          <Link to='/rickandmorty' className='navbar-brand btn btn-dark'> Rick y Morty</Link>
          
        </nav>
        <hr/>
        <Routes>
          <Route path="/contacto" element ={<Contacto/>}/>
          <Route path="/nosotros" element ={<Nosotros/>}/>
          <Route path="/pokemones" element ={<Pokemones/>}/>
          <Route path="/marvel" element ={<Marvel/>}/>
          <Route path="/rickandmorty" element ={<RickAndMorty/>}/>
          <Route path="/rickandmorty/:id" element ={<PersonajeRAM/>}/>
          <Route path="/" element ={<Inicio/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
