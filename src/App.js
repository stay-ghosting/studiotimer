import './App.css';
import Timer from './Timer'
import React, { useState } from 'react';

function App() {
  
  // const [confirmed, setConfirmed] = useState(false);
  // const [pricePerinterval, setPricePerinterval] = useState(false);
  // const [secondsPerPayment, setSecondsPerPayment] = useState(false);

  return (
    <div>
      <h1>SESSION TIMER</h1>
      <Timer/>
    </div>
  );
}

export default App;