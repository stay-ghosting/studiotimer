import React, { Component } from "react";
import './TimerButtons.css'

const TimerButtons = (props) => {

    const onTimerToggle = props.onTimerToggle;
    const onTimerReset = props.onTimerReset;

    const isTimerRunning = props.isTimerRunning;
    const hasTimerStarted = props.hasTimerStarted;

    console.log(props);

    return (
        <div className='buttons'>
            <button alt='toggle Timer' onClick={onTimerToggle}><img className='button-icon' src={isTimerRunning ? process.env.PUBLIC_URL + '/pause.png' : process.env.PUBLIC_URL + '/play.png'} /></button>
            <button als='stop timer' onClick={onTimerReset} disabled={!hasTimerStarted}><img className='button-icon' src={process.env.PUBLIC_URL + '/stop.png'} /></button>
        </div>
    )

}

export default TimerButtons;