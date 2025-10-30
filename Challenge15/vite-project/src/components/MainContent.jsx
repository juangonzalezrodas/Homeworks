import React from 'react'

function MainContent({ currentPage, menuTree }) {
    const node = menuTree.findByLink(currentPage)
    const Component = node?.component

    return (
    <div style={{
        marginLeft: '280px',
        padding: '30px',
        minHeight: '100vh',
        width: 'calc(100vw - 280px)',
        backgroundColor: '#f9fafb',
        position: 'fixed',
        top: 0,
        right: 0,
        overflowY: 'auto'
    }}>
        {Component ? (
        <Component />
        ) : (
        <div style={{
            textAlign: 'center',
            padding: '100px 20px',
            color: '#6b7280'
        }}>
            <h2>Selecciona una opción del menú</h2>
        </div>
        )}
    </div>
    )
}

export default MainContent