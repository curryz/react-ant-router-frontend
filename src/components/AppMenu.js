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
                        <div className="logo">学无止境</div>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode="inline">
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    <Link to="/">现代诗歌</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DesktopOutlined />}>
                                <Link to="/blur/exmaple">古诗词</Link>
                                </Menu.Item>
                                <SubMenu key="sub1" icon={<UserOutlined />} title="散文">
                                    <Menu.Item key="3">
                                    <Link to="/idol/list/page">迟子建</Link></Menu.Item>
                                    <Menu.Item key="4">
                                    <Link to="/idol/list/page">冰心</Link></Menu.Item>
                                    <Menu.Item key="5">
                                    <Link to="/idol/list/page">林清玄</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LikeOutlined />} title="书法">
                                    <Menu.Item key="6">欧体</Menu.Item>
                                    <Menu.Item key="8">颜体</Menu.Item>
                                    <Menu.Item key="9">瘦金体</Menu.Item>
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
 