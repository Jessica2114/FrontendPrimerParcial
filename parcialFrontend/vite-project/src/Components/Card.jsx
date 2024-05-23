import React from 'react';


const Card = ({ personaje, serie }) => {
  return (
    <div>
      <h2>Información del Personaje</h2>
      <p>Nombre del personaje: {personaje}</p>
      <p>Serie o pelicula: {serie}</p>
    </div>
  );
};

export default Card;
