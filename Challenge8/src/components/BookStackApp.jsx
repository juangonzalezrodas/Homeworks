import React, { useState } from 'react'
import { BookStack } from '../data-structures/Stack'
import { mockBooks } from '../data/mockBooks'

function BookStackApp() {
    const [bookStack] = useState(() => {
    const stack = new BookStack()
    mockBooks.forEach(book => stack.push(book))
    return stack
    });

    const [stackVersion, setStackVersion] = useState(0)
    const [newBook, setNewBook] = useState({
    name: '',
    isbn: '',
    author: '',
    editorial: ''
    })

    const updateStack = () => {
    setStackVersion(prev => prev + 1)
    }

    const addNewBook = () => {
    if (newBook.name && newBook.isbn && newBook.author && newBook.editorial) {
        const book = {
        id: Date.now(),
        ...newBook
        };
        bookStack.push(book)
        setNewBook({ name: '', isbn: '', author: '', editorial: '' })
        updateStack()
    }
    };

    const popBook = () => {
    const removedBook = bookStack.pop()
    if (removedBook) {
        updateStack()
    }
    return removedBook
    };

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
        ...prev,
        [name]: value
    }))
    }

    return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Challenge 08 - Stack de Libros</h1>
        <div>
        <h3>Agregar Nuevo Libro al Stack</h3>
        <div>
            <input
            type="text"
            name="name"
            placeholder="Nombre del libro"
            value={newBook.name}
            onChange={handleInputChange}
            />
            <br />
            <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={newBook.isbn}
            onChange={handleInputChange}
            />
            <br />
            <input
            type="text"
            name="author"
            placeholder="Autor"
            value={newBook.author}
            onChange={handleInputChange}
            />
            <br />
            <input
            type="text"
            name="editorial"
            placeholder="Editorial"
            value={newBook.editorial}
            onChange={handleInputChange}
            />
            <br />
            <button 
            onClick={addNewBook}
            >
            Agregar Libro (Push)
            </button>
        </div>
        </div>
        <div>
        <button 
            onClick={popBook}
            disabled={bookStack.isEmpty()}
        >
            Remover Libro del Tope (Pop)
        </button>
        </div>

        <div>
        <h3>Stack de Libros</h3>
        {bookStack.isEmpty() ? (
            <p>El stack está vacío</p>
        ) : (
            <div>
            {bookStack.toArray().map((book, index) => (
                <div
                key={`${book.id}-${index}`}
                >
                <strong>{book.name}</strong> {index === 0 && <span style={{color: 'red'}}>(TOPE)</span>}
                <br />
                <small>Autor: {book.author} | ISBN: {book.isbn} | Editorial: {book.editorial}</small>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    );
}

export default BookStackApp



