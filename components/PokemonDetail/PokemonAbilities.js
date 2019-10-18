import React from "react";
import normalizeString from "../../utils/normalizeString";

const PokemonAbilities = ({ abilities }) => (
  <ul>
    {abilities.map(({ name, is_hidden }) => (
      <li key={name}>
        {normalizeString(name)}{" "}
        {is_hidden ? <small>Hidden ability</small> : null}
      </li>
    ))}
  </ul>
);

export default PokemonAbilities;
