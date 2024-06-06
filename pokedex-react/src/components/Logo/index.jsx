import styles from './styles.module.css'
import LogoGif from '../../assets/logoGif.gif'

export const Logo = () => {
    return(
        <>
            <img className={styles.logo} src={LogoGif} alt="Pokebola Logo" />
        </>
        )
};