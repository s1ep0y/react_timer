import React from 'react';
import './App.scss';
import Countdown from './components/Countdown';
import Timer from './components/Timer';
import { Tabs } from 'antd';
import "antd/dist/antd.css";
import '@csstools/normalize.css';


const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Timer" key="1">
          <Timer />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          <Countdown />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
