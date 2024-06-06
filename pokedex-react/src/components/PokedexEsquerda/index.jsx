import { useState } from "react";
import { getPokemon } from "../../services/index.js";
import styles from "../PokedexEsquerda/style.module.css";
import pokebolaBtn from "../../assets/pokebola_icone.png";

export const PokedexEsquerda = () => {
  const [pokemon, setPokemon] = useState();

  let randomLvl = Math.floor(Math.random() * (50 - 1) + 1);

  async function getPokemonData() {
    try {
      const result = await getPokemon();
      setPokemon(result.data);
    } catch {
      console.log("deu erro");
    }
  }

  function handleCapturar(){
    console.log("temos q pegar")
  }

  return (
    <div className={styles.ladoEsqContainer}>
      <div className={styles.visorSuperEsq}>
        <img
          src={pokemon ? pokemon.sprites.other.showdown.front_default : "loading..."}
          alt="loading pokemon..."
        />
      </div>
      <div className={styles.parteInferior}>
        <button className={styles.btnCapturar} onClick={handleCapturar}>
          <img className={styles.btnCapturarIcon} src={pokebolaBtn} alt="Capturar" />
        </button>
        <ul className={styles.infosContainer}>
          <li>Nome: {pokemon ? pokemon.name : "--"}</li>
          <li>
            Tipo:{" "}
            {pokemon
              ? pokemon.types.map((element) => element.type.name + " ")
              : "--"}
          </li>
          <li>Lvl: {pokemon ? randomLvl : "--"}</li>
        </ul>
        <button className={styles.pad} onClick={getPokemonData}/>
      </div>
    </div>
  );
};
