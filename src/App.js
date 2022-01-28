import { useState } from 'react';
import './App.css';
import OpenSign from './OpenSign';
import Parade from './Parade';

function App() {

  const [unicornSize, setUnicornSize] = useState(1);
  const [dragonSize, setDragonSize] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['llama']);

  return (
    <div className="App">
      <div className="fight">
        <div className="unicorn">
          <p style={{ fontSize: `${unicornSize}rem` }}>🦄</p>
          <button onClick={() => setUnicornSize(unicornSize + 1)}>Unicorn is eating magic sparkles. He is growing so large!</button>
          <button onClick={() => setDragonSize(dragonSize - 1)}>Unicorn hit Dragon!</button>
        </div>
        <div className="dragon">
          <p style={{ fontSize: `${dragonSize}rem` }}>🐲</p>
          <button onClick={() => setDragonSize(dragonSize + 1)}>Dragon is drinking from the fire well. She is getting stronger!</button>
          <button onClick={() => setUnicornSize(unicornSize - 1)}>Dragon hit Unicorn!</button>
        </div>
      </div>
      <OpenSign isOpen={isOpen} />
      <div className="open-buttons">
        <button onClick={() => setIsOpen(true)} >Open the Zoo!</button>
        <button onClick={() => setIsOpen(false)}>Close the Zoo</button>
      </div>
      < Parade animals={animals}/>
      <div className="parade-buttons">
        <button onClick={() => setAnimals([...animals, 'giraffe'])}>Add Giraffe</button>
        <button onClick={() => setAnimals([...animals, 'tiger'])}>Add Tiger</button>
        <button onClick={() => setAnimals([...animals, 'llama'])}>Add Llama</button>
      </div>
    </div>
  );
}

export default App;
