import ReactDOM from 'react-dom/client'
import './index.css'
import Pokedex from './pages/Pokedex/index.jsx'
import Pokemon from './Services/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Pokedex/>
        <Pokemon/>
    </>
)


let randomPokemon = Math.floor(Math.random() * 150)
      console.log(randomPokemon);

      let randomLvl = Math.floor(Math.random() * 70) ;
      console.log(randomLvl);
