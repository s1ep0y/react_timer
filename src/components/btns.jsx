import React from 'react';
import {Button} from 'antd';

export class Btns extends React.Component {
    render() {
        const { startOrStop, clearTime } = this.props;
        
        return (
            <div>
                <Button type="primary" onClick={startOrStop}>
                    Start/Stop
                </Button>
                <Button type="dashed" onClick={clearTime}>
                    Clear
                </Button>
            </div>
        );
    }
}
