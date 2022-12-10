import { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'
import {secToHMS, getTimeFormated} from './tools'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.secondsPerPayment = props.secondsPerPayment;
    this.pricePerInterval = props.pricePerinterval;

    this.state = {
      seconds: 0,
      isTimerRunning: false,
    };

  }

  getAccumulativePrice() {
    const amountOfIntervals = Math.floor(this.state.seconds / this.secondsPerPayment);
    const accumulativePrice = (amountOfIntervals * this.pricePerInterval) + this.pricePerInterval
    return accumulativePrice
  }

  getPercentage() {
    const percentage = (this.state.seconds % this.secondsPerPayment) / this.secondsPerPayment
    return percentage
  }

  onTimerUpdate = () => {
    // update timer by 1
    this.setState({ seconds: this.state.seconds + 1 });
  }
  onTimerPlay = () => {
    // set the timers intervals
    this.f = setInterval(this.onTimerUpdate, 1000);
    this.setState({ isTimerRunning: true })
  }
  onTimerPause = () => {
    // clear the timer from ticking
    clearInterval(this.f);
    this.setState({ isTimerRunning: false })
  }
  onTimerReset = () => {
    this.onTimerPause()
    // resets the timer 
    this.setState({ seconds: 0 })
  }

  onTimerToggle = () => {
    if (this.state.isTimerRunning) {
      this.onTimerPause()
    } else {
      this.onTimerPlay()
    }
  }

  render() {
    return (
      <div className='timer'>
        <CircularProgressbarWithChildren value={this.getPercentage()} maxValue={1}
          styles={{
            path: {
              stroke: 'rgba(62, 152, 199, 255)',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.1s ease 0s',
            },
            trail: {
              stroke: '#333',
              strokeLinecap: 'butt',
            },
          }}>
          <p>{getTimeFormated(this.state.seconds, true)}</p>
          <p>{`£${this.getAccumulativePrice()} @ £${this.pricePerInterval}/${getTimeFormated(this.secondsPerPayment, false)}`}</p>
          <div className='buttons'>
            <button alt='toggle Timer' onClick={this.onTimerToggle}><img className='button-icon' src={this.state.isTimerRunning ? process.env.PUBLIC_URL + '/pause.png' : process.env.PUBLIC_URL + '/play.png'}/></button>
            <button als='stop timer' onClick={this.onTimerReset} disabled={this.state.seconds===0}><img className='button-icon' src={process.env.PUBLIC_URL + '/stop.png'} /></button>
          </div>

        </CircularProgressbarWithChildren>
      </div>
    )
  }
}

export default Timer