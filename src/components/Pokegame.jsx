import React from 'react';
import Pokedex from "./Pokedex";
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Winner from "./Winner";

import "./Pokegame.css";

function calculaExp(hand) {
    let exp = 0;
    
    for (let i = 0; i < 4; i++) {
        exp += hand[i].base_experience;
    }

    return exp;
}

const Pokegame = ({baseAPI, hand1, hand2}) => {
    const history = useHistory();
    let winner = '';

    const handleButtonClick = () => {
        localStorage.setItem('hand1', "");
        localStorage.setItem('hand2', "");
        history.push('/');
    }

    let expHand1 = calculaExp(hand1);
    let expHand2 = calculaExp(hand2);

    if (expHand1 > expHand2) {
        winner = 'Player 1 won!';
    }
    else {
        winner = 'Player 2 won!';
    }

    return (
        <div className="Pokegame">
            <Winner> {winner} </Winner>
            <Pokedex baseAPI={baseAPI} pokemons={hand1} winner={expHand1 > expHand2 ? true : false} />
            <Pokedex baseAPI={baseAPI} pokemons={hand2} winner={expHand2 > expHand1 ? true : false} />
            <Button handleButtonClick={handleButtonClick} color={'#969696'}> Clear </Button>
        </div>
    );
    
}
 
export default Pokegame;