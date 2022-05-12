import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Pages/Login';
import Otp from './Pages/OTP/Otp';
import Register from './Pages/Register';
import SampleLogin from './Pages/SampleLogin';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignUpForm  from './Components/RegisterForm/SignUpForm';

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routes>
          <Route path="/" element={ <Sidebar/> } />
          <Route path="/login" element={ <Login />}  />
          <Route path="/register" element={ <Register /> }/>
          <Route path="/sample" element={ <SampleLogin /> } />
          <Route path='/otp-page' element={ <Otp /> } />
          <Route path='/signup' element={ <SignUpForm /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
