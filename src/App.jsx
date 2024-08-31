import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Header />
      <Overview />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
