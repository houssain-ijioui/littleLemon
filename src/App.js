import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Policy from './pages/policy/Policy';
import Booking from './pages/booking/Booking';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import store from './features/store';
import { Toaster  } from 'react-hot-toast';


function App() {
  return (
    <>
      <Toaster  />
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/booking' element={<Booking />} />
              <Route path='/about' element={<About />} />
              <Route path='/policy' element={<Policy />} />
            </Routes>
          </Router>
        </LocalizationProvider>
      </Provider>
    </>
  );
}

export default App;
