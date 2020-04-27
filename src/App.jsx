import React from 'react';
import './App.css';
import { Btns } from './components/btns';
import { Countdown } from './components/Countdown';
import { Tabs } from 'antd';


const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <Countdown />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          2nd tab
        </TabPane>
      </Tabs>
      <Btns />
    </div>
  );
}

export default App;
