import styles from './styles.module.css'

export const Pad = () => {

    function handlePad(){
        let random = Math.floor(Math.random() * 150)
        console.log(random);//Este número será o id para requisição de get na pokeApi
    }

  return (
  <button className={styles.pad} onClick={handlePad}>Pad</button>);
};
