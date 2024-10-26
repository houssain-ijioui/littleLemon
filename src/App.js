import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Policy from './pages/policy/Policy';
import Booking from './pages/booking/Booking';


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
