import React, { Component } from "react";
import { secToHMS, getTimeFormated } from './tools';
import './InnerTimer.css'

function InnerTimer(props) {

    const pricePerInterval = parseInt(props.pricePerinterval);
    const secondsPerPayment = parseInt(props.secondsPerPayment);
    const seconds = parseInt(props.seconds);
    // console.log(this.seconds);

    function getAccumulativePrice() {
        const amountOfIntervals = Math.floor(seconds / secondsPerPayment);
        const accumulativePrice = (amountOfIntervals * pricePerInterval) + pricePerInterval;
        return accumulativePrice;
    }

    return (
        <div className='inner-timer'>
            <p>{getTimeFormated(seconds, true)}</p>
            <p>{`£${getAccumulativePrice()} @ £${pricePerInterval}/${getTimeFormated(secondsPerPayment, false)}`}</p>
        </div>
    )
}

export default InnerTimer;