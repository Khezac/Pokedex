import { useState, useEffect } from 'react';
import axios from 'axios';

//essa função tem que sortear um numero de 1 a 150 e depois puxar um pokemon da api utilizando esse numero

function Pokemon() {
      let randomPokemon = Math.floor(Math.random() * 150);//Este número será o id para requisição de get na pokeApi
      //let randomLvl = Math.floor(Math.random() * 70) ;//Este será o level do pokemon que será mandado para o visor de baixo da esquerda e armazenado na API
      const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+randomPokemon)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
       console.log(error)        
      });
  }, []);
}

export default Pokemon;
