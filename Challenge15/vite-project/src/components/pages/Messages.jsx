import React from 'react'

function Messages() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Messages</h1>
        <p style={{ color: '#6b7280' }}>View your messages and conversations</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <p>No new messages.</p>
        </div>
    </div>
    )
}

export default Messages