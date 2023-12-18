import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Homepage />
      <About />
    </div>
  </Router>
);

export default App;
