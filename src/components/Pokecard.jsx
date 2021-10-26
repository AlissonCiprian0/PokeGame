import React, { useState } from 'react';
import "./Pokecard.css";

const Pokecard = ({pokemon, image, selectable, selectorCounter, setSelectorCounter, setContMessage, hand1, setHand1, hand2, setHand2, location}) => {
    const [statePokemon, setStatePokemon] = useState(pokemon);

    const handlePokeCardClick = () => {
        if (selectable === true) {
            if (location == 'http://localhost:3000/') {
                if (statePokemon.selected === true) {
                    setStatePokemon({...statePokemon, selected: false});
                    setSelectorCounter(selectorCounter = selectorCounter - 1);
    
                    setHand1(hand1.filter(item => item.id !== statePokemon.id));
                    
                    setContMessage('Choose one more pokemon!');
                }
                else {
                    if (selectorCounter < 3) {
                        setSelectorCounter(selectorCounter = selectorCounter + 1);
                        setStatePokemon({...statePokemon, selected: true});
    
                        setHand1([...hand1, statePokemon]);
    
                        setContMessage('Choose one more pokemon!');
                    }
                    else if (selectorCounter === 3) {
                        setSelectorCounter(selectorCounter = selectorCounter + 1);
                        setStatePokemon({...statePokemon, selected: true});
    
                        setHand1([...hand1, statePokemon]);
                        
                        setContMessage('Let your oponent choose now!');
                    }
                }
            }
            else {
                if (statePokemon.selected === true) {
                    setStatePokemon({...statePokemon, selected: false});
                    setSelectorCounter(selectorCounter = selectorCounter - 1);
    
                    setHand1(hand1.filter(item => item.id !== statePokemon.id));
                    
                    setContMessage('Choose one more pokemon!');
                }
                else {
                    if (selectorCounter < 3) {
                        setSelectorCounter(selectorCounter = selectorCounter + 1);
                        setStatePokemon({...statePokemon, selected: true});
    
                        setHand2([...hand2, statePokemon]);
    
                        setContMessage('Choose one more pokemon!');
                    }
                    else if (selectorCounter === 3) {
                        setSelectorCounter(selectorCounter = selectorCounter + 1);
                        setStatePokemon({...statePokemon, selected: true});
    
                        setHand2([...hand2, statePokemon]);
                        
                        setContMessage('Alright, lets battle!');
                    }
                }
            }
        }
    }

    return (
        <div 
            className={`Pokecard ${statePokemon.selected ? "selected" : ""}`}
            onClick={handlePokeCardClick}
            id={pokemon.id}
        >
            <p   className="Pokecard-name">{pokemon.name}</p>
            <img 
                className="Pokecard-image"
                src={image} 
                alt={pokemon.name} />
            
            <div className="Pokecard-info-container">
                <span>Type: {pokemon.type}</span>
                <span>EXP: {pokemon.base_experience}</span>
            </div>
            <div className="selector">SELECTED</div>
        </div>
    );
}
 
export default Pokecard;