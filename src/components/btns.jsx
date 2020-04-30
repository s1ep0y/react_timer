import React from 'react';
import {Button} from 'antd';

export class Btns extends React.Component {
    render() {
        const { startOrStop, clearTime, disabled } = this.props;

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
    }
}
