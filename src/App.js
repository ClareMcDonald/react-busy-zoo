import { useState } from 'react';
import './App.css';

function App() {

  const [unicornSize, setUnicornSize] = useState(1);
  const [dragonSize, setDragonSize] = useState(1);

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
    </div>
  );
}

export default App;
