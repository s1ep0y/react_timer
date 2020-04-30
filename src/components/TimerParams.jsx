import React from 'react';
import { Input, Slider } from 'antd';

export const TimerParams = ({ sliderHandler, time = null, minutesHandler, secondsHandler, disabled }) => (
    <div className="TimerParams">
        <span>max: 720 minutes</span>
        <Slider
        defaultValue={30}
        step={15}
        min={0}
        max={3600}
        value={time}
        onChange={sliderHandler}
        disabled={disabled}
        />
        <div>
            <label>
                <Input
                name="munutes"
                value={time ? Math.floor(time/60) : null}
                placeholder="munutes"
                onChange={minutesHandler}
                disabled={disabled}
                />
            </label>
            <label>
                seconds
                <Input

                type="number"
                name="seconds"
                value={time && (time%60) !== 0 ? time%60 : null}
                placeholder="seconds"
                onChange={secondsHandler}
                disabled={disabled}
                />
            </label>
        </div>
    </div>
)