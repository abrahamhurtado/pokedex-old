import React from "react";
import capitalize from "../../utils/capitalize";
import { Link } from "@reach/router";
import "./index.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <li className="PokemonCard">
        <img src={pokemon.sprites.front_default} />
        {capitalize(pokemon.name)}
      </li>
    </Link>
  );
};

export default PokemonCard;
