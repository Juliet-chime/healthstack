import React from 'react';
import { Tabs } from 'antd';
import { Row,Col } from 'antd';


const { TabPane } = Tabs;

const Overview = () => {
//   const [position, setPosition] = React.useState(['left', 'right']);
  return (
    <div className="overview-holder">
        <div className="overview-icon">
        <i className="fa fa-chevron-left"></i>
        <i className="fa fa-chevron-right"></i>
        </div>
      <Tabs>
        <TabPane tab="Overview" key="1">
          <div>
              <div style={{padding:"10px 0px"}}>
              <Row>
    <Col xs={24} sm={24} md={24}>
      <h4>Maciej Zakoscielny, 39, M as of 31/02/2020</h4>
    </Col>
  </Row>
              </div>

              <div>
              <Row>
    <Col xs={24} sm={24} md={24}>
      <div className="globalalert">
          <h4>Global Alerts</h4>
          <i className="fa fa-caret-up"></i>
      </div>
      <div className="globalalert">
          <h4>
              Fasting
              </h4>
      </div>
    </Col>
  </Row>
              </div>

              <div className="ccm">
              <Row>
    <Col xs={24} sm={24} md={9}>
      <div><h3>CCM</h3></div>
    </Col>
    <Col xs={24} sm={24} md={15}>
    <div>
        <p>TIme Completed: 00:21<i className="fa fa-caret-down" style={{marginLeft:"19px"}}></i></p>
        </div>
    </Col>
  </Row>
              </div>

              <Row>
    <Col xs={24} sm={24} md={24}>
      <div className="globalalert">
          <h4>Advanced Directives</h4>
          <i className="fa fa-caret-up"></i>
      </div>
      <div className="globalalert">
          <h4>LW <span>livingWill</span></h4>
      </div>
    </Col>
  </Row>
        

              <div className="problemlist">
              <div className="problemholder">
              <Row>
    <Col xs={24} sm={24} md={15}>
      <div><h2>Problem List</h2></div>
    </Col>
    <Col xs={24} sm={24} md={8}>
      <div><i className="fa fa-caret-up"></i></div>
    </Col>
  </Row>
              </div>

  <div className="list">
  <Row>
    <Col xs={4} sm={4} md={4}>
      <div className="plus">+</div>
    </Col>
    <Col xs={4} sm={4} md={4}>
      <div><h4 style={{color:"red"}}>9</h4></div>
    </Col>
    <Col xs={5} sm={4} md={4}>
    <div><h3>498.2</h3></div>
    </Col>
    <Col xs={4} sm={4} md={4}>
    <div><h3>COPD</h3></div>
    </Col>
  </Row>

  <Row>
    <Col xs={4} sm={4} md={4}>
      <div className="plus">+</div>
    </Col>
    <Col xs={4} sm={4} md={4}>
      <div><h4>10</h4></div>
    </Col>
    <Col xs={5} sm={4} md={4}>
    <div><h3>j33.2</h3></div>
    </Col>
    <Col xs={4} sm={4} md={4}>
    <div><h3>Hypertension</h3></div>
    </Col>
  </Row>

  <Row>
    <Col xs={4} sm={4} md={4}>
      <div className="plus">+</div>
    </Col>
    <Col xs={4} sm={4} md={4}>
      <div><h4>10</h4></div>
    </Col>
    <Col xs={5} sm={4} md={4}>
    <div><h3>i19</h3></div>
    </Col>
    <Col xs={4} sm={4} md={4}>
    <div><h3>Hyperthermia</h3></div>
    </Col>
  </Row>

  <Row>
    <Col xs={4} sm={4} md={4}>
      <div className="plus">+</div>
    </Col>
    <Col xs={4} sm={4} md={4}>
      <div><h4>10</h4></div>
    </Col>
    <Col xs={5} sm={4} md={4}>
    <div><h3>E23.3</h3></div>
    </Col>
    <Col xs={4} sm={4} md={4}>
    <div><h3>Diabetes</h3></div>
    </Col>
  </Row>
  </div>
              </div>

          </div>
        </TabPane>
        <TabPane tab="DRTLM" key="2">
          Content of tab Labs
        </TabPane>
        <TabPane tab="History" key="3">
          Content of tab DI
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Overview