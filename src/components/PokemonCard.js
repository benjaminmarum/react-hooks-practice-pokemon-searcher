import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, pokemon }) {
  const [cardImg, setCardImg] = useState(pokemon.spirits.front)
  const [click, setClicker] = useState(1)

  const front = pokemon.spirits.front;
  const back = pokemon.spirits.back;
  const shiny = pokemon.spirits.shiny;
  const shinyback = pokemon.spirits.backShiny;

  const imgOptions = [front, back, shiny, shinyback];

  const handleCardClick = (e) => {
    toggleOptions()
  }

  function toggleOptions() {
    // Increment the currentOption variable
    setClicker(click + 1);
    // If currentOption exceeds the length of the options array, reset it to 0
    if (click >= imgOptions.length - 1) {
      setClicker(0)
      setCardImg(imgOptions[click])
    } else {
      setCardImg(imgOptions[click])
    }
    // Output the current option
    //console.log(click);
  }

  return (
    <Card onClick={handleCardClick}>
      <div id={id}>
        <h5></h5>
        <button>+</button>
        <div className="image">
          <img src={cardImg} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">
            <h5>{pokemon.name}</h5>
          </div>
        </div>
        <div className="extra content">
          <span>
            {pokemon.stats.baseHP}💓 {pokemon.stats.baseSpeed}⚡ <br />
            {pokemon.stats.baseAttack}⚔ {pokemon.stats.baseSpecialAttack}🎯<br />
            {pokemon.stats.baseDefense}🛡 {pokemon.stats.baseSpecialDefense}🎱<br />
          </span>
          <span>
            Type: {pokemon.type}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
