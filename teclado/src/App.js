import React, {useEffect} from 'react';
import Player from './components/Player';

import './App.css';

function App() {
  const audioPlayer = Player()

  useEffect(() => {
    audioPlayer.setInstrumento("acoustic_grand_piano")
  }, [])

  const handleClick = () => {
    audioPlayer.playNote("C4")
  }


  return (
    <div className="App">
      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default App;
