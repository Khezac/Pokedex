import axios from 'axios';

const apiJson = axios.create({
    baseURL: 'http://localhost:8080/'
  })

  export function getPokeCapt() {
    const url = "capturados/"

    return apiJson.get(url);
  }

  export function getPokeCaptById(id) {
    const url = "capturados?id=" + id;

    return apiJson.get(url);
  }

  export function postPoke(pokemon,lvl) {
    const url = 'capturados/'

    const Pokemon = {
      id: pokemon.id,
      lvl: lvl,
      sprite: pokemon.sprites.front_default
    }

    const pokeJson = JSON.stringify(Pokemon);

    apiJson.post(url,pokeJson)
    .then((response) => {
      console.log("Deu certo" + response)
    })
    .catch((error) => {
      console.log("Deu Errado" + error)
    });
  }