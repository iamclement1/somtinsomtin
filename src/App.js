import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Otp from './Pages/OTP/Otp';
import Register from './Pages/Register';
import SampleLogin from './Pages/SampleLogin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login />}  />
          <Route path="/register" element={ <Register /> }/>
          <Route path="/sample" element={ <SampleLogin /> } />
          <Route path='/otp-page' element={ <Otp /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
