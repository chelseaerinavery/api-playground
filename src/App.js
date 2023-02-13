import './App.css';
import { useEffect } from 'react';

function App() {

  const getSpellsRequest = async () => {
    const response = await fetch('https://hp-api.onrender.com/api/spells');
    const json = await response.json()
    return json;
  }

  const onClick = async () => {
    console.log(await getSpellsRequest())
  }

  return (
    <div className="App">
      <button onClick={onClick}>Get Data</button>

    </div>
  );
}

export default App;
