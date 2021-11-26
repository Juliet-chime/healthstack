import React from 'react'
import { Row, Col } from "antd";
import Orders from './orders';
import Overview from './overview';

const Medical = () => {
    return (
        <div className="tab-details">
<Row>
    <Col xs={24} sm={20} md={18}>
       <div className="med-summary">
      <div className="status">
      <Row>
    <Col xs={24} sm={24} md={17}>
      <div>
        <h1>Maciej Zakoscielny, 39, M</h1>
      </div>
    </Col>
    <Col xs={24} sm={20} md={7}>
      <div className="radio-status">
        <label>Status</label>
        <input type="radio" id="html" name="fav_language" value="HTML" style={{paddingLeft:"10px"}}/>
<label htmlFor="html">Open Reviwed</label>
<input type="radio" id="css" name="fav_language" value="CSS"/>
<label htmlFor="css">CSS</label>
      </div>
    </Col>
  </Row>
      </div><br/>

     <div>
     <Row>
    <Col xs={24} sm={24} md={11}>
      <div className="input-detail">
        <label>
            <h6><i className="fa fa-circle"></i> &nbsp; &nbsp;<i className="fa fa-search"></i> &nbsp; &nbsp;Elisha Manning <i className="fa fa-caret-down"></i></h6>
            <input type="text" placeholder="Provider"/>
        </label>
      </div>
    </Col>
    <Col xs={24} sm={20} md={11}>
    <div className="input-detail">
        <label>
            <h6><i className="fa fa-circle"></i> &nbsp; &nbsp;<i className="fa fa-search"></i> &nbsp; &nbsp;Elisha Manning <i className="fa fa-caret-down"></i></h6>
            <input type="text" placeholder="Provider"/>
        </label>
      </div>
    </Col>
    <Col xs={24} sm={24} md={2}>
      <div>
      <i className="fa fa-star"></i>
      </div>
    </Col>
  </Row><br/>

  <Row>
    <Col xs={24} sm={24} md={11}>
      <div className="input-detail">
        <label>
            <h6><i className="fa fa-circle"></i> &nbsp; &nbsp;<i className="fa fa-search"></i> &nbsp; &nbsp;Elisha Manning <i className="fa fa-caret-down"></i></h6>
            <input type="text" placeholder="Provider"/>
        </label>
      </div>
    </Col>
    <Col xs={24} sm={24} md={11}>
    <div className="input-detail">
        <label>
            <h6><i className="fa fa-circle"></i> &nbsp; &nbsp;<i className="fa fa-search"></i> &nbsp; &nbsp;Elisha Manning <i className="fa fa-caret-down"></i></h6>
            <input type="text" placeholder="Provider"/>
        </label>
      </div>
    </Col>
  </Row>

  <Row>
    <Col xs={24} sm={24} md={22}>
    <div className="highpiority">
   <div style={{marginLeft:"5px"}}>
   <input type="checkbox" id="higjpriority" name="highpriority" defaultChecked/>
  <label htmlFor="horns">Highpriorty</label>
   </div>
<div style={{marginLeft:"50px"}}>
<input type="checkbox" id="cancelled" name="cancelled"/>
  <label htmlFor="horns">Cancelled</label>
</div>
  <div style={{marginLeft:"50px"}}>
  <input type="checkbox" id="futureorder" name="futureorder"/>
  <label htmlFor="horns" style={{color:"#D5D5D5"}}>Future Order</label>
  </div>
 <div style={{marginLeft:"50px"}}>
 <input type="checkbox" id="inhouse" name="inhouse"/>
  <label htmlFor="horns" style={{color:"#D5D5D5"}}> Inhouse</label>
 </div>
      </div>
    </Col>
  </Row>
    <Orders/>
     </div>

     </div>
    </Col>
    <Col xs={24} sm={24} md={6}>
      <Overview/>
    </Col>
  </Row>

</div> 
    )
}

export default Medical
