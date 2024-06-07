import { useState } from 'react';
import styles from './style.module.css'
import { getPokeCapt, getPokeCaptById } from '../../services/jsonSv';
import { getPokemonById } from '../../services/pokeApi';

export const PokedexDireita = () => {
    const [pokemonList,setPokemonList] = useState('');
    const [pokemonAtual, setPokemonAtual] = useState();
    const [levelAtual, setLevelAtual] = useState();

    getCapturados()

    async function getCapturados(){
        try {
            const results = await getPokeCapt();
            setPokemonList(results.data)
        } catch {
            console.log("Ocorreu um erro")
        }
    }

    async function handlePokeCapt(e) {
        let id = e.target.id;
        let pokeCaptId = pokemonList[id].id
        const resultPokeApi = await getPokemonById(pokeCaptId)
        setPokemonAtual(resultPokeApi.data)

        const resultJsonSv = await getPokeCaptById(pokeCaptId);
        setLevelAtual(resultJsonSv.data[0].lvl)
    }

    function handleAbility() {
        console.log(levelAtual)
    }

    return (
        <div className={styles.ladoDirContainer}>
            <div className={styles.statusPokemon}>
           <div>
            <p>Pokémon: {pokemonAtual ? <span className={styles.pokeName}>{pokemonAtual.name}</span> : "--"}</p>
            <p>Movimentos:</p>
            <ol>
                {pokemonAtual && pokemonAtual.abilities.map((element,index) => <li className={styles.pokeAbility} key={index}>{element.ability.name}</li>)}
            </ol>
            </div>
            <div>{pokemonAtual && <img className={styles.pokeGif} src={pokemonAtual.sprites.other.showdown.front_default} alt="" />}</div>
            </div>
                <div className={styles.listaPokemon}>
                {pokemonList && pokemonList.map((element,index)=>
              <div className={styles.pokemons} key={index} onClick={handlePokeCapt}><img id={index} className={styles.pokemonSprite} src={element.sprite}/></div>
              )}
            </div>
            <div className={styles.countIferior}>
                <div className={styles.botoesDireito}>
                <button onClick={handleAbility} className={styles.pokebollbtn}>pokebollas</button>
                <button className={styles.soltarbtn}>Soltar</button>
                </div>
            <div className={styles.visoresInfContainer}>
                <div className={styles.visorDireitoInferior1}>
                    <p>Tipo: {pokemonAtual ? pokemonAtual.types.map((element) => element.type.name).join(", ") : "--"}</p>
                </div>

                <div className={styles.visorDireitoInferior2}>
                    <p>Lvl: {levelAtual ? levelAtual : "--"}</p>
                </div>
            </div>
            </div>
        </div>
    )
}
