import React, { useState } from 'react';
import Card from './Card';


const Form = () => {
  const [formDato, setFormDato] = useState({
    personaje: "",
    serie: ""
  });

  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDato({ ...formDato, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { personaje, serie } = formDato;

    if (personaje.length < 3 || !personaje.startsWith(" ")) {
      setError("Por favor, verifica que la información sea correcta.");
      setShowCard(false);
      return;
    }

    if (serie.length < 6) {
      setError("Por favor, verifica que la información sea correcta.");
      setShowCard(false);
      return;
    }

    setShowCard(true);
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre del personaje:</label>
        <input 
          type="text" 
          name="personaje" 
          value={formDato.personaje} 
          onChange={handleChange} 
        />
        
        <label>Serie:</label>
        <input 
          type="text" 
          name="serie" 
          value={formDato.serie} 
          onChange={handleChange} 
        />
        
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showCard && (
        <Card personaje={formDato.personaje} serie={formDato.serie} />
      )}
    </div>
  );
};

export default Form;
