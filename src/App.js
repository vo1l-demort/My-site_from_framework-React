import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <h1>Лабораторна робота №7 - Bootstrap сайт</h1>
        <p>Тут буде контент сторінки</p>
      </div>
    </div>
  );
}

export default App;