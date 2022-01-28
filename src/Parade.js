import React from 'react';

export default function Parade({ animals }) {
  return <div className="parade">
    {animals.map((anaimal, i) =>
      <Animal key={`${animal}-${i}`} animal={animal} />)}</div>;
}
