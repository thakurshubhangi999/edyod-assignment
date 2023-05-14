import React from 'react';
import './App.css';
import LeftAside from './components/LeftAside';
import RightAside from './components/RightAside';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <LeftAside />
        <RightAside />
      </div>
    </div>
  );
}

export default App;
