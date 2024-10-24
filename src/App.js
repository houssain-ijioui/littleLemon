import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Policy from './pages/Policy/Policy';
import Booking from './pages/Booking/Booking';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/about' element={<About />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
