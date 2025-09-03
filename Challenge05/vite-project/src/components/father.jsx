import React, { useState, useCallback } from 'react';
import Son from './son';

export const Father = () => {
    const list = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);
    const [clickedValue, setClickedValue] = useState(null); 

    const increment = useCallback((num) => {
    console.log('Button clicked with number:', num);
    setValue(prevValue => prevValue + num);
    setClickedValue(num);
    }, []);

    return (
    <div>
        <h1>
        Challenge 05
        </h1>
        <p>
        <span>Total: </span>
        <span>{value}</span>
        </p>
        {clickedValue !== null && (
        <p>
            <span>Ultimo click (n): </span>
            <span>{clickedValue}</span>
        </p>
        )}
        <hr/>
        <div>
        {list.map((n, idx) => (
            <Son
            key={idx}
            numero={n}
            increment={increment}
            />
        ))}
        </div>
    </div>
    );
};

export default Father;