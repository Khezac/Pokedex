import styles from './styles.module.css'

export const Pad = () => {

    function handlePad(){
      console.log("pegará informações da api")
    }

  return (
  <button className={styles.pad} onClick={handlePad}>Pad</button>);
};
