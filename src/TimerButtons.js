import React, { Component } from "react";

class TimerButtons extends Component {
    constructor(props) {
        super(props);

        this.onTimerPause = props.onTimerPause;
        this.onTimerPlay = props.onTimerPlay;
        this.onTimerReset = props.onTimerReset;
        this.isTimerRunning = props.isTimerRunning;
        this.hasTimerStarted = props.hasTimerStarted;
    }

    onTimerToggle = () => {
        if (this.isTimerRunning) {
            this.onTimerPause();
        } else {
            this.onTimerPlay();
        }
    }

    render() {

        return (
            <div className='buttons'>
                <button alt='toggle Timer' onClick={this.onTimerToggle}><img className='button-icon' src={this.isTimerRunning ? process.env.PUBLIC_URL + '/pause.png' : process.env.PUBLIC_URL + '/play.png'} /></button>
                <button als='stop timer' onClick={this.onTimerReset} disabled={this.hasTimerStarted}><img className='button-icon' src={process.env.PUBLIC_URL + '/stop.png'} /></button>
            </div>
        )
    }
}

export default TimerButtons;