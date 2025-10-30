import React from 'react'
import MenuItem from './MenuItem'

function Sidebar({ menuTree, currentPath, onNavigate }) {
    const menuData = menuTree.toArray()

    return (
    <div style={{
        width: '280px',
        height: '100vh',
        backgroundColor: '#1f2937',
        color: 'white',
        overflowY: 'auto',
        position: 'fixed',
        left: 0,
        top: 0,
        boxShadow: '2px 0 10px rgba(0,0,0,0.3)'
    }}>
        <div style={{
        padding: '20px',
        backgroundColor: '#111827',
        borderBottom: '1px solid #374151'
        }}>
        <h2 style={{ 
            margin: 0, 
            fontSize: '20px',
            color: '#3b82f6'
        }}>
            Challenge 15
        </h2>
        <p style={{ 
            margin: '5px 0 0 0', 
            fontSize: '12px',
            color: '#9ca3af'
        }}>
            N-ary Tree Menu
        </p>
        </div>

        <div style={{ paddingTop: '10px' }}>
        {menuData.children && menuData.children.map((node, index) => (
            <MenuItem
            key={index}
            node={node}
            currentPath={currentPath}
            onNavigate={onNavigate}
            />
        ))}
        </div>
    </div>
    )
}

export default Sidebar