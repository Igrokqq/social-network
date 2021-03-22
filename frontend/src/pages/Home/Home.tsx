import React, {
  Component, ReactNode,
} from 'react';
import {
  Layout, List,
} from 'antd';
import {
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import {
  AliwangwangOutlined, TeamOutlined,
} from '@ant-design/icons';

import './Home.sass';

export default class Home extends Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
    };
  }

  render(): ReactNode {
    return (
      <Layout className="layout">
        <Layout.Header className="header">
          <div>
            <div>
              <AliwangwangOutlined className="icon" />
            </div>
            <div className="title">
              <span className="text">SocNet</span>
            </div>
          </div>

          <div className="auth-navigation-bar">
            <div className="item">
              <Link to="/sign-in" className="link">
                <span className="text">Login</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/sign-up" className="link">
                <span className="text">Sign Up</span>
              </Link>
            </div>
          </div>
        </Layout.Header>
        <Layout className="layout-content">
          <Layout.Sider theme="light" className="sidebar-left">
            <List
              className="navigation-list"
              itemLayout="horizontal"
              dataSource={[
                {
                  title: 'Friends',
                  icon: <TeamOutlined className="icon" />,
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    className="navigation-link"
                    avatar={item.icon}
                    title={<Link to="/friends" className="link">{item.title}</Link>}
                  />
                </List.Item>
              )}
            />
          </Layout.Sider>
          <Layout.Content className="content">Content</Layout.Content>
        </Layout>
      </Layout>
    );
  }
}
