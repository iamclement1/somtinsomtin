import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Pages/Login';
import Otp from './Pages/OTP/Otp';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignUpForm  from './Components/RegisterForm/SignUpForm';
import Dashboard from './Pages/Dashboard';
import Marketplace from './Pages/Marketplace/Marketplace';
import Profile from './Pages/User/Profile';


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
          <Route path="/marketplace" element={ <Marketplace /> } />
          <Route path="/user-profile" element= { <Profile /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
