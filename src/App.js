import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Homepage />
    </div>
  </Router>
);

export default App;
