import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Pages/Login';
import Otp from './Pages/OTP/Otp';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css'
import SignUpForm  from './Components/RegisterForm/SignUpForm';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routes>
          <Route path="/" element={ <Sidebar/> } />
          <Route path="/login" element={ <Login />}  />
          <Route path="/register" element={ <Register /> }/>
          <Route path='/otp-page' element={ <Otp /> } />
          <Route path='/signup' element={ <SignUpForm /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
