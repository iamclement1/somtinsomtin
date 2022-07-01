import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import Routing from './Components/router/router';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';


function App( className="font-roboto") {
  
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <Router>
      { !loading ? (
        <>
        <Loader />
        </>
      ) : (
      <div className="App">
      <ToastContainer />
        <Routing />
      </div>
      )}
    </Router>
  );
}

export default App;
