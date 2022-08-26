
import './App.css';
import LogoFreeCodeCamp from './components/Logofreecodecamp';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-contenedor'>
        <LogoFreeCodeCamp/>
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea/>
    </div>

    </div>
  );
}

export default App;
