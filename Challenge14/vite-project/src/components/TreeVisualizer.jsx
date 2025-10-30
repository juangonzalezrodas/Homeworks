import React, { useState, useCallback } from 'react';
import Tree from 'react-d3-tree';

function TreeVisualizer({ treeData }) {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const containerRef = useCallback((node) => {
    if (node !== null) {
      const { width, height } = node.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({
        x: width / 2,
        y: 80
      });
    }
  }, []);

  if (!treeData) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '150px 40px', 
        color: '#999',
        fontStyle: 'italic',
        fontSize: '18px',
        width: '100%'
      }}>
        El árbol está vacío. Agrega números para visualizarlo.
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '100vw',
        height: '700px', 
        backgroundColor: '#fafafa',
        border: '2px solid #e0e0e0',
        overflow: 'hidden',
        position: 'relative',
        margin: '0',
        padding: '0'
      }}
    >
      {dimensions.width > 0 && (
        <Tree 
          data={treeData}
          orientation="vertical"
          translate={translate}
          pathFunc="step"
          nodeSize={{ x: 150, y: 150 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          zoom={1}
          scaleExtent={{ min: 0.2, max: 3 }}
          enableLegacyTransitions={true}
          renderCustomNodeElement={(rd3tProps) => (
            <g>
              <circle 
                r={35} 
                fill="#4285f4"
                stroke="#1565c0"
                strokeWidth={3}
              />
              <text 
                fill="white" 
                strokeWidth="0" 
                fontSize="20"
                fontWeight="bold"
                textAnchor="middle"
                dy={7}
              >
                {rd3tProps.nodeDatum.name}
              </text>
            </g>
          )}
          pathClassFunc={() => 'custom-link'}
          styles={{
            links: {
              stroke: '#1565c0',
              strokeWidth: 3
            }
          }}
        />
      )}
      
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '10px 15px',
        borderRadius: '6px',
        fontSize: '13px',
        color: '#666',
        border: '1px solid #ddd',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
      </div>
    </div>
  );
}

export default TreeVisualizer;