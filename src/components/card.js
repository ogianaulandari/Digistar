import React from 'react';

function Card({ title, subtitle, style }) {
  return (
    <div style={style}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default Card;
