import React from 'react'

function ProfileSettings() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Profile Settings</h1>
        <p style={{ color: '#6b7280' }}>Update your profile information</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Edit Profile</h3>
        <p>Change your display name, bio, and profile picture.</p>
        </div>
    </div>
    )
}

export default ProfileSettings