import React, { useEffect, useState } from 'react';
import './App.css';

//Components
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Data
import { getAllBooks } from './services'

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((result) => {
      setBooks(result)
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Dashboard data={books}/>
      <Footer />
    </div>
  );
}

export default App;
