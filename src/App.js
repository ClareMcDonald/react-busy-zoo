import { useState } from 'react';
import './App.css';

function App() {

  const [unicornSize, setUnicornSize] = useState[1];
  const [lionSize, setLionSize] = useState[1];

  return (
    <div className="App">
      <div className="fight">
        <div className="lion">
          <p></p>
          <button onClick={() => setUnicornSize(unicornSize + 1)}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
