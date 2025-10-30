import React from 'react'

function Account() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Account Settings</h1>
        <p style={{ color: '#6b7280' }}>Manage your account information</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Account Details</h3>
        <p>Email: user@example.com</p>
        <p>Username: johndoe</p>
        <p>Member since: January 2024</p>
        </div>
    </div>
    )
}

export default Account