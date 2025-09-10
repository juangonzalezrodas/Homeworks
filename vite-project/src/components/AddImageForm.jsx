import React, { useState } from 'react'

const AddImageForm = ({ onAddImage, isLoading, onCancel }) => {
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')

    const handleSubmit = async () => {
    try {
        await onAddImage(title, id)
        setTitle('')
        setId('')
    } catch (error) {
        alert(error.message)
    }
    }

    return (
    <div>
        <h2>Agregar Nueva Imagen</h2>
        <div>
        <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}/>
        <input
            type="number"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={isLoading}/>
        </div>
        <div>
            <button onClick={handleSubmit} disabled={isLoading}>{isLoading ? 'Agregando...' : 'Agregar'}</button>
            <button onClick={onCancel}>Cancelar</button>
        </div>
    </div>
    )
}

export default AddImageForm