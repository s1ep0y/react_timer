import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Btns = (props) => {
  const { startOrStop, clearTime, disabled } = props;
  return (
    <div>
      <Button type="primary" disabled={disabled} onClick={startOrStop}>
        Start/Stop
      </Button>
      <Button type="dashed" disabled={disabled} onClick={clearTime}>
        Clear
      </Button>
    </div>
  );
};
Btns.defaultProps = {
  startOrStop: () => {},
  clearTime: () => {},
  disabled: false,
};

Btns.propTypes = {
  startOrStop: PropTypes.func,
  clearTime: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Btns;
