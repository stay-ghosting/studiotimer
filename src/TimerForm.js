import React, { Component } from "react"
import {HMSTosec, getTimeFormated} from './tools'
import './TimerForm.css'


class TimerForm extends Component {
  constructor(props) {
    super();

    this.setConfirmed = props.setConfirmed;
    this.setPricePerinterval = props.setPricePerinterval
    this.setSecondsPerPayment = props.setSecondsPerPayment

    this.state = {
      time: {
        h: 1,
        m: 0,
        s: 0,
      },
      pricePerInterval: 10
    }
  }

  validateInput() {

    const HMSFloor = {}
    Object.entries(this.state.time).map(([key, value]) => HMSFloor[key] = Math.floor(value))
    // if no values have been entered stop method
    if ((HMSFloor.h <= 0 && HMSFloor.m <= 0 && HMSFloor.s <= 0) || this.state.pricePerInterval <= 0) {
      alert("format error")
      return
    }

    const timeSeconds = HMSTosec(HMSFloor)

    this.props.setSecondsPerPayment(timeSeconds)
    this.props.setPricePerinterval(this.state.pricePerInterval)
    this.props.setConfirmed(true)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='time-form'>
        <p>{`£${this.state.pricePerInterval}/${getTimeFormated(HMSTosec(this.state.time), false)}`}</p>
        <div className='time-fields'>
          <p>£ </p>
          <input className="input-price" type={'number'} min={0} defaultValue={this.state.pricePerInterval} onChange={event => this.setState({pricePerInterval: event.target.value})}></input>
          <p> every </p>
          <input type='time'
            onChange={ value => {
              console.log(value.target.value)
              const [h, m] = value.target.value.split(':')
              this.setState({time:
                {h:h,
                m:m,
                s:0,}}
              )
            }}
            defaultValue={`${this.state.time.h.toString().padStart(2, "0")}:${this.state.time.m.toString().padStart(2, "0")}:${this.state.time.s.toString().padStart(2, "0")}`}></input>
          
          <hr />
        </div>
        <button className='open-timer' onClick={() => this.validateInput()}>Open Timer</button>
      </div>
    )
  }
}

export default TimerForm


