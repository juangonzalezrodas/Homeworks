import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { push, pop, clear } from '../redux/stackSlice'

function StackManager() {
    const stack = useSelector((state) => state.stack.items);
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handlePush = () => {
    if (inputValue.trim()) {
        dispatch(push(inputValue))
        setInputValue('')
    } else {
        alert('Por favor ingresa un valor para agregar al stack')
    }
    };

    const handlePop = () => {
    if (stack.length > 0) {
        dispatch(pop());
    } else {
        alert('El stack está vacío')
    }
    }

    return (
    <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        margin: '20px 0', 
        borderRadius: '8px',
        border: '2px solid #dee2e6'
    }}>
        <h2>Stack Redux</h2>

        <div>
        <strong>Tamaño del Stack: {stack.length}</strong>
        {stack.length > 0 && (
            <span>
            | Tope: <strong>{stack[0]}</strong>
            </span>
        )}
        </div>

        <div>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un valor"
            onKeyPress={(e) => e.key === 'Enter' && handlePush()}
        />
        <button 
            onClick={handlePush}>
            Push (Agregar)
        </button>
        <button 
            onClick={handlePop}
            disabled={stack.length === 0}>
            Pop (Remover)
        </button>
        <button 
            onClick={() => dispatch(clear())}
            disabled={stack.length === 0}>
            Limpiar Stack
        </button>
        </div>

        <div>
        <h3>Stack</h3>
        {stack.length === 0 ? (
            <p>
            El stack está vacío
            </p>
        ) : (
            <div>
            {stack.map((item, index) => (
                <div
                key={index}>
                {index === 0 && (
                    <span>
                    TOP
                    </span>
                )}
                <strong>{item}</strong>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    );
}

export default StackManager;