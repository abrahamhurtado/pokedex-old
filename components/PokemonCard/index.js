import { Link } from "@reach/router";
import React from "react";
import capitalize from "../../utils/capitalize";
import "./index.css";

const PokemonCard = ({ name, id, sprite }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <li className="PokemonCard">
        <img src={sprite} />
        {capitalize(name)}
      </li>
    </Link>
  );
};

export default PokemonCard;
