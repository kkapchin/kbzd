import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      APP component
      <Rating />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

function Star() {
  return (
    <div>star</div>
  )
}

export default App;
