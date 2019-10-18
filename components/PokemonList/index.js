import React from "react";
import PokemonCard from "../PokemonCard";
import "./index.css";

const PokemonList = ({ pokemonList }) => {
  return (
    <ul className="PokemonList">
      {pokemonList.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </ul>
  );
};

export default PokemonList;
