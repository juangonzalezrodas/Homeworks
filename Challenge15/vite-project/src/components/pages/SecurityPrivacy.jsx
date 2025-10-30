import React from 'react'

function SecurityPrivacy() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Security & Privacy</h1>
        <p style={{ color: '#6b7280' }}>Manage your security and privacy settings</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Privacy Options</h3>
        <p>✓ Two-factor authentication: Enabled</p>
        <p>✓ Profile visibility: Public</p>
        <p>✓ Data encryption: Active</p>
        </div>
    </div>
    )
}

export default SecurityPrivacy