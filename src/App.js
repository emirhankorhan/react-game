import './App.css';
import Start from './components/start/Start';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
      
    </div>
  );
}

export default App;
