import React, { useState } from 'react';

function TreeControls({ onInsert, onSearch, onClear }) {
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleInsert = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    onInsert(value);
    setInputValue('');
    };

    const handleInsertMultiple = () => {
    const values = inputValue.split(',').map(v => parseInt(v.trim())).filter(v => !isNaN(v));
    if (values.length === 0) {
        alert('Por favor ingresa números separados por comas');
        return;
    }
    values.forEach(value => onInsert(value));
    setInputValue('');
    };

    const handleSearch = () => {
    const value = parseInt(searchValue);
    if (isNaN(value)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    const found = onSearch(value);
    setSearchResult({ value, found });
    };

    return (
    <div>
        <h3>Controles del Árbol</h3>

        <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
            Insertar Números:
        </label>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ej: 50 o 50,30,70,20"
            style={{ 
            padding: '10px', 
            width: '700px', 
            border: '1px solid #ddd',
            marginRight: '10px'
            }}
        />
        <button 
            onClick={handleInsert}
            style={{ 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer',
            }}
        >
            Insertar Uno
        </button>
        <button 
            onClick={handleInsertMultiple}
            style={{ 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
            }}
        >
            Insertar Varios
        </button>
        </div>

        <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
            Buscar Valor:
        </label>
        <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Ej: 30"
            style={{ 
            padding: '10px', 
            width: '700px', 
            border: '1px solid #ddd',
            }}
        />
        <button 
            onClick={handleSearch}
            style={{ 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
            }}
        >
            Buscar
        </button>
        </div>

        {searchResult && (
        <div style={{ 
            padding: '10px',
            color: 'black',
            backgroundColor: searchResult.found ? 'white' : 'black',
            border: `1px solid ${searchResult.found ? 'black' : 'red'}`,
        }}>
            <strong style={{color: 'black'}}>Resultado:</strong> El valor {searchResult.value} {searchResult.found ? 'SÍ' : ' NO'} está en el árbol
        </div>
        )}

        <button 
        onClick={onClear}
        style={{ 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
        }}
        >
        Limpiar Árbol
        </button>
    </div>
    );
}

export default TreeControls;