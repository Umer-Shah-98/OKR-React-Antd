import React from "react";
import { Button, Flex, Image, Space, Typography } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
const { Text } = Typography;
export const DashboardActionsButtons = ({ buttonText, icon }) => {
  return (
    <Button
      icon={<Image src={icon} />}
      style={{
        width: "250px",
        height: "60px",
        borderRadius: "115px",
        border: "2px solid #62D2E9",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Outfit",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "center",
        padding: "10px",
        color: "#62D2E9",
      }}
    >
      {buttonText}
    </Button>
  );
};
