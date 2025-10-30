import React from 'react'

function Profile() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Profile</h1>
        <p style={{ color: '#6b7280' }}>Manage your profile information</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <p>View and edit your profile details here.</p>
        </div>
    </div>
    )
}

export default Profile