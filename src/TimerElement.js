import { Component, useState } from 'react';
import TimerForm from './TimerForm';
import InnerTimer from './InnerTimer';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TimerButtons from './TimerButtons';
import './TimerElement.css';


class TimerElement extends Component {

  constructor() {
    super();

    this.f = setInterval(_ => _, 1000);

    this.state = {
      seconds: 0,
      isTimerRunning: false,
      confirmed: false,
      pricePerinterval: 10.0,
      secondsPerPayment: 3600,
    }

    this.progressbarStyle = {
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
  }

  // const[seconds, setSeconds] = useState(0);
  // const[isTimerRunning, setIsTimerRunning] = useState(false);
  // const[confirmed, setConfirmed] = useState(false);
  // const[pricePerinterval, setPricePerinterval] = useState(10.0);
  // const[secondsPerPayment, setSecondsPerPayment] = useState(3600);
  // const[f, setF] = useState(setInterval(_ => _, 1000));

  getPercentage() {
    const percentage = (this.state.seconds % this.state.secondsPerPayment) / this.state.secondsPerPayment;
    return percentage;
  }

  onTimerUpdate() {
    // update timer by 1
    this.setState({ seconds: this.state.seconds + 1 });
  }

  onTimerToggle = () => {
    if (this.state.isTimerRunning) {
      this.onTimerPause();
    } else {
      this.onTimerPlay();
    }
  }

  onTimerPlay() {
    // set the timers intervals
    if (!this.state.isTimerRunning) {
      this.setState({ isTimerRunning: true });
      this.f = setInterval(this.onTimerUpdate.bind(this), 1000);
    }

  }

  onTimerPause() {
    // clear the timer from ticking
    if (this.state.isTimerRunning) {
      clearInterval(this.f);
      this.setState({ isTimerRunning: false });
    }
  }

  onTimerReset() {
    this.onTimerPause();
    // resets the timer 
    this.setState({ seconds: 0 })
  }

  render() {
    return (
      <div className='timer'>
        <CircularProgressbarWithChildren
          value={this.getPercentage()}
          maxValue={1}
          styles={this.progressbarStyle}>
          {
            this.state.confirmed
            ?
              <>
                <InnerTimer
                  pricePerinterval={this.state.pricePerinterval}
                  secondsPerPayment={this.state.secondsPerPayment}
                  seconds={this.state.seconds} />

                <TimerButtons
                  onTimerToggle={this.onTimerToggle.bind(this)}
                  isTimerRunning={this.state.isTimerRunning}
                  hasTimerStarted={this.state.seconds !== 0} 
                  onTimerReset={this.onTimerReset.bind(this)}/>
              </>
              :
              <TimerForm
                setConfirmed={value => this.setState({ confirmed: value })}
                setPricePerinterval={value => this.setState({ pricePerinterval: value })}
                setSecondsPerPayment={value => this.setState({ secondsPerPayment: value })} />
          }

        </CircularProgressbarWithChildren>
      </div>
    );
  }
}

export default TimerElement;