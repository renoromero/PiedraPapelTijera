import './App.css';
import Player from './componentes/player';
import Rival from './componentes/Rival';
import papel from './imagenes/papel.png';
import piedra from './imagenes/piedra.png';
import tijera from './imagenes/tijera.png';
import { useState } from 'react';


function App() {

  const [numbersArray, setNumbersArray] = useState([]);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 99
    setNumbersArray([randomNumber]); // Agrega el número al arreglo existente
  }

var selectRival = [tijera, papel, piedra];

  return (
    <div className="App">
      <div className='botones-contenedor'>
        <Player/>
      <button onClick={generateRandomNumber}>1</button>
      </div>
     <Rival
     imagen={selectRival[numbersArray]}/>
    </div>
  );
}

export default App;
