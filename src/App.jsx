import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Goal from './Components/Goal';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='ourgoal' element={<Goal />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='about' element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
