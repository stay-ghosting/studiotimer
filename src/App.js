import './App.css';
import Timer from './Timer'
import TimerForm from './TimerForm'
import React, {useState} from 'react';

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [pricePerinterval, setPricePerinterval] = useState(false);
  const [secondsPerPayment, setSecondsPerPayment] = useState(false);


  if (confirmed) {
    return (
      <div>
        <h1>STUDIO TIMER</h1>
        <Timer pricePerinterval={pricePerinterval} secondsPerPayment={secondsPerPayment}/>
      </div>
    );
  } else {
    return (
      <div>
        <h1>STUDIO TIMER</h1>
        <TimerForm setConfirmed={setConfirmed} setPricePerinterval={setPricePerinterval} setSecondsPerPayment={setSecondsPerPayment}/>
      </div>
    );
  }
}

export default App;