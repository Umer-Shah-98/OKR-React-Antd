import React from "react";
import { Button, Flex, Typography } from "antd";
const { Text } = Typography;
export const PlanBanner = () => {
  return (
    <Flex
      justify="space-between"
      style={{
        marginTop: "2rem",
        background:
          "linear-gradient(0deg, #62D2E9, #62D2E9),linear-gradient(0deg, #E9E8E8, #E9E8E8)",
        borderRadius: 6,
        padding: 20,
      }}
    >
      <Flex vertical>
        <Text
          style={{
            fontFamily: "Outfit",
            fontSize: "26px",
            fontWeight: "500",
            lineHeight: "33px",
            letterSpacing: "0em",
            color: "#ffffff",
          }}
        >
          Free Plan
        </Text>
        <Text
          style={{
            fontFamily: "Outfit",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "33px",
            letterSpacing: "0em",
            color: "#ffffff",
          }}
        >
          You are currently on a free plan. Upgrade your plan to unlock
          additional features.
        </Text>
      </Flex>

      <Button
        type="text"
        onClick={() => console.log("Upgrade")}
        style={{
          "&:hover": { backgroundColor: "#ffffff" },
          fontFamily: "Outfit",
          fontSize: "22px",
          fontWeight: "600",
          lineHeight: "33px",
          letterSpacing: "0em",
          color: "black",
          width: "232px",
          height: "58px",
          borderRadius: "37px",
          backgroundColor: "#ffffff",
        }}
      >
        Upgrade
      </Button>
    </Flex>
  );
};
