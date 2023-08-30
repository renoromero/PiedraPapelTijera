import './App.css';
import Player from './componentes/player';
import Rival from './componentes/Rival';
import papel from './imagenes/papel.png';
import piedra from './imagenes/piedra.png';
import tijera from './imagenes/tijera.png';


function App() {

var selectRival = [tijera];
  return (
    <div className="App">
      <div className='botones-contenedor'>
        <Player/>
        
      </div>
     <Rival
     imagen={selectRival}/>
    </div>
  );
}

export default App;
