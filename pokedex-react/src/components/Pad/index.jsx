import styles from './styles.module.css'

export const Pad = () => {

    function handlePad(){
        let randomLvl = Math.floor(Math.random() * (20 - 1) + 1)
        let randomPokemon = Math.floor(Math.random() * 150)
        console.log(randomPokemon);//Este número será o id para requisição de get na pokeApi
        console.log(randomLvl);//Este será o level do pokemon que será mandado para o visor de baixo da esquerda e armazenado na API
    }

  return (
  <button className={styles.pad} onClick={handlePad}>Pad</button>);
};
