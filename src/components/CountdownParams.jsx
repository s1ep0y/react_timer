import React from 'react';
import { Input, Slider } from 'antd';
import PropTypes from 'prop-types';

const CountdownParams = ({
  sliderHandler,
  minutes,
  seconds,
  slider,
  minutesHandler,
  secondsHandler,
  disabled,
}) => (
  <div className="TimerParams">
    <span>max: 720 minutes</span>
    <Slider
      defaultValue={30}
      step={15}
      min={0}
      max={3600}
      value={slider}
      onChange={sliderHandler}
      disabled={disabled}
    />
    <div>
      <label>
        <Input
          name="munutes"
          value={minutes || null}
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
          value={seconds || null}
          placeholder="seconds"
          onChange={secondsHandler}
          disabled={disabled}
        />
      </label>
    </div>
  </div>
);

// sliderHandler, time = null, minutesHandler, secondsHandler, disabled
CountdownParams.defaultProps = {
  sliderHandler: () => {},
  minutesHandler: () => {},
  secondsHandler: () => {},
  minutes: 0,
  seconds: 0,
  slider: 0,
  disabled: false,
};

CountdownParams.propTypes = {
  sliderHandler: PropTypes.func,
  minutesHandler: PropTypes.func,
  secondsHandler: PropTypes.func,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  slider: PropTypes.number,
  disabled: PropTypes.bool,
};

export default CountdownParams;
