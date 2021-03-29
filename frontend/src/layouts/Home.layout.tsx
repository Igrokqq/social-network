import React from 'react';
import { Layout, List } from 'antd';
import { Link } from 'react-router-dom';
import { TeamOutlined, } from '@ant-design/icons';
import Logo from '../components/Logo.component';
import { ProfilePages } from '../routes/profile.routes';
import LogoutButton from '../shared/components/LogoutButton.component';
import '../sass/layouts/Home.layout.sass';

export default function HomeLayout({ dispatch }: any): JSX.Element {
  return (
    <Layout className="layout">
      <Layout.Header className="header">
        <div>
          <div>
            <Logo />
          </div>
          <div className="title">
            <span className="text">SocNet</span>
          </div>
        </div>

        <div className="auth-navigation-bar">
          <div className="item">
            <Link to={ProfilePages.INDEX} className="link">
              <span className="text">Profile</span>
            </Link>
          </div>
          <div className="item">
            <LogoutButton dispatch={dispatch} />
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
