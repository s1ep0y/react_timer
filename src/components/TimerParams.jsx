import React from 'react';
import { Input, Slider } from 'antd';

export const TimerParams = ({ sliderHandler, time = null, minutesHandler, secondsHandler }) => (
    <div className="TimerParams">
        <Slider defaultValue={30}
        // disabled={disabled}
        step={15}
        min={0}
        max={3600}
        value={time}
        onChange={sliderHandler}
        />
        <div className="group">
            <label>
                Minutes
                <Input type="number"
                name="mins"
                value={time ? Math.floor(time/60) : null}
                placeholder="munutes"
                onChange={minutesHandler}
                />
            </label>
            <label>
                seconds
                <Input type="number"
                name="secs"
                value={time ? time%60 : null}
                placeholder="seconds"
                onChange={secondsHandler}
                />
            </label>
        </div>
    </div>
)