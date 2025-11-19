import React from 'react';
import './GreenZoneManager.scss';

const GreenZoneManager = ({ 
  selectedCity, 
  zoneName, 
  setZoneName, 
  selectedParentZone, 
  setSelectedParentZone, 
  onAddGreenZone,
  renderZoneList 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGreenZone();
  };

  if (!selectedCity) {
    return (
      <div className="green-zone-manager">
        <h2>🌲 Gestión de Zonas Verdes</h2>
        <p className="green-zone-manager__empty">
          👈 Selecciona una ciudad para gestionar sus zonas verdes
        </p>
      </div>
    );
  }

  return (
    <div className="green-zone-manager">
      <h2>🌲 Gestión de Zonas Verdes</h2>
      
      <div className="green-zone-manager__city-info">
        📍 Ciudad: {selectedCity.name}
      </div>
      
      {selectedParentZone && (
        <div className="green-zone-manager__parent-info">
          <strong>Subzona de:</strong> {selectedParentZone.name}
          <button
            onClick={() => setSelectedParentZone(null)}
            className="green-zone-manager__cancel-button"
          >
            ✖ Cancelar
          </button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="green-zone-manager__input-group">
        <input
          type="text"
          value={zoneName}
          onChange={(e) => setZoneName(e.target.value)}
          placeholder={selectedParentZone ? "Nombre de la subzona" : "Nombre de la zona verde"}
          className="green-zone-manager__input"
        />
        <button type="submit" className="green-zone-manager__button">
          + Agregar
        </button>
      </form>
      
      <div className="green-zone-manager__list">
        <div className="green-zone-manager__list-label">
          Selecciona zona padre (opcional):
        </div>
        {selectedCity.greenZones.length > 0 ? (
          renderZoneList()
        ) : (
          <p className="green-zone-manager__list-empty">
            No hay zonas verdes aún
          </p>
        )}
      </div>
    </div>
  );
};

export default GreenZoneManager;