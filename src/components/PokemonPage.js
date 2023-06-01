import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonApi}) {
  const [search, setSearch] = useState('');

  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemonApi} search={search}/>
    </Container>
  );
}

export default PokemonPage;
