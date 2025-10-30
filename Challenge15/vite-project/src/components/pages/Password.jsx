import React from 'react'

function Password() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Change Password</h1>
        <p style={{ color: '#6b7280' }}>Update your account password</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Password Requirements</h3>
        <ul style={{ color: '#6b7280' }}>
            <li>At least 8 characters long</li>
            <li>Contains uppercase and lowercase letters</li>
            <li>Includes at least one number</li>
            <li>Has at least one special character</li>
        </ul>
        </div>
    </div>
    )
}

export default Password