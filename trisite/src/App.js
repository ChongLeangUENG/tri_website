import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import Explication from './routes/Explication';
import Calculatrice from './routes/Calculatrice';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explication' element={<Explication />}/>
        <Route path='/calculatrice' element={<Calculatrice />}/>
      </Routes>
    </div>
  );
}

export default App;
