import './App.css'
import React from 'react'
import Counter from './components/Counter'
import StackManager from './components/StackManager'

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        fontSize: '32px',
        marginBottom: '30px'
      }}>
        Challenge 10 - Redux
      </h1>

      <Counter />

      <StackManager />
    </div>
  );
}

export default App