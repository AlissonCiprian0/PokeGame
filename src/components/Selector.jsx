import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Pokecard from './Pokecard';
import Button from './Button';

import "./Selector.css";
const Selector = ({baseAPI, pokemons}) => {
    const history = useHistory();
    let location = window.location.href;
    
    const [ selectorCounter, setSelectorCounter ] = useState(0);
    const [contMessage, setContMessage] = useState('');

    const [hand1, setHand1] = useState([{}]);
    const [hand2, setHand2] = useState([{}]);

    useEffect(() => {
        location = window.location.href;
    });

    const handleButtonClick = () => {
        if (!location.includes('/battle') && location.includes('/oponents-choise')) {
            setHand1(hand1.shift());
            
            let localHand1 = JSON.stringify(hand1);
            localStorage.setItem('hand1', localHand1);

            history.push('/oponents-choise');
        }
        else if (location.includes('/oponents-choise')) {
            setHand1(hand2.shift());
            
            let localHand2 = JSON.stringify(hand2);
            localStorage.setItem('hand2', localHand2);

            history.push('/battle');
        }
    }

    return (
        <div className="Selector">
            <h1>Pick your team!</h1>

            <span className="Selector-counter">{contMessage}</span>

            <div className="selector-pokemon-list" id="selector-pokemon-list">
                {pokemons.map((pokemon) => (
                    <Pokecard
                        key={pokemon.id}
                        pokemon={pokemon}
                        image={baseAPI + pokemon.id + '.png'}
                        selectable={true}
                        selectorCounter={selectorCounter}
                        setSelectorCounter={setSelectorCounter}
                        setContMessage={setContMessage}
                        hand1={hand1}
                        setHand1={setHand1}
                        hand2={hand2}
                        setHand2={setHand2}
                        location={location}
                    />
                ))}

                { selectorCounter === 4 &&
                    <Button
                        handleButtonClick={handleButtonClick}
                        color={'#10bb10'}
                    >
                        Next
                    </Button>
                }
            </div>
        </div>
    );
}
 
export default Selector;