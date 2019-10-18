import React from "react";
import PokemonCard from "../PokemonCard";
import "./index.css";

const PokemonList = ({ pokemonList }) => {
  return (
    <ul className="PokemonList">
      {pokemonList.map(pokemonObj => (
        <PokemonCard {...pokemonObj} key={pokemonObj.id} />
      ))}
    </ul>
  );
};

export default PokemonList;
