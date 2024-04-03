import React from "react";
import { Button, Flex, Space, Typography } from "antd";
const { Text } = Typography;
import ProfileIcon from "../../assets/profile-icon.png";
import NotificationIcon from "../../assets/notification-icon.png";
import { Dashboard } from "../../pages/Dashboard";
const boxStyle = {
  width: "100%",
  height: 70,
  //   borderRadius: 6,
  //   border: "1px solid #40a9ff",
  backgroundColor: "white",
};
export const NavBar = () => {
  return (
    <Flex vertical style={{ width: "100%" }}>
      <Flex style={boxStyle} justify={"space-between"} align={"center"}>
        <Flex justify="end" style={{ padding: 20 }}>
          <Text
            style={{
              fontFamily: "Outfit",
              fontSize: "30px",
              fontWeight: "600",
              lineHeight: "50px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FF8C7D",
            }}
          >
            Dashboard
          </Text>
        </Flex>

        <Space direction="horizontal" size={50} style={{ padding: 20 }}>
          <img src={NotificationIcon} width={40} />
          <img src={ProfileIcon} />
        </Space>
      </Flex>

      <Dashboard />
    </Flex>
  );
};
