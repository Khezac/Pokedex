import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export function getPokemon() {
  let randomPokemon = Math.floor(Math.random() * 151);
  const url = ('pokemon/' + randomPokemon);

  return api.get(url)
}
