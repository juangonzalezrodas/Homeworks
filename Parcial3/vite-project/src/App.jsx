import React, { useState } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import City from './models/City';
import GreenZone from './models/GreenZone';
import CityForm from './components/CityForm/CityForm';
import GreenZoneManager from './components/GreenZoneManager/GreenZoneManager';
import CityStats from './components/CityStats/CityStats';
import GreenZoneTree from './components/GreenZoneTree/GreenZoneTree';
import CityNetwork from './components/CityNetwork/CityNetwork';
import './App.scss';

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [cityName, setCityName] = useState('');
  const [zoneName, setZoneName] = useState('');
  const [selectedParentZone, setSelectedParentZone] = useState(null);


  const addCity = () => {
    if (!cityName.trim()) return;
    
    const newCity = new City(Date.now().toString(), cityName);
    const updatedCities = [...cities, newCity];
    setCities(updatedCities);
    
    const newNode = {
      id: newCity.id,
      data: { label: newCity.name },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      style: {
        background: '#4CAF50',
        color: 'white',
        border: '2px solid #388E3C',
        borderRadius: '8px',
        padding: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    };
    
    setNodes((nds) => [...nds, newNode]);
    setCityName('');
  };


  const deleteCity = (cityId) => {
    setCities(cities.filter(c => c.id !== cityId));
    setNodes((nds) => nds.filter(n => n.id !== cityId));
    setEdges((eds) => eds.filter(e => e.source !== cityId && e.target !== cityId));
    if (selectedCity?.id === cityId) setSelectedCity(null);
  };


  const addGreenZone = () => {
    if (!selectedCity || !zoneName.trim()) return;
    
    const newZone = new GreenZone(
      Date.now().toString(),
      zoneName,
      selectedParentZone?.id || null
    );
    
    const updatedCities = cities.map(city => {
      if (city.id === selectedCity.id) {
        if (selectedParentZone) {
          const addToParent = (zones) => {
            for (let zone of zones) {
              if (zone.id === selectedParentZone.id) {
                zone.addSubzone(newZone);
                return true;
              }
              if (addToParent(zone.subzones)) return true;
            }
            return false;
          };
          addToParent(city.greenZones);
        } else {
          city.addGreenZone(newZone);
        }
      }
      return city;
    });
    
    setCities(updatedCities);
    setSelectedCity(updatedCities.find(c => c.id === selectedCity.id));
    setZoneName('');
    setSelectedParentZone(null);
  };

  const renderZoneList = (zones = selectedCity?.greenZones || [], level = 0) => {
    return zones.map(zone => (
      <div key={zone.id}>
        <div
          onClick={() => setSelectedParentZone(zone)}
          className={`zone-item zone-item--level-${level} ${
            selectedParentZone?.id === zone.id ? 'zone-item--selected' : ''
          }`}
        >
          {level > 0 && '↳ '}{zone.name}
        </div>
        {zone.subzones.length > 0 && renderZoneList(zone.subzones, level + 1)}
      </div>
    ));
  };

  return (
    <div className="app">
      <h1 className="app__title">
        🌳 Red de Ciudades con Zonas Verdes
      </h1>
      
      <div className="app__main-grid">
        <div className="app__city-panel">
          <CityForm 
            cityName={cityName}
            setCityName={setCityName}
            onAddCity={addCity}
          />
          
          <div className="app__city-list">
            {cities.length === 0 ? (
              <p className="app__empty-message">
                No hay ciudades. Agrega una ciudad para empezar.
              </p>
            ) : (
              cities.map(city => (
                <div
                  key={city.id}
                  className={`city-card ${
                    selectedCity?.id === city.id ? 'city-card--selected' : ''
                  }`}
                  onClick={() => setSelectedCity(city)}
                >
                  <div className="city-card__info">
                    <strong className="city-card__name">{city.name}</strong>
                    <div className="city-card__stats">
                      Zonas: {city.getTotalGreenZones()} | Altura máx: {city.getMaxHeight()}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm(`¿Eliminar ${city.name}?`)) {
                        deleteCity(city.id);
                      }
                    }}
                    className="city-card__delete"
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <GreenZoneManager
          selectedCity={selectedCity}
          zoneName={zoneName}
          setZoneName={setZoneName}
          selectedParentZone={selectedParentZone}
          setSelectedParentZone={setSelectedParentZone}
          onAddGreenZone={addGreenZone}
          renderZoneList={() => renderZoneList()}
        />
      </div>

      <CityStats city={selectedCity} />

      <GreenZoneTree city={selectedCity} />

      <CityNetwork
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        setEdges={setEdges}
      />
    </div>
  );
}

export default App;