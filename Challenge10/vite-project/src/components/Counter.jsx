import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleIncrementByAmount = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value) && value > 0) {
        dispatch(incrementByAmount(value))
    } else {
        alert('Por favor ingresa un número válido mayor a 0')
    }
    }

    return (
    <div>
        <h2>Contador Redux</h2>
        <div>
        {count}
        </div>

        <div>
        <button onClick={() => dispatch(decrement())}>
            - Decrementar
        </button>
        
        <button 
            onClick={() => dispatch(increment())}>
            + Incrementar
        </button>

        <button 
            onClick={() => dispatch(reset())}>
            Reset
        </button>
        </div>

        <div>
        <h4>Incrementar por Valor Específico</h4>
        <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un número"
        />
        <button 
            onClick={handleIncrementByAmount}>
            Incrementar por {inputValue || 'X'}
        </button>
        </div>
    </div>
    );
}

export default Counter;