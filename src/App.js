import './App.css';
import Player from './componentes/player';
import Rival from './componentes/Rival';


function App() {
 
  var prova = "papel";


  return (
    <div className="App">
      <div className='botones-contenedor'>
        <Player/>
        
      </div>
     <Rival
     imagen={prova}/>
    </div>
  );
}

export default App;
