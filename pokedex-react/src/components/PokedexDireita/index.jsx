import styles from './style.module.css'
import { VisorSuperiorDireito } from '../VisorSuperiorDireito';

export const PokedexDireita = () => {
    return (
        <div className={styles.ladoDirContainer}>
            <p>PokedexDireita</p>
            <VisorSuperiorDireito/>
        </div>
    )
};