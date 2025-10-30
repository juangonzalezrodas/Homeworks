import React, { useState } from 'react';
import { BinaryTree } from './data-structures/BinaryTree';
import TreeVisualizer from './components/TreeVisualizer';
import TreeControls from './components/TreeControls';
import TreeTraversal from './components/TreeTraversal';

function App() {
  const [tree] = useState(() => new BinaryTree());
  const [treeData, setTreeData] = useState(null);
  const [treeVersion, setTreeVersion] = useState(0);

  const handleInsert = (value) => {
    tree.insert(value);
    setTreeData(tree.toD3Format());
    setTreeVersion(prev => prev + 1);
  };

  const handleSearch = (value) => {
    const found = tree.search(value);
    console.log(`Buscando ${value}:`, found ? 'ENCONTRADO' : 'NO ENCONTRADO');
    return found;
  };

  const handleClear = () => {
    tree.root = null;
    setTreeData(null);
    setTreeVersion(prev => prev + 1);
    console.log('Árbol limpiado');
  };

  // Insertar valores de ejemplo al cargar
  React.useEffect(() => {
    const initialValues = [50, 30, 70, 20, 40, 60, 80];
    console.log('=== Insertando valores iniciales ===');
    initialValues.forEach(value => tree.insert(value));
    setTreeData(tree.toD3Format());
    setTreeVersion(prev => prev + 1);
    
    console.log('\n=== Recorridos iniciales ===');
    tree.inorder();
    tree.preorder();
    tree.postorder();
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderBottom: '2px solid #e0e0e0',
        marginBottom: '0'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: 'black', 
          margin: '0 0 5px 0',
          fontSize: '36px'
        }}>
          Challenge 14
        </h1>
      </div>

      {/* Controles */}
      <div style={{ padding: '20px', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <TreeControls 
            onInsert={handleInsert}
            onSearch={handleSearch}
            onClear={handleClear}
          />
        </div>
      </div>

      {/* Visualización del árbol - TODO EL ANCHO DE LA VENTANA */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '0',
        margin: '0',
        width: '100%'
      }}>
        <h3 style={{ 
          padding: '20px', 
          margin: '0 0 0 0', 
          color: '#333', 
          textAlign: 'center',
          backgroundColor: 'white'
        }}>
          Visualización del Árbol
        </h3>
        <TreeVisualizer treeData={treeData} />
      </div>

      <div style={{ 
        padding: '20px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '20px'
        }}>
          <TreeTraversal tree={tree} treeVersion={treeVersion} />
        </div>
      </div>
    </div>
  );
}

export default App;