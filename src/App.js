import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react'
import Nasa from './Pages/Nasa';
import Home from './Pages/Home';
import Api from './Pages/Api';
import './style/main.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Switch>
          <Route path='/Nasa'>
            <Nasa />
          </Route>
          <Route path='/Api'>
            <Api />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
