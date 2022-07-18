import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className='container'>
        <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
