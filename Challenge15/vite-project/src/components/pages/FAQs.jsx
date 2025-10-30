import React from 'react'

function FAQs() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Frequently Asked Questions</h1>
        <p style={{ color: '#6b7280' }}>Find answers to common questions</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>Popular Questions:</h3>
        <p><strong>Q: How do I reset my password?</strong></p>
        <p>A: Go to Settings → Password</p>
        <br/>
        <p><strong>Q: How do I change my profile picture?</strong></p>
        <p>A: Go to Settings → Profile</p>
        </div>
    </div>
    )
}

export default FAQs