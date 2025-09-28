import React, { useState } from 'react'
import { ATMQueue } from '../data-structure/Queue'
import { mockPeople } from '../data/mockPeople'

function ATMQueueApp() {
    const [atmQueue] = useState(() => {
    const queue = new ATMQueue()
    queue.addMultiplePeople(mockPeople)
    return queue
    })

    const [queueVersion, setQueueVersion] = useState(0)
    const [newPerson, setNewPerson] = useState({
    name: '',
    withdrawalAmount: '',
    arrivalTime: ''
    })

    const updateQueue = () => {
    setQueueVersion(prev => prev + 1)
    }

    const addNewPerson = () => {
    if (newPerson.name && newPerson.withdrawalAmount && newPerson.arrivalTime) {
        const person = {
        id: Date.now(),
        name: newPerson.name,
        withdrawalAmount: parseInt(newPerson.withdrawalAmount),
        arrivalTime: new Date(newPerson.arrivalTime)
        };
        atmQueue.enqueue(person);
        setNewPerson({ name: '', withdrawalAmount: '', arrivalTime: '' })
        updateQueue()
    }
    };

    const addPersonWithCurrentTime = () => {
    if (newPerson.name && newPerson.withdrawalAmount) {
        const person = {
        id: Date.now(),
        name: newPerson.name,
        withdrawalAmount: parseInt(newPerson.withdrawalAmount),
        arrivalTime: new Date()
        };
        atmQueue.enqueue(person)
        setNewPerson({ name: '', withdrawalAmount: '', arrivalTime: '' })
        updateQueue()
    }
    };

    const servePerson = () => {
    const servedPerson = atmQueue.dequeue()
    if (servedPerson) {
        updateQueue()
        alert(`Atendido: ${servedPerson.name} - Retiró: $${servedPerson.withdrawalAmount.toLocaleString()} - Llegó: ${servedPerson.arrivalTime.toLocaleTimeString()}`)
    }
    return servedPerson
    }

    const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewPerson(prev => ({
        ...prev,
        [name]: value
    }))
    }

    const formatDateTime = (date) => {
    return date.toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
    }

    return (
    <div>
        <h1>ATM por orden de llegada</h1>

        <div>
        <h3>Agregar Nueva Persona a la Cola</h3>
        <div>
            <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={newPerson.name}
            onChange={handleInputChange}
            />
            <br />
            <input
            type="number"
            name="withdrawalAmount"
            placeholder="Monto a retirar"
            value={newPerson.withdrawalAmount}
            onChange={handleInputChange}
            />
            <br />
            <input
            type="datetime-local"
            name="arrivalTime"
            value={newPerson.arrivalTime}
            onChange={handleInputChange}
            />
            <br />
            <button 
            onClick={addNewPerson}
            >
            Agregar por fecha y hora
            </button>
        </div>
        </div>

        <div>
        <button 
            onClick={servePerson}
            disabled={atmQueue.isEmpty()}
        >
            Atender Siguiente Persona
        </button>
        <span>
            Personas en cola: {atmQueue.getSize()}
        </span>
        </div>

        {atmQueue.peek() && (
        <div>
            <h4>Siguiente en ser atendido:</h4>
            <p><strong>{atmQueue.peek().name}</strong></p>
            <p>Monto a retirar: <strong>${atmQueue.peek().withdrawalAmount.toLocaleString()}</strong></p>
            <p>Hora de llegada: <strong>{formatDateTime(atmQueue.peek().arrivalTime)}</strong></p>
        </div>
        )}

        <div>
        <h3>Cola del ATM (Ordenada por Fecha de Llegada - FIFO)</h3>
        {atmQueue.isEmpty() ? (
            <p>La cola está vacía</p>
        ) : (
            <div>
            <p><strong>Orden de atención (por hora de llegada):</strong></p>
            {atmQueue.toArray().map((person, index) => (
                <div
                key={`${person.id}-${index}`}
                >
                <div>
                    <div>
                    <strong>
                        {index + 1}. {person.name}
                    </strong> 
                    {index === 0 && <span style={{color: 'red'}}> (SIGUIENTE)</span>}
                    <br />
                    <small>Monto: ${person.withdrawalAmount.toLocaleString()}</small>
                    </div>
                    <div>
                    <strong>Llegada:</strong><br />
                    {formatDateTime(person.arrivalTime)}
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    );
}

export default ATMQueueApp;