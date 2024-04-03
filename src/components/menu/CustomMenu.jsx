import React from "react";
import { Input, Menu, Space } from "antd";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import {
  BankOutlined,
  LogoutOutlined,
  MehOutlined,
  QuestionCircleOutlined,
  RobotOutlined,
} from "@ant-design/icons";
export const CustomMenu = () => {
  const items = [
    { label: <Input.Search placeholder="Search here..." />, key: "search" },
    { label: "Dashboard", key: "dashboard", icon: <HomeOutlined /> },
    {
      label: "Agents",
      key: "agents",
      icon: <RobotOutlined />,
      children: [
        { label: "My Agents", key: "myAgents" },
        { label: "Create Agent", key: "createAgent" },
      ],
    },
    {
      label: "Account",
      key: "account",
      icon: <MehOutlined />,
      children: [
        { label: "Profile", key: "profile" },
        { label: "Billing and Settings", key: "billing" },
      ],
    },
    { label: "Subscription", key: "subscription", icon: <BankOutlined /> },
    { label: "Need Help?", key: "needHelp", icon: <QuestionCircleOutlined /> },
    { label: "Logout", key: "logout", icon: <LogoutOutlined />, danger: true },
  ];
  return (
    <div>
      <header
        style={{
          width: "220px",
          height: "100%",
          boxShadow: "0px 4px 13px 0px #A9A9A94D",
        }}
      >
        <Space direction="vertical" size={30}>
          <Menu
            style={{
              fontFamily: "Outfit",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "50px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
            mode="inline"
            defaultOpenKeys={["chatbots"]}
            items={items}
            onClick={(e) => console.log(e.key)}
          ></Menu>
        </Space>
      </header>
    </div>
  );
};
