import React from 'react';
import { Input, Slider } from 'antd';
import PropTypes from 'prop-types';

const CountdownParams = ({
  sliderHandler,
  time,
  minutesHandler,
  secondsHandler,
  disabled,
}) => (
  <div className="countdown__countdownParams">
    <span>max: 720 minutes</span>
    <Slider
      defaultValue={30}
      step={15}
      min={0}
      max={3600}
      value={time || null}
      onChange={sliderHandler}
      disabled={disabled}
    />
    <div className="countdown__inputs">
      <Input
        name="munutes"
        type="number"
        addonBefore="Minutes"
        value={time ? Math.floor(time / 60) : null}
        placeholder="munutes"
        onChange={minutesHandler}
        disabled={disabled}
      />
      <Input
        type="number"
        name="seconds"
        addonBefore="Seconds"
        value={time ? time % 60 : null}
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
  time: 0,
  disabled: false,
};

CountdownParams.propTypes = {
  sliderHandler: PropTypes.func,
  minutesHandler: PropTypes.func,
  secondsHandler: PropTypes.func,
  time: PropTypes.number,
  disabled: PropTypes.bool,
};

export default CountdownParams;
