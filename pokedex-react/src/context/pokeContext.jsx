import { createContext,useEffect,useState } from "react";
import { getPokeCapt } from '../services/jsonSv/index.jsx'

export const PokeContext = createContext();

export const PokeContextProvider = ({ children }) => {

    const [pokemonList, setPokemonList] = useState([]);

    function logUser(user_id) {
        localStorage.setItem('user_id',user_id)
    }

    async function getCapturados(){
        try {
            const results = await getPokeCapt();
            setPokemonList(results.data.filter((element) => {
                return (element.user_id == localStorage.getItem("user_id"))
            }))
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
                updateList,
                logUser
            }}
        >
            { children }
        </PokeContext.Provider>
    )
}