import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Diseases from './components/Diseases';
import Device from './components/Device';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Homepage />
      <About />
      <Diseases />
      <Device />
    </div>
  </Router>
);

export default App;
