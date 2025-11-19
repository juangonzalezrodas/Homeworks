import React from 'react';
import './CityForm.scss';

const CityForm = ({ cityName, setCityName, onAddCity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity();
  };

  return (
    <div className="city-form">
      <h2>🏙️ Gestión de Ciudades</h2>
      
      <form onSubmit={handleSubmit} className="city-form__input-group">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Nombre de la ciudad"
          className="city-form__input"
        />
        <button type="submit" className="city-form__button">
          + Agregar
        </button>
      </form>
    </div>
  );
};

export default CityForm; 