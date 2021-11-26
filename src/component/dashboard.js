import React from 'react';
import doctor from "../assest/img/doctor.jpg"
import goooglefit from "../assest/img/googlefit.png"
import gooogledrive from "../assest/img/google-drive.png"
import goooglemap from "../assest/img/google-maps.png"
import goooglecalendar from "../assest/img/google-calendar.png"
import goooglemail from "../assest/img/gmail.png"
import "../App.css"
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
  import "antd/dist/antd.css";


  const { Header, Sider, Content } = Layout;

  class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="topp">
               <div>{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}</div>
              <div><h4>CleoEMR</h4></div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
               <div className="navliist">
               <div className="navimgholder">
            <img src={goooglefit} alt=""/>
               </div>
               CleoEMR
               </div>
              </Menu.Item>
              <Menu.Item key="2">
              <div className="navliist">
               <div className="navimgholder">
            <img src={gooogledrive} alt=""/>
               </div>
               Drive
               </div>
              </Menu.Item>
              <Menu.Item key="3" >
              <div className="navliist">
               <div className="navimgholder">
            <img src={goooglemap} alt=""/>
               </div>
               Maps
               </div>
              </Menu.Item>
              <Menu.Item key="4" >
              <div className="navliist">
               <div className="navimgholder">
            <img src={goooglecalendar} alt=""/>
               </div>
               Calendar
               </div>
              </Menu.Item>
              <Menu.Item key="5" >
              <div className="navliist">
               <div className="navimgholder">
            <img src={goooglemail} alt=""/>
               </div>
               Mail
               </div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <div className="topp-right">
                    
               <div><i className="fa fa-th" aria-hidden="true"></i></div>
                <div className="topp-img">
                <img src={doctor} alt=""/>
                </div>
                </div>
            </Header>
            <Content
              style={{margin: '24px 16px'}} >
            <div
            className="site-layout-background"
            style={{
                margin: '5px 5px',
                padding: 12,
                minHeight: 280,
              }}
            >{this.props.children}</div>
            </Content>
          </Layout>
        </Layout>
      );
    }
  }
  
  export default SiderDemo