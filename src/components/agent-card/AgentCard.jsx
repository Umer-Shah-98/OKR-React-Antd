import React from "react";
import { Button, Card, Flex, Typography, Dropdown } from "antd";
const { Text } = Typography;
import ChatbotImage from "../../assets/ChatBotIcon.png";
import MenuIcon from "../../assets/dots.png";
import CloseIcon from "../../assets/close.png";

export const AgentCard = ({ agent }) => {
  const items = [
    {
      key: "1",
      label: (
        <Flex justify="end">
          <img src={CloseIcon} width={20} />
        </Flex>
      ),
    },
    {
      key: "2",
      label: (
        <Text
          onClick={() => console.log("delete")}
          style={{ color: "red", fontFamily: "Outfit" }}
        >
          Delete
        </Text>
      ),
    },
    {
      key: "3",
      label: <Text style={{ fontFamily: "Outfit" }}>Inactive</Text>,
    },
  ];
  const customizeButtonDropdownItems = [
    {
      key: "2",
      label: (
        <Text
          onClick={() => console.log("delete")}
          style={{ color: "red", fontFamily: "Outfit" }}
        >
          Delete
        </Text>
      ),
    },
    {
      key: "3",
      label: <Text style={{ fontFamily: "Outfit" }}>Inactive</Text>,
    },
  ];
  return (
    <Card
      style={{
        marginTop: "2rem",
        borderRadius: "15px",
        maxWidth: 280,
        borderColor: "#FF8C7D",
      }}
      cover={
        <Flex
          justify="center"
          align="center"
          style={{
            height: 180,
            width: "100%",
            backgroundColor: "#FF8C7D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
          }}
        >
          <img alt="example" src={ChatbotImage} width="140px" />
        </Flex>
      }
    >
      <div className="card-content">
        <Flex justify="space-between">
          <Text
            style={{
              fontFamily: "Outfit",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {agent?.name}
          </Text>
          <div
            style={{
              width: "auto",
              // height: "15px",
              padding: "2px 15px",
              // paddingLeft: "10px",
              // paddingRight: "10px",
              borderRadius: "15px",
              backgroundColor:
                agent?.status === "active"
                  ? "#49D917"
                  : agent?.status === "inactive"
                  ? "#FF8C7D"
                  : agent?.status === "saved"
                  ? "#1d5ed6"
                  : "#1d5ed6",
              color: "white",
              fontFamily: "Outfit",
            }}
          >
            {agent?.status}
          </div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
                width: "15px",
                height: "auto",
                padding: "0px 0px",
                boxShadow: "none",
              }}
            >
              <img src={MenuIcon} width="20px" />
            </Button>
          </Dropdown>
        </Flex>
        <Flex justify="space-between" style={{ marginTop: "1rem" }}>
          <Text style={{ fontFamily: "Outfit" }}>Messages Usage</Text>
          <Text style={{ fontFamily: "Outfit" }}>
            {agent?.msgsUsed}/{agent?.msgsAllowed}
          </Text>
        </Flex>
        <Flex justify="space-between" style={{ marginTop: "1rem" }}>
          <Text style={{ fontFamily: "Outfit" }}>Characters Usage</Text>
          <Text style={{ fontFamily: "Outfit" }}>
            {agent?.charsUsed}/{agent?.charsAllowed}
          </Text>
        </Flex>
        <Flex justify="space-between" style={{ marginTop: "1rem" }}>
          <Text style={{ fontFamily: "Outfit" }}>Chat Responses</Text>
          <Text style={{ fontFamily: "Outfit" }}>{agent?.chatResponses}</Text>
        </Flex>
        <Flex justify="space-between" style={{ marginTop: "1rem" }}>
          <Dropdown
            menu={{
              customizeButtonDropdownItems,
            }}
            placement="bottomRight"
            arrow
          >
            <Button
              style={{
                backgroundColor: "#62D2E9",
                border: "none",
                // width: "15px",
                height: "auto",
                padding: "5px 20px",
                boxShadow: "none",
                fontFamily: "Outfit",
                borderRadius: "15px",
                color: "white",
              }}
            >
              Customize
            </Button>
          </Dropdown>
          <Button
            text={"See Details"}
            style={{
              backgroundColor: "white",
              // width: "15px",
              height: "auto",
              padding: "5px 20px",
              boxShadow: "none",
              fontFamily: "Outfit",
              borderRadius: "15px",
              color: "#000000",
              border: "1px solid #62D2E9",
            }}
          >
            See Details
          </Button>
        </Flex>
      </div>
    </Card>
  );
};
