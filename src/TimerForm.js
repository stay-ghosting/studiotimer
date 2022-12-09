import React, { Component } from "react"
import {HMSTosec} from './tools'
import './TimerForm.css'


class TimerForm extends Component {
  constructor(props) {
    super();

    this.setConfirmed = props.setConfirmed;
    this.setPricePerinterval = props.setPricePerinterval
    this.setSecondsPerPayment = props.setSecondsPerPayment

    this.time = {
      h: 1,
      m: 0,
      s: 0,
    }
    this.pricePerInterval = 10
  }

  validateInput() {

    const HMSFloor = {}
    Object.entries(this.time).map(([key, value]) => HMSFloor[key] = Math.floor(value))
    // if no values have been entered stop method
    if ((HMSFloor.h <= 0 && HMSFloor.m <= 0 && HMSFloor.s <= 0) || this.pricePerInterval <= 0) {
      alert("format error")
      return
    }

    const timeSeconds = HMSTosec(HMSFloor)

    this.props.setSecondsPerPayment(timeSeconds)
    this.props.setPricePerinterval(this.pricePerInterval)
    this.props.setConfirmed(true)
  }

  render() {
    return (
      <div className='time-form'>
        <div className='time-fields'>
          <div className='spread'>
            <p>h:   </p>
            <input type='number' min={0} placeholder={this.time.h} onChange={event => this.time.h = event.target.value}></input>
          </div>
          <div className='spread'>
            <p>m:   </p>
            <input type='number' min={0} placeholder={this.time.m} onChange={event => this.time.m = event.target.value}></input>
          </div>
          <div className='spread'>
            <p>s:   </p>
            <input type='number' min={0} placeholder={this.time.s} onChange={event => this.time.s = event.target.value}></input>
          </div>
        <br />
        <hr />
        </div>
        <br />
        <div>
          <p>price:   </p>
          <br />  
          <input type='number' min={0} placeholder={this.pricePerInterval} onChange={event => this.pricePerInterval = event.target.value}></input>
          <br />
          <br />
          <br />

          <hr />
        </div>
        
        <br />
        <br />
        <button className='open-timer' onClick={() => this.validateInput()}>Open Timer</button>
      </div>
    )
  }
}

export default TimerForm