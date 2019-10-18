import { GET } from "./index";

export const getPokemonById = id => GET(`pokemon/${id}`);
export const getPokemonByName = name => GET(`pokemon/${name}`);
export const getPokemon = (offset = 0, limit = 0) =>
  GET(`pokemon?limit=${limit}&offset=${offset}`);
