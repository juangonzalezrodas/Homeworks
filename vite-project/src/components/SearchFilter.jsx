import React from 'react';

const SearchFilter = ({ searchTerm, onSearchChange, onClearSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar imágenes por título..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}/>
            {searchTerm && (
            <button onClick={onClearSearch}>Limpiar búsqueda</button>
    )}
    </div>
)
}

export default SearchFilter