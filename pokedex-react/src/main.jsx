import ReactDOM from 'react-dom/client'
import './index.css'
import Pokedex from './pages/Pokedex/index.jsx'
import Login from './components/Login/login.jsx'
import { PokeContextProvider } from './context/pokeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <PokeContextProvider>
            {/* <Login/> */}
            <Pokedex/>
        </PokeContextProvider>
    </>
)