import React from "react";
import capitalize from "../../utils/capitalize";
import PokemonAbilities from "./PokemonAbilities";
import PokemonLearnset from "./PokemonLearnset";
import PokemonTypes from "./PokemonTypes";

const PokemonDetail = ({ sprite, id, name, types, abilities, learnset }) => {
  return (
    <article>
      <img src={sprite} />
      <h2>{id}</h2>
      <h1>{capitalize(name)}</h1>
      <h4>Types</h4>
      <PokemonTypes types={types} />
      <h4>Abilities</h4>
      <PokemonAbilities abilities={abilities} />
      <h4>Learnset</h4>
      <PokemonLearnset learnset={learnset} />
    </article>
  );
};

export default PokemonDetail;
