import React from 'react';
import Pokecard from "./Pokecard";

import "./Pokedex.css";

const Pokedex = ({baseAPI, pokemons, winner}) => {
    let isWinner = '';
    
    if (winner) {
        isWinner = 'THIS HAND WINS!';
    }

    return (
        <div className={`Pokedex ${winner ? "winner" : ""}`}>
            {pokemons.map((pokemon) => (
                <Pokecard key={pokemon.id} pokemon={pokemon} image={baseAPI + pokemon.id + '.png'} />
            ))}

            <span className="textWinner">{isWinner}</span>
        </div>
    );
}
 
export default Pokedex;