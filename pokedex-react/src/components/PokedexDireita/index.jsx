import { useEffect, useState } from 'react';
import styles from './style.module.css'
import { VisorDireitoInferiorUm } from '../VisorDireitoInferiorUm';
import { VisorDireitoInferiorDois } from '../VisorDireitoInferiorDois';

export const PokedexDireita = () => {
    const [pokemonList,setPokemonList] = useState('');
    useEffect(()=>
    {setPokemonList([   
    { name: 'pokemon1' },
    { name: 'pokemon2' },
    { name: 'pokemon3' },
    { name: 'pokemon4' },
    { name: 'pokemon5' },
    { name: 'pokemon6' },
    { name: 'pokemon7' },
    { name: 'pokemon8' },
    { name: 'pokemon9' },
    { name: 'pokemon10' }
                    ])
    },[])
   console.log(pokemonList[0])
    
    return (
        <div className={styles.ladoDirContainer}>
            <div className={styles.statusPokemon}>
           <div>
            <p>Pokémon:</p>
            <p>Movimentos:</p>
            <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            </div>
            <div>pokemon gif</div>
            </div>
                <div className={styles.listaPokemon}>
                {pokemonList && pokemonList.map((element,index)=>
              <div className={styles.pokemons} key={index}><p>{element.name}</p></div>)}
            </div>
            <div className={styles.countIferior}>
                <div className={styles.botoesDireito}>
                <button className={styles.pokebollbtn}>pokebollas</button>
                <button className={styles.soltarbtn}>Soltar</button>
                </div>
            <div className={styles.visoresInfContainer}>
                <div className={styles.visorDireitoInferior1}>
                    <VisorDireitoInferiorUm/>
                </div>
                
                <div className={styles.visorDireitoInferior2}>
                    <VisorDireitoInferiorDois/>
                </div>
            </div>
            </div>
        </div>
    )
}
