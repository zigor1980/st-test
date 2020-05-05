import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import {
  Link,
} from 'react-router-dom';
import './styles.scss';

const { Header, Content } = Layout;

function App({ menu, children }) {
  return (
    <Layout className="layout">
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
        >
          {menu.map(({ title, path, key }) => (
            <Menu.Item key={key}>
              <Link to={path}>{title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="content">
        {children}
      </Content>
    </Layout>
  );
}

App.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
  })),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default App;
