import React from 'react'

function Notification() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Notification Settings</h1>
        <p style={{ color: '#6b7280' }}>Manage your notification preferences</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Notification Preferences</h3>
        <p>✓ Email notifications: Enabled</p>
        <p>✓ Push notifications: Enabled</p>
        <p>✗ SMS notifications: Disabled</p>
        </div>
    </div>
    )
}

export default Notification