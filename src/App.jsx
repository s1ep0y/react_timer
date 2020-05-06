import React from 'react';
import './App.css';
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
        <TabPane tab="Tab 1" key="1">
          <Countdown />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Timer />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
