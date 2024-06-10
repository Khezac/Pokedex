import { useContext, useState } from "react";
import { getPokemon } from "../../services/pokeApi/index.jsx";
import { postPoke } from "../../services/jsonSv/index.jsx";
import styles from "../PokedexEsquerda/style.module.css";
import pokebolaBtn from "../../assets/pokebola_icone.png";
import naoCapturado from "../../assets/POKEMON FUGIU.png"
import capturado from "../../assets/POKEMON CAPTURADO.png"
import { PokeContext } from "../../context/pokeContext.jsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PokedexEsquerda = () => {
  const [pokemon, setPokemon] = useState(null);
  const [randomLvl, setRandomLvl] = useState(null);
  const [isCatching, setIsCatching] = useState(false);
  const [capt, setCapt] = useState(false);
  const [naoCapt, setNaoCapt] = useState(false);

  const { pokemonList,updateList } = useContext(PokeContext);

  async function getPokemonData() {
    setNaoCapt(false);
    setCapt(false);
    try {
      const result = await getPokemon();
      setPokemon(result.data);
      setRandomLvl(Math.floor(Math.random() * (50 - 1) + 1));
    } catch {
      console.log("Falha ao buscar Pokémon");
    }
  }

  function handleCapturar() {
    if(pokemonList.length >= 10){
      toast.error("Limite de pokemons capturados excedido!!!");
      return;
    }

    setIsCatching(true);
    setTimeout(() => {
      const success = Math.random(0, 1) < 1;
      setIsCatching(false);
      if (success) {
        setCapt(true);
        setNaoCapt(false);
        setPokemon(false);
        postPoke(pokemon,randomLvl)
        updateList()
      } else {
        setCapt(false);
        setNaoCapt(true)
        setPokemon(false)
      }
    }, 1000);

  }


  return (
    <div className={styles.ladoEsqContainer}>
      <div className={styles.pokeToast}><ToastContainer/></div>
      <div className={styles.visorSuperEsq}>
        {pokemon && <img
          src={pokemon.sprites.other.showdown.front_default}
          alt="pokemonGif"
        />}
        {naoCapt && <img className={styles.naoCapturado} src={naoCapturado} alt="Não capturado" />}
        {capt && <img className={styles.naoCapturado} src={capturado} alt="Capturado" />}
      </div>
      <div className={styles.parteInferior}>
        <button
          className={`${styles.btnCapturar} ${isCatching ? styles.catching : ""}`}
          onClick={handleCapturar}
          disabled={!pokemon || isCatching}
        >
          <img className={styles.btnCapturarIcon} src={pokebolaBtn} alt="Capturar" />
        </button>
        <ul className={styles.infosContainer}>
          <li>Nome: {pokemon ? pokemon.name : "--"}</li>
          <li>
            Tipo: {pokemon ? pokemon.types.map((element) => element.type.name).join(", ") : "--"}
          </li>
          <li>Lvl: {pokemon ? randomLvl : "--"}</li>
        </ul>
        <button className={styles.pad} onClick={getPokemonData}></button>
      </div>
    </div>
  );
};
