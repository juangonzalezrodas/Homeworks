import React from 'react';
import './CityStats.scss';

const CityStats = ({ city }) => {
  if (!city) return null;

  return (
    <div className="city-stats">
      <h2 className="city-stats__title">
        📊 Estadísticas de {city.name}
      </h2>
      <div className="city-stats__grid">
        <div className="city-stats__card city-stats__card--height">
          <h3 className="city-stats__card-title">
            🌲 Altura Máxima de Jerarquía
          </h3>
          <p className="city-stats__card-value">
            {city.getMaxHeight()}
          </p>
        </div>
        <div className="city-stats__card city-stats__card--total">
          <h3 className="city-stats__card-title">
            🌳 Total de Zonas Verdes
          </h3>
          <p className="city-stats__card-value">
            {city.getTotalGreenZones()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityStats;