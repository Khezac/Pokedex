import charmander from "../../assets/charmander-teste.jpg.jpg";
import styles from "../VisorSuperiorEsquerdo/styles.module.css";

export const VisorSuperiorEsquerdo = () => {
    return (
        <div className={styles.visorSuperEsq}>
            <img src={ charmander } alt="charmander" />
        </div>
    );

}