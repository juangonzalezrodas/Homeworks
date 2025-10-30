import React from 'react'

function NetworkStatus() {
    return (
    <div>
        <h1 style={{ color: '#1f2937', marginBottom: '10px' }}>Network Status</h1>
        <p style={{ color: '#6b7280' }}>Check system status and uptime</p>
        <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
        <h3>System Status</h3>
        <div style={{ padding: '10px', backgroundColor: '#d1fae5', borderRadius: '4px', color: '#065f46' }}>
            ✓ All systems operational
        </div>
        <p style={{ marginTop: '15px' }}>Uptime: 99.9%</p>
        <p>Last incident: None</p>
        </div>
    </div>
    )
}

export default NetworkStatus