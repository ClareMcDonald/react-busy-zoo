import React from 'react';

export default function AnimalEmoji({ animalProp }) {
  return <div>
    {animalProp === 'giraffe' && '🦒'}
    {animalProp === 'flamingo' && '🦩'}
    {animalProp === 'llama' && '🦙'}
  </div>;
}
