import React, { memo } from 'react';
const Son = memo(({ numero, increment }) => {

    console.log(`Componente Son renderizado para for: ${numero}`);
    return (
    <button
        onClick={() => increment(numero)}
    >
        {numero}
    </button>
    );
});

Son.displayName = 'Son';

export default Son;