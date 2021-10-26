import React from 'react';
import "./Player.css"

const Player = ({ children }) => {
    return (
        <div className="Player">{ children }</div>
    );
}
 
export default Player;