import React from "react";
import capitalize from "../../utils/capitalize";

const PokemonTypes = ({ types }) => (
  <ul>
    {types.map(({ slot, type }) => (
      <li key={type.name}>{capitalize(type.name)}</li>
    ))}
  </ul>
);

export default PokemonTypes;
