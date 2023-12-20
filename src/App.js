import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Diseases from './components/Diseases';
import Device from './components/Device';
import ContactForm from './components/Contact';
import GoUpButton from './components/GoUpButton';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="App">
      <GoUpButton />
      <Navigation />
      <Homepage />
      <About />
      <Diseases />
      <Device />
      <ContactForm />
      <Footer />
    </div>
  </Router>
);

export default App;
