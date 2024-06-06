import styles from "./styles.module.css";

import { Logo } from "../../components/Logo/index.jsx";
import { PokedexEsquerda } from "../../components/PokedexEsquerda/index.jsx";
import { PokedexDireita } from "../../components/PokedexDireita/index.jsx";

const Pokedex = () => {
  return (
    <div className={styles.pokedexContainer}>
      <Logo />
      <div className={styles.pokedex}>
        <PokedexEsquerda />
        <PokedexDireita />
      </div>
    </div>
  );
};

export default Pokedex;
