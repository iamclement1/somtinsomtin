import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import Routing from './Components/router/router';


function App( className="font-roboto") {
  
  
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routing />
      </div>
      
    </Router>
  );
}

export default App;
