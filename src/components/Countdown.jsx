import React from 'react';
import { Progress } from 'antd';
import CountdownParams from './CountdownParams';
import Btns from './Btns';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        minutes: 0,
        seconds: 0,
        slider: 0,
      },
      timer: {
        timeAll: 0,
        timeNow: 0,
        active: false,
      },
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

    clearTime = () => {
      const {
        timer: {
          active,
          timeAll,
          timeNow,
        },
      } = this.state;
      if (active === true) {
        clearInterval(this.timerId);
        this.setState({
          timer: {
            active: false,
            timeAll,
            timeNow,
          },
        });
        return;
      }

      this.setState({
        inputs: {
          minutes: 0,
          seconds: 0,
          slider: 0,
        },
        timer: {
          time: 0,
          timeNow: 0,
          active,
        },
      });
    };

    timeSetter = () => {
      const {
        inputs: {
          seconds,
          minutes,
        },
        timer: {
          timeNow,
          active,
        },
      } = this.state;
      const time = seconds + minutes * 60;
      this.setState({
        timer: {
          timeAll: time * 10,
          timeNow: timeNow === 0
            ? time * 10
            : timeNow,
          active,
        },
      });
    };

    startOrStop = () => {
      this.timeSetter();
      const {
        timer: {
          active,
        },
      } = this.state;
      if (active === false) {
        this.timerId = setInterval(() => {
          const {
            timer: {
              timeAll,
              timeNow,
            },
          } = this.state;
          if (timeNow - 1 === -1) {
            clearInterval(this.timerId);
            this.setState({
              timer: {
                active: false,
                timeAll,
                timeNow: 0,
              },
            });
            return;
          }
          this.setState({
            timer: {
              active: true,
              timeAll,
              timeNow: timeNow - 1,
            },
          });
        }, 100);
      } else {
        const {
          timer: {
            timeAll,
            timeNow,
          },
        } = this.state;
        clearInterval(this.timerId);
        this.setState({
          timer: {
            active: false,
            timeAll,
            timeNow,
          },
        });
      }
    };

    sliderHandler = (value) => {
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      this.setState({
        inputs: {
          slider: value,
          minutes,
          seconds,
        },
      });
    };

    minutesHandler = ({
      target: {
        value,
      },
    }) => {
      const val = Number(value);
      const {
        inputs: {
          seconds,
        },
      } = this.state;

      if (seconds > 0 && val >= 720) {
        this.setState({
          inputs: {
            seconds: 0,
            minutes: 720,
            slider: 3600,
          },
        });
        return;
      }
      const sum = val * 60 + seconds;
      const slider = sum > 3600
        ? 3600
        : sum;
      this.setState({
        inputs: {
          minutes: val,
          seconds,
          slider,
        },
      });
    };

    secondsHandler = ({ target }) => {
      const {
        inputs: {
          minutes,
        },
      } = this.state;
      const val = Number(target.value);
      const sum = minutes * 60 + val;
      const slider = sum > 3600
        ? 3600
        : sum;

      if (minutes === 720) {
        this.setState({
          inputs: {
            seconds: val,
            minutes: 719,
            slider,
          },
        });
        return;
      }

      if (val > 59) {
        this.setState({
          inputs: {
            seconds: val % 60,
            minutes: minutes + Math.floor(val / 60),
            slider,
          },
        });
        return;
      }

      this.setState({
        inputs: {
          seconds: val !== 0
            ? val
            : null,
          minutes,
          slider,
        },
      });
    };

    timerOutput = () => {
      const {
        timer: {
          timeNow,
        },
      } = this.state;
      const miliSeconds = timeNow % 100;
      const seconds = Math.floor(timeNow % 6000);
      const minutes = Math.floor(timeNow / 600);
      return `${minutes} : ${seconds} : ${miliSeconds}`;
    };

    percentCalc = () => {
      const {
        timer: {
          timeAll,
          timeNow,
        },
      } = this.state;
      const res = Math.floor((timeAll - timeNow) / timeAll);
      return res * 100;
    };

    render() {
      const {
        inputs: {
          minutes,
          seconds,
          slider,
        },
        timer: {
          timeNow,
        },
      } = this.state;
      const time = Number(minutes * 60 + seconds);
      return (
        <div className="countdown">
          <CountdownParams
            minutes={minutes}
            seconds={seconds}
            slider={slider}
            disabled={timeNow !== 0}
            time={time}
            secondsHandler={this.secondsHandler}
            minutesHandler={this.minutesHandler}
            sliderHandler={this.sliderHandler}
          />
          <Btns
            disabled={!(time > 0)}
            startOrStop={this.startOrStop}
            clearTime={this.clearTime}
          />
          <div>
            <span>{this.timerOutput()}</span>
          </div>
          <Progress type="circle" percent={this.percentCalc()} />
        </div>
      );
    }
}
//
