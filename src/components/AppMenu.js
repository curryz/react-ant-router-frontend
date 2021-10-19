import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../contains/HomePage';
import BlurExample from '../blurExample';
import '../index.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AppMenus extends React.Component {
    state = {
      collapsed: false,
    };

    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Router>
                <Layout>
                    <Header>
                        <div className="logo"></div>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode="inline">
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    <Link to="/">sdsdsd</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DesktopOutlined />}>
                                    Option 2
                                </Menu.Item>
                                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                    <Menu.Item key="3">
                                    <Link to="/blurExmaple">Tom</Link></Menu.Item>
                                    <Menu.Item key="4">
                                    <Link to="/">Bill</Link></Menu.Item>
                                    <Menu.Item key="5">
                                    <Link to="/">Alex</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                                    <Menu.Item key="6">Team 1</Menu.Item>
                                    <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9" icon={<FileOutlined />}>
                                    Files
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }} className="site-layout">
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Route exact path="/" component={ HomePage } />
                                <Route exact path="/blurExmaple" component={ BlurExample } />
                                <Route exact path="/" component={ HomePage } />
                                
                                {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                    Bill is a cat.
                                </div> */}
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        )
    }

}

export default AppMenus;
 