import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './CityNetwork.scss';

const CityNetwork = ({ 
  nodes, 
  edges, 
  onNodesChange, 
  onEdgesChange, 
  setEdges 
}) => {
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="city-network">
      <h2 className="city-network__title">Red de Ciudades Interconectadas</h2>
      <div className="city-network__container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <MiniMap 
            nodeColor="#4CAF50"
            maskColor="rgba(0, 0, 0, 0.1)"
          />
          <Background variant="dots" gap={12} size={1} color="#C8E6C9" />
        </ReactFlow>
      </div>
      <p className="city-network__info">
        💡 <strong>Instrucciones:</strong> Arrastra las ciudades para reorganizarlas 
        y conéctalas arrastrando desde el borde de un nodo hacia otro
      </p>
    </div>
  );
};

export default CityNetwork;