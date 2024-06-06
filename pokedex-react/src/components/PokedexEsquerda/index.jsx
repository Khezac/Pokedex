import { useState } from "react";
import { getPokemon } from "../../services/index.js";
import styles from "../PokedexEsquerda/style.module.css";
import pokebolaBtn from "../../assets/pokebola_icone.png";

export const PokedexEsquerda = () => {
  const [pokemon, setPokemon] = useState(null);
  const [randomLvl, setRandomLvl] = useState(null);
  const [isCatching, setIsCatching] = useState(false);
  const [message, setMessage] = useState("");

  async function getPokemonData() {
    try {
      const result = await getPokemon();
      setPokemon(result.data);
      setRandomLvl(Math.floor(Math.random() * (50 - 1) + 1));
      setMessage("");
    } catch {
      console.log("Falha ao buscar Pokémon");
    }
  }

  function handleCapturar() {
    setIsCatching(true);
    setTimeout(async () => {
      const success = Math.random() < 0.3;
      setIsCatching(false);
      if (success) {
        console.log(`Você capturou ${pokemon.name}!`);
        await fetchNewPokemon();
      } else {
        console.log(`A captura de ${pokemon.name} falhou.`);
        await fetchNewPokemon(); 
      }
    }, 1000);
  }

  async function fetchNewPokemon() {
    try {
      const result = await getPokemon();
      setPokemon(result.data);
      setRandomLvl(Math.floor(Math.random() * (50 - 1) + 1));
    } catch {
      console.log("Falha ao buscar Pokémon");
    }
  }

  return (
    <div className={styles.ladoEsqContainer}>
      <div className={styles.visorSuperEsq}>
        <img
          src={pokemon ? pokemon.sprites.other['official-artwork'].front_default : "loading..."}
          alt="loading pokemon..."
        />
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
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
};
