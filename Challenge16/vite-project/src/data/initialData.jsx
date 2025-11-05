export const initialData = {
    nodes: [
    { id: "Juan", age: 22, type: "person", city: "Bogotá" },
    { id: "María", age: 25, type: "person", city: "Medellín" },
    { id: "Pedro", age: 30, type: "person", city: "Bogotá" },
    { id: "Bogotá", type: "city" },
    { id: "Medellín", type: "city" },
    ],
    links: [
    { source: "Juan", target: "Bogotá" },
    { source: "Pedro", target: "Bogotá" },
    { source: "María", target: "Medellín" },
    ],
};
