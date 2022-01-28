import React from 'react';
import './Parade.css';

export default function AnimalEmoji({ animalProp }) {
  return <div className="animal-emoji">
    {animalProp === 'giraffe' && '🦒'}
    {animalProp === 'flamingo' && '🦩'}
    {animalProp === 'llama' && '🦙'}
  </div>;
}
