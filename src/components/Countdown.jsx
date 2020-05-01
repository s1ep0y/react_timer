import React from 'react';
import { CountdownParams } from './CountdownParams'
import { Btns } from './btns';
import { Progress } from 'antd'


export class Countdown extends React.Component {
    constructor(props){
        super(props);
        this.state={
            minutes: 0,
            seconds: 0,
            timerState: false,
            time: 0,
            timeNow: 0,
            
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    clearTime = () => {
        const {timerState} = this.state;
        if (timerState === true) {
            clearInterval(this.timerId)
            this.setState({timerState: false});
            return;
        }
        this.setState({time: 0, timeNow: 0, });
    };

    timeSetter(){
        const { seconds, minutes, timeNow } = this.state;
        const time = seconds + minutes*60;
        this.setState({
            time: time*1000, timeNow: timeNow === 0 ? time*1000 : timeNow,
        })
    }

    startOrStop = () => {
        const {timerState} = this.state;
        this.timeSetter()
        if (timerState === false) {
            this.timerId = setInterval(() => {
                const { timeNow } = this.state;
                if(timeNow - 10 === 0) clearInterval(this.timerId);
                this.setState({
                    timeNow: timeNow - 10
                })
            }, 10);
        } else {
            clearInterval(this.timerId)
        }

        this.setState({
            timerState: !timerState
        });
    }
    
    sliderHandler = (value) => {
        const mins = Math.floor(value/60);
        const secs = value%60;
        if(mins >= 60) return;
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
    
    timerOutput = () => {
        const { timeNow } = this.state;
        console.log(timeNow)
        const miliSeconds = timeNow % 1000;
        const seconds = Math.floor(timeNow / 1000);
        const minutes = Math.floor(timeNow / 60000);
        return `${minutes} : ${seconds} : ${miliSeconds}`;
    };

    percentCalc = () => {
        const { time , timeNow } = this.state;
        return Math.floor( 100/time*timeNow )
    }

    render() {
        const { minutes, seconds, timerState } = this.state;
        const time = Number(minutes * 60 + seconds)
        console.log('reset')
        return(
            <div className="countdown">
                <CountdownParams
                    disabled={timerState}
                    time={time}
                    secondsHandler={this.secondsHandler}
                    minutesHandler={this.minutesHandler}
                    sliderHandler={this.sliderHandler}
                />
                <Btns disabled={!(time > 0)} startOrStop={this.startOrStop} clearTime={this.clearTime}/>
                {  <div>
                                <p>{this.timerOutput()}</p>
                            </div>
                        }
                <Progress type="circle" percent={this.percentCalc()} />
            </div>
        );

    }
};
// 