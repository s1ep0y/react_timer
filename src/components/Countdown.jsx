import React, { useState } from 'react';
import { TimerSlider, TimerInputs } from './timerInputs'


export class Countdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: false,
            timerTime: null,
        }
    }

    // sliderHolder = (value) => {
    //     // console.log(value);
    //     const mins = Math.floor(value/60)
    //     const secs = value/60 > 0 ? value%60 : 0
    //     this.setState({
    //         timerTime: {
    //             secs, mins
    //         },
    //     })
    // }

    // minsHolder = ({target: {value}}) => {
        
    //     this.setState({ timerTime: { mins: value } });
    //     console.log(this.state.timerTime)
    // }

    // secsHolder = ({target: {value}}) => {
        
    //     this.setState({ timerTime: { secs: value } });
    // }



    render() {
        const { disabled } = this.state;
        return(
            <div className="countdown">
                <span>Seconds</span>
                <TimerSlider disabled={disabled}/>
                <TimerInputs disabled={disabled}/>
            </div>
        )

    }
}
