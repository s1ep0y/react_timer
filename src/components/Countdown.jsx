import React from 'react';
import { TimerParams } from './TimerParams'
import { Btns } from './btns';


export class Countdown extends React.Component {
    constructor(props){
        super(props);
        this.state={
            minutes: 0,
            seconds: 0,
            timerState: false,
        }
    }

    startOrStop = () => {
        const { timerState } = this.state;
        this.setState({ timerState: !timerState });
    }

    clearTime = () => {
        const { timerState } = this.state;
        if(timerState) {
            this.setState({ timerState: false });
            return;
        }
        this.setState({
            minutes: 0,
            seconds: 0,
        });
    };

    
    sliderHandler = (value) => {
        const mins = Math.floor(value/60);
        const secs = value%60;
        this.setState({ minutes: mins, seconds: secs });
    }

    minutesHandler = ({ target: { value } })  => {
        const val = Number(value)
        const { seconds } = this.state;
        if (seconds > 0 && val === 720 || val > 720) {
            this.setState({ seconds: 0, minutes: 720 });
            return;
        };
        this.setState({ minutes: val });
    }

    secondsHandler = ({ target: { value } })  => {
        const val = Number(value)
        const { minutes } = this.state;
        if (minutes === 720) {
            this.setState({ seconds: val, minutes: 719 });
            return;
        };
        let returnValue = val > 60 ? 60: val === 0 ? null : val;
        this.setState({ seconds: returnValue !== 0 ? returnValue : null })
    }    

    render() {
        const { minutes, seconds, timerState } = this.state;
        const time = Number(minutes * 60 + seconds)
        console.log(time > 0)
        return(
            <div className="countdown">
                <TimerParams
                    disabled={timerState}
                    time={time}
                    secondsHandler={this.secondsHandler}
                    minutesHandler={this.minutesHandler}
                    sliderHandler={this.sliderHandler}
                />
                <Btns disabled={!(time > 0)} startOrStop={this.startOrStop} clearTime={this.clearTime}/>
                <span>place for timer time</span>
            </div>
        );

    }
};
// 