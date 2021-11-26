import SiderDemo from "./component/dashboard";
import { Row, Col } from "antd";
import "../src/component/content.css"
import doctor from "./assest/img/doctor.jpg"
import "./App.css";
import Demo from "./component/tabs";

function App() {
  return (
    <div className="App">
      <SiderDemo>
<div className="container">
<div className="patient-row">
<Row gutter={16}>
      <Col className="gutter-row" xs={24} sm={24} md={10}>
        <div className="patient-details">
          <div className="patientimg">
            <img src={doctor} alt=""/>
          </div>
          <div className="patientdetailtext">
            <h2>Maciej Zakoscieniny, 39,M</h2>
            <p className="address">Pornoska, 55/9, Wiroclaw,<br/> Poland</p>
            <p className="date-mail">03/06/1956 &nbsp;  +49723539595 &nbsp; maciejz@gmail.com</p>
            <div>
              <button className="allergies">Allergies</button>
              <button className="billing">Billing Alert</button>
            </div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={14}>
        <div>
        <Row gutter={16}>
      <Col className="gutter-row" xs={24} sm={24} md={6}>
        <div>
          <div className="wt">
          <p>- wt:22/02/2020</p>
          <h3>140lbs</h3>
          <p>-PCP: Elijah Manning</p>
          <p>-Lang: <span style={{fontWeight:"bold"}}>English</span></p>
          <p>-Trans:No</p>
          <div className="wt-btn">
              <button><i className="fa fa-pencil" aria-hidden="true"></i></button>
              <button><i className="fa fa-times"></i></button>
          </div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={6}>
        <div>
        <div className="medical">
          <p>-Ins:Medical B</p>
          <p>Acc:<span style={{fontWeight:"bold"}}> $3332 </span></p>
          <h2>-Ref Barret Moving</h2>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={6}>
        <div>
        <div className="talkative">
          <h3>Very talkative</h3>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={6}>
        <div>
        <div className="panic">
          <h3>Had a panic attack recently</h3>
          </div>
        </div>
      </Col>
    </Row>
        </div>
      </Col>
    </Row>
</div>
<Demo/>
</div>
      </SiderDemo>
    </div>
  );
}

export default App;
