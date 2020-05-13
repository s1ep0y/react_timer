import React from 'react';
import { Progress } from 'antd';
import CountdownParams from './CountdownParams';
import Btns from './Btns';
import sound from '../timerEnd.mp3';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.state = {
      time: 0,
      timeAll: 0,
      timeNow: 0,
      active: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

    clearTime = () => {
      const { active } = this.state;
      if (active === true) {
        clearInterval(this.timerId);
        this.setState({ active: false });
        return;
      }

      this.setState({
        time: 0,
        timeNow: 0,
        timeAll: 0,
      });
    };

    timeSetter = () => {
      const {
        time,
        timeNow,
      } = this.state;
      this.setState({
        timeAll: time,
        timeNow: timeNow === 0
          ? time
          : timeNow,
      });
    };

    timerStep = () => {
      this.setState((prevState) => ({ timeNow: prevState.timeNow - 1 }));
    }

    startOrStop = () => {
      this.timeSetter();
      const { active } = this.state;
      if (active === false) {
        this.timerId = setInterval(() => {
          const { timeNow } = this.state;
          if (timeNow === 0) {
            clearInterval(this.timerId);
            this.setState({
              active: false,
            });
            const audio = new Audio(sound);
            audio.play();
            return;
          }
          this.timerStep();
        }, 1000);
        this.setState({ active: true });
      } else {
        clearInterval(this.timerId);
        this.setState({
          active: false,
        });
      }
    };

    sliderHandler = (value) => {
      this.setState({
        time: value,
      });
    };

    minutesHandler = ({ target }) => {
      const val = Number(target.value * 60);
      this.setState((prev) => {
        const newTime = (prev.time % 60) + val > 43200
          ? 43200
          : (prev.time % 60) + val;
        return { time: newTime };
      });
    };


    secondsHandler = ({ target }) => {
      const val = Number(target.value);
      this.setState((prev) => {
        const oldSecs = prev.time % 60;
        const newTime = (prev.time - oldSecs) + val > 43200
          ? 43200
          : (prev.time - oldSecs) + val;
        return { time: newTime };
      });
    };

    timerOutput = () => {
      const { timeNow } = this.state;
      const seconds = String(Math.floor(timeNow % 60));
      const minutes = String(Math.floor(timeNow / 60));
      return `${minutes.length === 1 ? `0${minutes}` : minutes} : ${seconds.length === 1 ? `0${seconds}` : seconds} `;
    };

    percentCalc = () => {
      const {
        timeAll,
        timeNow,
      } = this.state;
      if (timeAll === 0) return 0;
      const res = (((timeAll - timeNow) / timeAll) * 100).toFixed(1);
      return res;
    };

    render() {
      const { time, timeNow } = this.state;
      return (
        <div className="countdown">
          <CountdownParams
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
          <div className="countdown__textOutput">
            <span>{this.timerOutput()}</span>
          </div>
          <Progress type="circle" percent={this.percentCalc()} />
        </div>
      );
    }
}
//
