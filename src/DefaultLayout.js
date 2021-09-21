import { Layout, Menu } from "antd";
import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserAddOutlined,
  HomeOutlined,
  FolderAddOutlined,
  OrderedListOutlined,
  PlusSquareOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./defaultlayout.css";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  componentDidMount() {
    this.setState({ collapsed: true });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  render() {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
      <Layout>
        <Sider
          className="ant-sider"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
          {this.state.collapsed ? (
            <div className="logo">SJ</div>
          ) : (
            <div className="logo">SheyJobs</div>
          )}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/" icon={<HomeOutlined />} className="mt-3">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/tables" icon={<UserAddOutlined />}>
              <Link to="/tables">Table</Link>
            </Menu.Item>
            <Menu.Item key="/forms" icon={<FolderAddOutlined />}>
              <Link to="/forms">Forms</Link>
            </Menu.Item>

            <Menu.Item key="/posted" icon={<PlusSquareOutlined />}>
              <Link to="/posted">TodoList</Link>
            </Menu.Item>

            <Menu.Item key="/appliedjobs" icon={<OrderedListOutlined />}>
              <Link to="/appliedjobs">API</Link>
            </Menu.Item>

            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link onClick={this.logout}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              zIndex: 9999,
              padding: 0,
              position: "sticky",
              width: "100%",
              overflow: "auto",
              top: 0,
              left: 0,
            }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              overflow: "intial",
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
