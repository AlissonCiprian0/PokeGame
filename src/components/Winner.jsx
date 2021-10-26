import React, { useState } from 'react';
import "./Winner.css"

const Winner = ({ children }) => {
    const [showComponent, setShowComponent] = useState(true)

    setTimeout(() => {
        setShowComponent(false)
    }, 2300);

    return (
        <>
            {showComponent &&
                <div className="Winner show">{ children }</div>
            }
        </>
    );
}
 
export default Winner;