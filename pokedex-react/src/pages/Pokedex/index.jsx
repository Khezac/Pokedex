import styles from './styles.module.css'

import { Logo } from '../../components/Logo/index.jsx'

const Pokedex = () => {
    return (
        <div className={styles.pokedexContainer}>
            <Logo/>
            <div>
                <h1>Teste</h1>
            </div>
        </div>
    )
};

export default Pokedex;