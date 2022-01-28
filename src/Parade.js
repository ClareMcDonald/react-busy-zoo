import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade({ animals }) {
  return <div className="parade">
    {animals.map((animal, i) =>
      <AnimalEmoji key={`${animal}-${i}`} animalProp={animal} />)}</div>;
}
