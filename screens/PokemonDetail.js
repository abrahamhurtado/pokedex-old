import React, { useState, useEffect } from "react";
import { getPokemonById } from "../api/pokemon";
import capitalize from "../utils/capitalize";
import normalizeString from "../utils/normalizeString";

const PokemonDetail = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    let isCurrent = true;
    const retrievePokemon = async pokemonId => {
      const pokemonObject = await getPokemonById(pokemonId);

      setPokemon(pokemonObject);
    };

    if (isCurrent) {
      retrievePokemon(id);
    }

    return () => {
      isCurrent = false;
    };
  }, [id]);

  if (pokemon === null) {
    return <h1>Aquí aparecerá el Pokémon</h1>;
  }

  const movesList = pokemon.moves
    .filter(move =>
      move.version_group_details.some(
        vgd => vgd.move_learn_method.name === "level-up"
      )
    )
    .map(move => ({
      name: move.move.name,
      level_learned_at: move.version_group_details[0].level_learned_at
    }));

  const orderedMovesList = [...movesList].sort(
    (a, b) => a.level_learned_at - b.level_learned_at
  );

  const abilitiesList = [...pokemon.abilities]
    .sort((a, b) => a.slot - b.slot)
    .map(ability => ({
      name: ability.ability.name,
      is_hidden: ability.is_hidden
    }));

  return (
    <article>
      <img src={pokemon.sprites.front_default} />
      <h2>{pokemon.id}</h2>
      <h1>{capitalize(pokemon.name)}</h1>
      <h4>Types</h4>
      <ul>
        {[...pokemon.types].reverse().map(({ slot, type }) => (
          <li key={type.name}>{capitalize(type.name)}</li>
        ))}
      </ul>
      <h4>Abilities</h4>
      <ul>
        {abilitiesList.map(({ name, is_hidden }) => (
          <li key={name}>
            {normalizeString(name)}{" "}
            {is_hidden ? <small>Hidden ability</small> : null}
          </li>
        ))}
      </ul>
      <h4>Learnset</h4>
      <dl>
        {orderedMovesList.map(({ name, level_learned_at }) => (
          <React.Fragment key={name}>
            <dt>{`Level ${level_learned_at}`}</dt>
            <dd>{normalizeString(name)}</dd>
          </React.Fragment>
        ))}
      </dl>
    </article>
  );
};

export default PokemonDetail;
