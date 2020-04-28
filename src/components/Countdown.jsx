import React, { useState } from 'react';
import { Input, Slider } from 'antd';


export class Countdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: false,
            timerTime: {
                secs: 0,
                mins: 0,
            },
        }
    }

    sliderHolder = (value) => {
        // console.log(value);
        const mins = Math.floor(value/60)
        const secs = value/60 > 0 ? value%60 : 0
        this.setState({
            timerTime: {
                secs, mins
            },
        })
    }

    minsHolder = ({target: {value}}) => {
        
        this.setState({ timerTime: { mins: value } });
        console.log(this.state.timerTime)
    }

    secsHolder = ({target: {value}}) => {
        
        this.setState({ timerTime: { secs: value } });
    }



    render() {
        const { disabled, timerTime } = this.state;
        return(
            <div className="countdown">
                <Slider defaultValue={30}
                disabled={disabled}
                step={15}
                min={0}
                max={3600}
                value={timerTime ? timerTime.secs+ timerTime.mins*60 : null}
                onChange={this.sliderHolder}
                />
                <div className="group">
                    <label>
                        Minutes
                        <Input type="number"
                        name="mins"
                        disabled={disabled}
                        placeholder="munutes"
                        onChange={this.minsHolder}
                        />
                    </label>
                    <label>
                        seconds
                        <Input type="number"
                        name="secs"
                        disabled={disabled}
                        placeholder="seconds"
                        onChange={this.secsHolder}
                        />
                    </label>
                </div>
            </div>
        )

    }
}
