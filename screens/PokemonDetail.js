import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import { getPokemonById } from "../api/pokemon";
import PokemonDetail from "../components/PokemonDetail";

const PokemonDetailScreen = ({ id }) => {
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

  const learnset = pokemon.moves
    .filter(move =>
      move.version_group_details.some(
        vgd => vgd.move_learn_method.name === "level-up"
      )
    )
    .map(move => ({
      name: move.move.name,
      level_learned_at: move.version_group_details[0].level_learned_at
    }));

  const orderedLearnset = [...learnset].sort(
    (a, b) => a.level_learned_at - b.level_learned_at
  );

  const abilitiesList = [...pokemon.abilities]
    .sort((a, b) => a.slot - b.slot)
    .map(ability => ({
      name: ability.ability.name,
      is_hidden: ability.is_hidden
    }));

  // investigar O(n) de Array.sort()
  const typesList = [...pokemon.types].sort((a, b) => a.slot - b.slot);

  return (
    <React.Fragment>
      <Link to="/">{"<< Regresar a Home"}</Link>
      <PokemonDetail
        id={pokemon.id}
        sprite={pokemon.sprites.front_default}
        name={pokemon.name}
        learnset={orderedLearnset}
        types={typesList}
        abilities={abilitiesList}
      />
    </React.Fragment>
  );
};

export default PokemonDetailScreen;
