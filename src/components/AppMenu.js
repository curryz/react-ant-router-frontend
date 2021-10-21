import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  LikeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../contains/HomePage';
import BMap from '../contains/BMap';
import BlurExample from '../blurExample';
import '../index.css';
import IdolListPage from '../contains/list';

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
                        <div className="logo">技术测试大全</div>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode="inline">
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    <Link to="/">React</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DesktopOutlined />}>
                                <Link to="/blur/exmaple">Redux</Link>
                                </Menu.Item>
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Router">
                                    <Menu.Item key="3">
                                    <Link to="/idol/list/page">Dom</Link></Menu.Item>
                                    <Menu.Item key="4">
                                    <Link to="/idol/list/page">auto</Link></Menu.Item>
                                    <Menu.Item key="5">
                                    <Link to="/idol/list/page">Data</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LikeOutlined />} title="视图">
                                    <Menu.Item key="6"><Link to="/bMap">BMapBox Base</Link></Menu.Item>
                                    <Menu.Item key="8">BMapBox Manual</Menu.Item>
                                    <Menu.Item key="9">BMapBox GL</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="10" icon={<UserOutlined />}>
                                    <Link to="/idol/list/page">Self Files</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }} className="site-layout">
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb> */}
                            <Content style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Route exact path="/" component={ HomePage } />
                                <Route exact path="/bMap" component={ BMap } />
                                <Route exact path="/blur/exmaple" component={ BlurExample } />
                                <Route exact path="/idol/list/page" component={ IdolListPage } />
                                
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
 