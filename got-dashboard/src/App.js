import React, { useEffect, useState } from 'react';
import './App.css';

//Components
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Data
import { getAllBooks } from './services'

const App = () => {

  useEffect(() => {
    getAllBooks().then((result) => {
      console.log(result)
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
      
    </div>
  );
}

export default App;
