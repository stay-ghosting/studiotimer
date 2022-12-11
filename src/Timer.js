import { useState } from 'react';
import './Timer.css'
import TimerForm from './TimerForm';
import InnerTimer from './InnerTimer';

function Timer() {

  const [seconds, setSeconds] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [pricePerinterval, setPricePerinterval] = useState(10.0)
  const [secondsPerPayment, setSecondsPerPayment] = useState(3600)

  // this.state = {
  //   seconds: 0,
  //   isTimerRunning: false,
  //   confirmed: false,
  //   pricePerinterval: 10.0,
  //   secondsPerPayment: 3600,
  // };

  return (

    confirmed
      ?
      <InnerTimer
        pricePerinterval={pricePerinterval}
        secondsPerPayment={secondsPerPayment} />
      :
      <TimerForm
        setConfirmed={value => setConfirmed(value)}
        setPricePerinterval={value => setPricePerinterval(value)}
        setSecondsPerPayment={value => setSecondsPerPayment(value)} />

  )
}

export default Timer