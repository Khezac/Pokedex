import { useEffect } from 'react';
import styles from './styles.module.css'
import { useState } from 'react';


export const VisorInferiorEsq = () => {

    const [list, setList] = useState({});

    useEffect(() => {
        setList({nome: "a", tipo: "Terra", lvl: "3"})
    },[])

    return (
        <div>
            <ul className={styles.infosContainer}>
                <li>Nome: {list.nome}</li>
                <li>Tipo: {list.tipo}</li>
                <li>Lvl: {list.lvl}</li>
            </ul>
        </div>
    )
}