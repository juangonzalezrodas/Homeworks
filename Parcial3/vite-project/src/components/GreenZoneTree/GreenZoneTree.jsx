import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import './GreenZoneTree.scss';

const GreenZoneTree = ({ city }) => {
  const [showTree, setShowTree] = useState(false);

  if (!city || !city.greenZones || city.greenZones.length === 0) {
    return null;
  }

  const nodeSize = { x: 200, y: 100 };
  const separation = { siblings: 1.5, nonSiblings: 2 };

  const renderCustomNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <circle r={30} fill="#4CAF50" stroke="#2E7D32" strokeWidth="2" />
      <text
        fill="white"
        strokeWidth="0"
        x="0"
        y="5"
        textAnchor="middle"
        style={{ fontSize: '14px', fontWeight: 'bold' }}
      >
        {nodeDatum.name.length > 12 ? nodeDatum.name.substring(0, 12) + '...' : nodeDatum.name}
      </text>
      {nodeDatum.attributes && (
        <text
          fill="#333"
          x="0"
          y="50"
          textAnchor="middle"
          style={{ fontSize: '11px' }}
        >
          H: {nodeDatum.attributes.altura} | T: {nodeDatum.attributes.total}
        </text>
      )}
      {nodeDatum.children && (
        <text
          fill="#666"
          x="0"
          y="-45"
          textAnchor="middle"
          style={{ fontSize: '10px', cursor: 'pointer' }}
          onClick={toggleNode}
        >
          {nodeDatum.__rd3t?.collapsed ? '▼ Expandir' : '▲ Colapsar'}
        </text>
      )}
    </g>
  );

  return (
    <div className="green-zone-tree">
      <div className="green-zone-tree__header">
        <h2 className="green-zone-tree__title">
          🌳 Árbol Jerárquico de Zonas Verdes - {city.name}
        </h2>
        <button
          onClick={() => setShowTree(!showTree)}
          className="green-zone-tree__toggle"
        >
          {showTree ? '▲ Ocultar Árbol' : '▼ Mostrar Árbol'}
        </button>
      </div>
      
      {showTree && (
        <div className="green-zone-tree__container">
          <Tree
            data={city.getTreeData()}
            orientation="vertical"
            translate={{ x: 400, y: 50 }}
            nodeSize={nodeSize}
            separation={separation}
            pathFunc="step"
            renderCustomNodeElement={renderCustomNode}
            zoom={0.8}
            collapsible={true}
            initialDepth={2}
          />
        </div>
      )}
      <p className="green-zone-tree__info">
        💡 H = Altura de la rama | T = Total de zonas en la rama (incluyendo subzonas)
      </p>
    </div>
  );
};

export default GreenZoneTree;