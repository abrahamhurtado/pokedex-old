import React, { useState, useEffect, useCallback } from "react";
import { getPokemon, getPokemonByName } from "../api/pokemon";
import capitalize from "../utils/capitalize";
import PokemonList from "../components/PokemonList";

const App = props => {
  const [pokemon, setPokemon] = useState(null);

  const retrievePokemon = useCallback(async () => {
    const pokemonResourceList = await getPokemon();

    const pokemonList = await Promise.all(
      pokemonResourceList.results.map(({ name }) => getPokemonByName(name))
    );

    setPokemon(pokemonList);
  }, []);

  useEffect(() => {
    let isCurrent = true;

    if (!pokemon && isCurrent) {
      retrievePokemon();
    }

    return () => {
      isCurrent = false;
    };
  }, [pokemon, retrievePokemon]);

  if (!pokemon) {
    return <h1>Cargando Pokémon...</h1>;
  } else {
    return <PokemonList pokemonList={pokemon} />;
  }
};

export default App;
