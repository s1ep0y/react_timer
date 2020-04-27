import React from 'react'
import { Button } from 'antd';

export class Btns extends React.Component {
    startOrStop = () => {
        console.log('start or stop')
    }

    clearTime = () => {
        console.log('clear')
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.startOrStop}>
                    Start/Stop
                </Button>
                <Button type="dashed" onClick={this.clearTime}>
                    Clear
                </Button>
            </div>
        )
    }
}