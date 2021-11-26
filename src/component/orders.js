import React from 'react';
import { Tabs} from 'antd';
import { Row, Col } from "antd";

const { TabPane } = Tabs;

class Orders extends React.Component {

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {

    return (
      <div className="orders">
        <Tabs defaultActiveKey="1" type="card" >
          <TabPane tab="Order &amp; Collection" key="1">
            <div className="collection">
                   <div className="order-edit">
                   <Row>
    <Col xs={24} sm={24} md={12}>
      <h1>Orders &amp; Collection</h1>
    </Col>
    <Col xs={24} sm={24} md={12}>
      <p>Edit Details</p>
    </Col>
  </Row>
                   </div>

                   <div className="order-edit-details">
                   <Row>
    <Col xs={24} sm={20} md={10}>
      <div>
          <p>Accession Id &nbsp;<span className="orders-boldtext">386749</span></p>
          <p>Order Date &nbsp;<span className="orders-boldtext">23/02/2020</span></p>
          <p>Requesting Physician &nbsp;<span className="orders-boldtext">Manning</span></p>
      </div>
    </Col>
    <Col xs={24} sm={20} md={10}>
    <div>
          <p>Reference Id &nbsp;<span className="orders-boldtext">XJM23</span></p>
          <p>Collection Date &nbsp;<span className="orders-boldtext">01/03/2020</span></p>
      </div>
    </Col>
  </Row>
                   </div>

                   <div>
                   <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <div><h1>Lipid Panel</h1></div>
    </Col>
  </Row>
                   </div>
            </div>
          </TabPane>
          <TabPane tab="Results" key="2">
            Content of Result
          </TabPane>
          <TabPane tab="Attachment" key="3">
            Content of Attachment
          </TabPane>
          <TabPane tab="Graph" key="4">
            Content of Graph
          </TabPane>
          <TabPane tab="Progress Report" key="5">
            Content ofProgress team
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Orders