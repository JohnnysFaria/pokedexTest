export const api = 'https://pokeapi.co/api/v2/';

export function pokemons_get({ page, total }) {
  return {
    url: `${api}pokemon?limit=${page}&offset=${total}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
export function pokemon_get({ name }) {
  return {
    url: `${api}pokemon/${name}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
