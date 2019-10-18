import React from "react";
import normalizeString from "../../utils/normalizeString";

const PokemonLearnset = ({ learnset }) => (
  <dl>
    {learnset.map(({ name, level_learned_at }) => (
      <React.Fragment key={name}>
        <dt>{`Level ${level_learned_at}`}</dt>
        <dd>{normalizeString(name)}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export default PokemonLearnset;
