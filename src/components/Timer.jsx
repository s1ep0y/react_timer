import React from 'react';
import { TimerParams } from './CountdownParams'
import { Btns } from './btns';


export class Timer extends React.Component {
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


    render() {
        const { minutes, seconds, timerState } = this.state;
        const time = Number(minutes * 60 + seconds)
        console.log(time > 0)
        return(
            <div className="countdown">
                <Btns disabled={!(time > 0)} startOrStop={this.startOrStop} clearTime={this.clearTime}/>
                <span>place for timer time</span>
            </div>
        );

    }
};
// 