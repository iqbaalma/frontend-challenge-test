/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Layout, Menu } from 'antd';
import '../App.css'
import { Link } from 'react-router-dom';

const { Sider } = Layout;

interface SidebarProps {
  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeKey, setActiveKey }) => {
  const handleSubMenuClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Sider className='sidebar' width={200} theme="light">
      <div style={{ height: '85vh', overflowY: 'auto' }}>
        <Menu
          mode="vertical"
          selectedKeys={[activeKey]}
          onClick={({ key }) => handleSubMenuClick(key as string)}
        >
          <Menu.ItemGroup title="Get Started" key="title1">
            <Menu.Item key="option1">
             Searching for news articles
            </Menu.Item>
            <Menu.Item key="option2">
            Get curated breaking news headlines
            </Menu.Item>
            
            {/* Menambahkan lebih banyak item */}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Documentation" key="title2">
            {/* Menambahkan lebih banyak item */}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Authentication" key="title3">
            {/* Menambahkan lebih banyak item */}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Endpoints" key="title3">
            <Menu.Item key="option3">
            Everything
            </Menu.Item>
            <Menu.Item key="option4">
            Top headlines
            </Menu.Item>
            <Menu.Item key="option5">
            Sources
            </Menu.Item>
            {/* Menambahkan lebih banyak item */}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Errors" key="title2">
            {/* Menambahkan lebih banyak item */}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Client libraries" key="title3">
            <Menu.Item key="option6">
            Node.js
            </Menu.Item>
            <Menu.Item key="option7">
            Ruby
            </Menu.Item>
            <Menu.Item key="option8">
            Python
            </Menu.Item>
            <Menu.Item key="option9">
            PHP
            </Menu.Item>
            <Menu.Item key="option10">
            Java
            </Menu.Item>
            <Menu.Item key="option11">
            C#
            </Menu.Item>
            {/* Menambahkan lebih banyak item */}
          </Menu.ItemGroup>
        </Menu>
      </div>
    </Sider>
  );
};

export default Sidebar;
