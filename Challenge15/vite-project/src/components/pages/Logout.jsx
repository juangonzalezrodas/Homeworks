import React from 'react'

function Logout() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Logout</h1>
        <p style={{ color: '#6b7280' }}>Sign out of your account</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <p>Are you sure you want to logout?</p>
        <button style={{
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
        }}>
            Confirm Logout
        </button>
        </div>
    </div>
    )
}

export default Logout