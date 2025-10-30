import React from 'react';

function TreeTraversal({ tree, treeVersion }) {
    const [traversals, setTraversals] = React.useState({
    inorder: [],
    preorder: [],
    postorder: []
    });

    React.useEffect(() => {
    if (tree.root) {
        setTraversals({
        inorder: tree.inorder(),
        preorder: tree.preorder(),
        postorder: tree.postorder()
        });
    } else {
        setTraversals({
        inorder: [],
        preorder: [],
        postorder: []
        });
    }
    }, [tree, treeVersion]);

    const height = tree.getHeight();
    const nodeCount = tree.countNodes();

    return (
    <div>
        <h3 style={{ marginTop: 0, color: '#333' }}>Recorridos del Árbol</h3>
        <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '10px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        }}>
        <div>
            <strong>Altura del árbol:</strong> {height}
        </div>
        <div>
            <strong>Número de nodos:</strong> {nodeCount}
        </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{  
            border: '1px solid black'
        }}>
            <strong style={{ color: 'black' }}>Inorder (Izq - Raíz - Der):</strong>
            <div style={{ marginTop: '8px', fontSize: '14px', color: 'black'}}>
            {traversals.inorder.length > 0 ? traversals.inorder.join(' → ') : 'Árbol vacío'}
            </div>
        </div>

        <div style={{ 
            border: '1px solid black'
        }}>
            <strong style={{ color: 'black' }}>Preorder (Raíz - Izq - Der):</strong>
            <div style={{ marginTop: '8px', fontSize: '14px', color: 'black' }}>
            {traversals.preorder.length > 0 ? traversals.preorder.join(' → ') : 'Árbol vacío'}
            </div>
        </div>

        <div style={{ 
            border: '1px solid black'
        }}>
            <strong style={{ color: 'black' }}>Postorder (Izq - Der - Raíz):</strong>
            <div style={{ marginTop: '8px', fontSize: '14px', color: 'black' }}>
            {traversals.postorder.length > 0 ? traversals.postorder.join(' → ') : 'Árbol vacío'}
            </div>
        </div>
        </div>
    </div>
    );
}

export default TreeTraversal;