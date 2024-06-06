import styles from './styles.module.css'
import LogoGif from '../../assets/logoGif.gif'

const Pokedex = () => {
    return (
        <div>
            <img className={styles.logo} src={LogoGif} alt="Pokebola Logo" />
        </div>
    )
};

export default Pokedex;