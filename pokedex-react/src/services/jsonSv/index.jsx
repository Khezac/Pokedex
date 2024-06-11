import axios from 'axios';

const apiJson = axios.create({
    baseURL: 'http://localhost:8080/'
  })

  export function getUsers(){
    const url="users/";

    return apiJson.get(url);
  }

  export function getPokeCapt() {
    const url = "/capturados/"

    return apiJson.get(url);
  }

  export function getPokeCaptById(id) {
    const url = "capturados?id=" + id;

    return apiJson.get(url);
  }

  export function postPoke(pokemon,lvl,user_id) {
    const url = 'capturados/'

    const Pokemon = {
      id: `${pokemon.id}`,
      lvl: lvl,
      sprite: pokemon.sprites.front_default,
      user_id: user_id
    }

    const pokeJson = JSON.stringify(Pokemon);

    apiJson.post(url,pokeJson)
    .then((response) => {
      console.log("Pokemon capturado na API com sucesso!\n" + JSON.stringify("id: " + response.data.id + ",lvl: " + response.data.lvl ))
    })
    .catch((error) => {
      console.log("Falha ao inserir pokemon na api!!\n" + error)
    });
  }

  export function deletePoke(id) {
    const url = 'capturados/' + id;

    apiJson.delete(url)
    .then((response)=> {
      console.log("Pokemon de id: " + id + "solto com sucesso!\n" + response)
    })
    .catch((error) => {
      console.log("Não foi possivel soltar o pokemon com id: " + id + "\nErro: " + error)
    })
  }