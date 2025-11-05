import React, { useState } from "react";

const AddCityForm = ({ onAddCity }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return alert("Nombre de ciudad requerido");
    onAddCity(city.trim());
    setCity("");
    };

    return (
    <form onSubmit={handleSubmit} className="form">
        <h3>Agregar Ciudad</h3>
        <input
        type="text"
        placeholder="Nombre de ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Agregar</button>
    </form>
    );
};

export default AddCityForm;
