import { useEffect, useState } from 'react';
import styles from './style.module.css'
import { VisorSuperiorDireito } from '../VisorSuperiorDireito';


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
            <p>PokedexDireita</p>
            <VisorSuperiorDireito/>
            <div>
                visor superior
            </div>
                <div>
                {pokemonList ? pokemonList.map(element=><p>{element.name}</p>):<p>erro</p>}
            </div>
            <div>
                
                <div className='visorDireitoInferior1'>
           
                </div>
                
                <div className='visorDireitoInferior2'>
                
                </div>    

            
            </div>
        </div>
    )
}
