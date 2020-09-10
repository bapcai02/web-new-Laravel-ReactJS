import React from 'react';
import Hearder from './Components/Hearde'
import Footer from './Components/Footer'
import {BrowserRouter as Router} from "react-router-dom";
import RouteUrl from './Route/RouteUrl'

function App() {
  return (
    <Router>
    <div className="App">
      
        <Hearder/>
          <RouteUrl/>
        <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
