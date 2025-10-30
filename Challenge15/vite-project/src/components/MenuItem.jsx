import React, { useState } from 'react'

function MenuItem({ node, currentPath, onNavigate, level = 0 }) {
    const [isOpen, setIsOpen] = useState(true)
    const hasChildren = node.children && node.children.length > 0
    const isActive = currentPath === node.link

    const handleClick = () => {
    if (hasChildren) {
        setIsOpen(!isOpen)
    }
    if (node.link && node.link !== '/') {
        onNavigate(node.link)
    }
    }

    return (
    <div style={{ width: '100%' }}>
        <div
        onClick={handleClick}
        style={{
          padding: `${10 + level * 5}px ${20 + level * 15}px`,
            cursor: 'pointer',
            backgroundColor: isActive ? '#3b82f6' : 'transparent',
            color: isActive ? 'white' : '#9ca3af',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s',
            borderLeft: isActive ? '4px solid #60a5fa' : '4px solid transparent',
            fontSize: '14px',
            fontWeight: isActive ? 'bold' : 'normal'
        }}
        onMouseEnter={(e) => {
            if (!isActive) {
            e.target.style.backgroundColor = '#374151';
            }
        }}
        onMouseLeave={(e) => {
            if (!isActive) {
            e.target.style.backgroundColor = 'transparent';
            }
        }}
        >
        <span>{node.title}</span>
        {hasChildren && (
            <span style={{ fontSize: '12px' }}>
            {isOpen ? '▼' : '▶'}
            </span>
        )}
        </div>

        {hasChildren && isOpen && (
        <div>
            {node.children.map((child, index) => (
            <MenuItem
                key={index}
                node={child}
                currentPath={currentPath}
                onNavigate={onNavigate}
                level={level + 1}
            />
            ))}
        </div>
        )}
    </div>
    )
}

export default MenuItem