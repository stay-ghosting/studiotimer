import { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'
import {secToHMS} from './tools'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.secondsPerPayment = props.secondsPerPayment;
    this.pricePerInterval = props.pricePerinterval;

    this.state = {
      seconds: 0,
      isTimerRunning: true,
    };

  }

  getAccumulativePrice() {
    const amountOfIntervals = Math.floor(this.state.seconds / this.secondsPerPayment);
    const accumulativePrice = amountOfIntervals * this.pricePerInterval
    return accumulativePrice
  }

  getTimeFormated = (timeSeconds, useColons) => {

    const { h, m, s } = secToHMS(timeSeconds)

    let formatedString = "";
    // convert to string and 0 pad
    // different versions of formating
    if (useColons === true) {
      const [stringHours, stringMinutes, stringSeconds] = [h, m, s].map(value => value.toString().padStart(2, '0'))
      formatedString = `${stringHours}:${stringMinutes}:${stringSeconds}`
    } else {
      if (h !== 0) {
        formatedString += `${h}h`
      } if (m !== 0) {
        formatedString += `${m}m`
      } if (s !== 0) {
        formatedString += `${s}s`
      }
    }
    return formatedString
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
          <p>{this.getTimeFormated(this.state.seconds, true)}</p>
          <p>{`£${this.getAccumulativePrice()} @ £${this.pricePerInterval}/${this.getTimeFormated(this.secondsPerPayment, false)}`}</p>
          <button id='btnPause' onClick={this.onTimerPause} disabled={!this.state.isTimerRunning}>pause</button>
          <button id='btnPlay' onClick={this.onTimerPlay} disabled={this.state.isTimerRunning}>play</button>
          <button id='btnReset' onClick={this.onTimerReset}>reset</button>

        </CircularProgressbarWithChildren>
      </div>
    )
  }
}

export default Timer