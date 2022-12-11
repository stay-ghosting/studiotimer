import React, { Component } from "react";
import { secToHMS, getTimeFormated } from './tools';

class InnerTimer extends Component {
    constructor(props) {
        super(props);

        this.pricePerInterval = parseInt(props.pricePerinterval);
        this.secondsPerPayment = parseFloat(props.secondsPerPayment);
        this.seconds = parseInt(props.seconds);
    }

    getAccumulativePrice() {
        const amountOfIntervals = Math.floor(this.seconds / this.secondsPerPayment);
        const accumulativePrice = (amountOfIntervals * this.pricePerInterval) + this.pricePerInterval;
        return accumulativePrice;
    }
    
    render() {
        return (
            <div className='inner-timer'>
                <p>{getTimeFormated(this.seconds, true)}</p>
                <p>{`£${this.getAccumulativePrice()} @ £${this.pricePerInterval}/${getTimeFormated(this.secondsPerPayment, false)}`}</p>
            </div>
        )
    }
}

export default InnerTimer;