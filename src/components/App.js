import React, { useEffect, useState } from 'react';
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonApi, setPokemonApi] = useState([]);
  const [search, setSearch] = useState('');

  //-------------------------------------------------------------------------------->
  //Initial Fetch
  useEffect(() => {
    fetchPokemon();
    fetchSimpleData();
  }, []);

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 1000; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        id: result.id,
        name: result.name,
        weight: result.weight,
        spirits: {
          front: result.sprites['front_default'],
          back: result.sprites['back_default'],
          shiny: result.sprites['front_shiny'],
          backShiny: result.sprites['back_shiny'],
        },
        //stats: result.stats,
        stats: {
          baseHP: result.stats[0].base_stat,
          baseAttack: result.stats[1].base_stat,
          baseDefense: result.stats[2].base_stat,
          baseSpecialAttack: result.stats[3].base_stat,
          baseSpecialDefense: result.stats[4].base_stat,
          baseSpeed: result.stats[5].base_stat,
        },
        type: result.types.map((type) => type.type.name).join(', '),
        moves: result.moves.map((move) => move.move.name).join(', '),
      }));
      setPokemonApi(pokemon)
    });
  };

  const fetchSimpleData = async () => {
    try {
      const response = await fetch('http://localhost:3001/pokemon');
      const jsonData = await response.json();
      setPokemon(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //-------------------------------------------------------------------------------->
  //JSX
  return (
    <div className="App">
      <PokemonPage pokemonApi={pokemonApi}/>
    </div>
  );
}

export default App;



