import axios from 'axios';

const apiPoke = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export function getPokemon() {
  let randomPokemon = Math.floor(Math.random() * 151);
  const url = ('pokemon/' + randomPokemon);

  return apiPoke.get(url)
}

export function getPokemonById(id) {
	const url = 'pokemon/' + id;

	return apiPoke.get(url);
}