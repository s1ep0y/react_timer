import React, { useState } from 'react';
import { Input, Slider } from 'antd';

export class Countdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: false,
        }
    }
    render() {
        const { disabled } = this.state;
        return(
            <div className="countdown">
                <Slider defaultValue={30}
                disabled={disabled}
                step={15}
                min={0}
                max={3600}
                />
            <div className="group">
                <label>
                    <Input type="number"
                    max={43200}
                    placeholder="munutes"
                    />
                </label>
                <label>
                    <Input type="number"
                    max={720}
                    placeholder="seconds"
                    />
                </label>
            </div>
            </div>
        )

    }
}
