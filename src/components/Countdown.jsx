import React, { useState } from 'react';
import { TimerParams } from './TimerParams'
import { Btns } from './btns';


export class Countdown extends React.Component {

    constructor(props){
        super(props);
        this.state={
            time: 0,
            maxTime: 43200,
        }
    }

    startOrStop = () => {
        const { time } = this.state;
        console.log('start or stop');
        console.log(time)
    };

    clearTime = () => {
        console.log('clear');
    };

    sliderHandler = (value) => this.setState({ time: value });

    secondsHandler = ({ target: { value } })  => {
        const { maxTime, time } = this.state;
        const newTime = (time+value) > maxTime ? maxTime : (time+value);
        this.setState({ time: newTime });
    }

    minutesHandler = ({ target: { value } })  => {
        const { maxTime, time } = this.state;
        const newTime = (time+value*60) > maxTime ? maxTime : (time+value*60);
        this.setState ({ time: newTime });
    }
    

    render() {
        const { time } = this.state;
        return(
            <div className="countdown">
                <TimerParams
                    time={time}
                    secondsHandler={this.secondsHandler}
                    minutesHandler={this.minutesHandler}
                    sliderHandler={this.sliderHandler}
                />
                <Btns startOrStop={this.startOrStop} clearTime={this.clearTime}/>
            </div>
        )

    }
}
