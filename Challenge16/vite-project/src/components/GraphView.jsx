import React, { useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";

const GraphView = ({ data }) => {
    const fgRef = useRef();

    useEffect(() => {
    if (fgRef.current) {
        fgRef.current.d3Force("charge").strength(-300);
        fgRef.current.d3ReheatSimulation();
    }
    }, [data]);

    const getNodeColor = (node) => {
    if (node.type === "city") return "#0077b6";
    if (node.type === "person") return "#90e0ef";
    return "#ccc";
    };

    return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
        <ForceGraph2D
        ref={fgRef}
        graphData={data}
        nodeAutoColorBy="type"
        nodeCanvasObject={(node, ctx) => {
            const label = node.id;
            const fontSize = 12;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.fillStyle = getNodeColor(node);
            ctx.beginPath();
            ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.fillText(label, node.x + 10, node.y + 4);
        }}
        linkColor={() => "#aaa"}
        width={900}
        height={500}
        />
    </div>
    );
};

export default GraphView;
