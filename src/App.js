import './App.css';
import Game from './components/game/Game';
import One from './components/one/One';
import Start from './components/start/Start';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/one' element={<One />} />
        <Route path='/whatgame' element={<Game/>} />
      </Routes>
      
    </div>
  );
}

export default App;
