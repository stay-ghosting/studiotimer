import { useState } from 'react';
import TimerForm from './TimerForm';
import InnerTimer from './InnerTimer';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './TimerElement.css'
import TimerButtons from './TimerButtons';


function TimerElement() {

  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [pricePerinterval, setPricePerinterval] = useState(10.0);
  const [secondsPerPayment, setSecondsPerPayment] = useState(3600);
  const [f, setF] = useState(setInterval(_=>_, 1000));

  function getPercentage() {
    const percentage = (seconds % secondsPerPayment) / secondsPerPayment
    return percentage
  }

  function onTimerUpdate() {
    // update timer by 1
    setSeconds(seconds + 1);
  }
  function onTimerPlay() {
    // set the timers intervals
    setF(setInterval(onTimerUpdate, 1000));
    // f = setInterval(onTimerUpdate, 1000)
    setIsTimerRunning(true);
  }

  function onTimerPause() {
    // clear the timer from ticking
    clearInterval(f);
    setIsTimerRunning(false);
  }
  function onTimerReset() {
    onTimerPause();
    // resets the timer 
    setSeconds(0);
  }

  const progressbarStyle = {
    path: {
      stroke: 'rgba(62, 152, 199, 255)',
      strokeLinecap: 'butt',
      transition: 'stroke-dashoffset 0.1s ease 0s',
    },
    trail: {
      stroke: '#333',
      strokeLinecap: 'butt',
    },
  }

  return (
    <div className='timer'>
      <CircularProgressbarWithChildren
        value={getPercentage()}
        maxValue={1}
        styles={progressbarStyle}>
        {
          confirmed
            ?
            <>
              <InnerTimer
                pricePerinterval={pricePerinterval}
                secondsPerPayment={secondsPerPayment}
                seconds={seconds} />

              <TimerButtons
                onTimerPause={onTimerPause}
                onTimerPlay={onTimerPlay}
                onTimerReset={onTimerReset}
                isTimerRunning={isTimerRunning} 
                hasTimerStarted={seconds != 0} />
            </>
            :
            <TimerForm
              setConfirmed={value => setConfirmed(value)}
              setPricePerinterval={value => setPricePerinterval(value)}
              setSecondsPerPayment={value => setSecondsPerPayment(value)} />
        }

      </CircularProgressbarWithChildren>
    </div>
  );
}

export default TimerElement;