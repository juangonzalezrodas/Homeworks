import React from 'react'

function SubmitTicket() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Submit a Ticket</h1>
        <p style={{ color: '#6b7280' }}>Contact our support team</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Create Support Ticket</h3>
        <p>Describe your issue and we'll get back to you within 24 hours.</p>
        <button style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
        }}>
            Submit Ticket
        </button>
        </div>
    </div>
    )
}

export default SubmitTicket