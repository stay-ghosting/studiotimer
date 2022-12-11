import './App.css';
import React, { useState } from 'react';
import TimerElement from './TimerElement';

function App() {
  
  // const [confirmed, setConfirmed] = useState(false);
  // const [pricePerinterval, setPricePerinterval] = useState(false);
  // const [secondsPerPayment, setSecondsPerPayment] = useState(false);

  return (
    <div>
      <h1>SESSION TIMER</h1>
      <TimerElement />
    </div>
  );
}

export default App;