import React from 'react';
import { Tabs } from 'antd';
import Medical from './medical';


const { TabPane } = Tabs;

const Demo = () => {
//   const [position, setPosition] = React.useState(['left', 'right']);
  return (
    <>
      <Tabs>
        <TabPane tab="Medical Summary" key="1">
  <Medical/>
        </TabPane>
        <TabPane tab="CDSS" key="2">
          Content of tab CDSS
        </TabPane>
        <TabPane tab="Labs" key="3">
          Content of tab Labs
        </TabPane>
        <TabPane tab="DI" key="4">
          Content of tab DI
        </TabPane>
        <TabPane tab="Growth Chart" key="5">
          Content of tab Growth
        </TabPane>
        <TabPane tab="Imm" key="6">
          Content of tab Imm
        </TabPane>
        <TabPane tab="T.inj" key="7">
          Content of tab T.inj
        </TabPane>
        <TabPane tab="Encounters" key="8">
          Content of tab Encounter
        </TabPane>
        <TabPane tab="Patient Docs" key="9">
          Content of tab Patient
        </TabPane>
        <TabPane tab="FlowSheets" key="10">
          Content of tab Flowsheets
        </TabPane>
        <TabPane tab="Notes" key="11">
          Content of tab Notes
        </TabPane>
      </Tabs>
    </>
  );
};

export default  Demo