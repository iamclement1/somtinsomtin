import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login />}  />
          <Route path="/register" element={ <Register /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
