import React from 'react'

function Settings() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Settings</h1>
        <p style={{ color: '#6b7280' }}>Manage your account settings</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <p>Select a settings category from the menu.</p>
        </div>
    </div>
    )
}

export default Settings