import React, { useState } from "react";

const AddPersonForm = ({ cities, onAddPerson }) => {
    const [formData, setFormData] = useState({ name: "", age: "", city: "" });

    const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.city)
        return alert("Completa todos los campos");
    onAddPerson(formData);
    setFormData({ name: "", age: "", city: "" });
    };

    return (
    <form onSubmit={handleSubmit} className="form">
        <h3>Agregar Persona</h3>
        <input
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        />
        <input
        name="age"
        type="number"
        placeholder="Edad"
        value={formData.age}
        onChange={handleChange}
        />
        <select name="city" value={formData.city} onChange={handleChange}>
        <option value="">Selecciona Ciudad</option>
        {cities.map((city) => (
            <option key={city.id} value={city.id}>
            {city.id}
            </option>
        ))}
        </select>
        <button type="submit">Agregar</button>
    </form>
    );
};

export default AddPersonForm;
