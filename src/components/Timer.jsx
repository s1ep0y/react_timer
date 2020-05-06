import React from 'react';
import Btns from './Btns';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timerState: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  clearTime = () => {
    const { timerState } = this.state;
    if (timerState === true) {
      clearInterval(this.timerId);
      this.setState({ timerState: false });
      return;
    }
    this.setState({ time: 0 });
  };

  startOrStop = () => {
    const { timerState } = this.state;

    if (timerState === false) {
      this.timerId = setInterval(() => {
        const { time } = this.state;
        this.setState({
          time: time + 10,
        });
      }, 10);
    } else {
      clearInterval(this.timerId);
    }

    this.setState({
      timerState: !timerState,
    });
  };

  timerOutput = () => {
    const { time } = this.state;
    const miliSeconds = time % 1000;
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(time / 60000);
    return `${minutes} : ${seconds} : ${miliSeconds}`;
  };

  render() {
    const { time } = this.state;
    return (
      <div className="timer">
        <Btns disabled={false} startOrStop={this.startOrStop} clearTime={this.clearTime} />
        {time > 0 ? (
          <div>
            <p>{this.timerOutput()}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
//
