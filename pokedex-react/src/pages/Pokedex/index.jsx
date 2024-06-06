import styles from './styles.module.css';

import { Logo } from '../../components/Logo/index.jsx';
import { PokedexEsquerda } from '../../components/PokedexEsquerda/index.jsx';

const Pokedex = () => {
    return (
        <div className={styles.pokedexContainer}>
            <Logo/>
            <PokedexEsquerda/>
        </div>
    )
};

export default Pokedex;