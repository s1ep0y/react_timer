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
  <div className="countdownTimer">
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
      <span>minutes</span>
      <Input
        name="munutes"
        value={minutes || null}
        placeholder="munutes"
        onChange={minutesHandler}
        disabled={disabled}
      />
      <span>seconds</span>
      <Input
        type="number"
        name="seconds"
        value={seconds || null}
        placeholder="seconds"
        onChange={secondsHandler}
        disabled={disabled}
      />
    </div>
  </div>
);

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
