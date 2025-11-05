import React, { useState } from "react";
import GraphView from "./components/GraphView";
import AddPersonForm from "./components/AddPersonForm";
import AddCityForm from "./components/AddCityForm";
import { initialData } from "./data/initialData";
import "./styles/app.css";

function App() {
  const [data, setData] = useState(initialData);
  const [selectedCity, setSelectedCity] = useState("Bogotá");

  const cities = data.nodes.filter((n) => n.type === "city");

  const addCity = (cityName) => {
    if (data.nodes.find((n) => n.id === cityName))
      return alert("Esa ciudad ya existe");
    const newCity = { id: cityName, type: "city" };
    setData({ ...data, nodes: [...data.nodes, newCity] });
  };

  const addPerson = (person) => {
    if (data.nodes.find((n) => n.id === person.name))
      return alert("Esa persona ya existe");

    const newPerson = {
      id: person.name,
      age: person.age,
      type: "person",
      city: person.city,
    };

    const newLink = { source: person.name, target: person.city };

    setData({
      nodes: [...data.nodes, newPerson],
      links: [...data.links, newLink],
    });
  };

  const getPeopleByCity = (cityName) =>
    data.nodes.filter((n) => n.type === "person" && n.city === cityName);

  return (
    <div className="container">
      <h2>Grafo de Amigos y Ciudades</h2>

      <GraphView data={data} />

      <div className="forms">
        <AddPersonForm cities={cities} onAddPerson={addPerson} />
        <AddCityForm onAddCity={addCity} />
      </div>

      <div style={{ textAlign: "center" }}>
        <h3>Personas que viven en:</h3>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.id}
            </option>
          ))}
        </select>
        <ul>
          {getPeopleByCity(selectedCity).map((p) => (
            <li key={p.id}>
              {p.id} ({p.age} años)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

