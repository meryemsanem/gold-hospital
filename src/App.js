import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
    </div>
  </Router>
);

export default App;
