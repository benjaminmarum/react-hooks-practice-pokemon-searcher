import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, search }) {

  const searchElements = pokemons.filter((poke)=>poke.name.toLowerCase().includes(search.toLowerCase()))
  const pokeCards = searchElements.map((poke) => {
    return (
      <PokemonCard key={poke.id} pokemon={poke} />
    )
  })

  return (
    <>
      <h1>Pokedex</h1>
      <Card.Group itemsPerRow={6}>
        <>{pokeCards}</>
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
