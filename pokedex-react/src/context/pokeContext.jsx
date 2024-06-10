import { createContext,useEffect,useState } from "react";
import { getPokeCapt } from '../services/jsonSv/index.jsx'

export const PokeContext = createContext();

export const PokeContextProvider = ({ children }) => {

    const [pokemonList, setPokemonList] = useState([]);

    async function getCapturados(){
        try {
            const results = await getPokeCapt();
            setPokemonList(results.data)
        } catch {
            console.log("Ocorreu um erro")
        }
    }

    function updateList() {
        getCapturados()
    }

    useEffect(()=> {
        getCapturados()
    },[])

    return (
        <PokeContext.Provider
            value={{
                pokemonList,
                updateList
            }}
        >
            { children }
        </PokeContext.Provider>
    )
}