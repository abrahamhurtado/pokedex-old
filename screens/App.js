import React, { useCallback, useEffect, useState } from "react";
import { getPokemon, getPokemonByName } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const App = props => {
  const [pokemon, setPokemon] = useState(null);

  const retrievePokemon = useCallback(async () => {
    let pokemonList = [];

    const pokemonListFromLS = localStorage.getItem("pokemonList");

    if (pokemonListFromLS === null) {
      const pokemonResourceList = await getPokemon();

      pokemonList = await Promise.all(
        pokemonResourceList.results.map(({ name }) => getPokemonByName(name))
      );

      const newPokemonList = pokemonList.map(pokemon => ({
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        id: pokemon.id
      }));

      localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));
    } else {
      pokemonList = JSON.parse(pokemonListFromLS);
    }

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
