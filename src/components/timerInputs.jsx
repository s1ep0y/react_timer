import React from 'react';
import { Input, Slider } from 'antd';

export const TimerSlider = ({ disabled }) => (
    <Slider defaultValue={30}
    disabled={disabled}
    step={15}
    min={0}
    max={3600}
    // onChange={props.sliderHolder}
    />
)

export const TimerInputs = ({ disabled }) => (
    <div className="group">
    <label>
        Minutes
        <Input type="number"
        name="mins"
        disabled={disabled}
        placeholder="munutes"
        // onChange={this.minsHolder}
        />
    </label>
    <label>
        seconds
        <Input type="number"
        name="secs"
        disabled={disabled}
        placeholder="seconds"
        // onChange={this.secsHolder}
        />
    </label>
</div>
)