import React from "react";
import { Button, Card, Flex, Typography, Dropdown, Grid, Row, Col } from "antd";
const { Text } = Typography;
import UpdateAccountIcon from "../assets/update-account-icon.png";
import CreateAgentIcon from "../assets/create-agent-icon.png";
import AgentTemplates from "../assets/agent-templates-icon.png";
import { DashboardActionsButtons } from "../components/dashboard-actions-buttons/DashboardActionsButtons";

import { FilterButton } from "../components/filter-button/FilterButton";
import { PlanBanner } from "../components/plan-banner/PlanBanner";

import { MyButton } from "../components/button/MyButton";
import { AgentCard } from "../components/agent-card/AgentCard";
import { agents } from "../constants";

const actionsButtons = [
  { text: "Update Account", icon: UpdateAccountIcon },
  { text: "Create Agent", icon: CreateAgentIcon },
  { text: "Agent Templates", icon: AgentTemplates },
];
const filterTexts = ["All", "Active", "Inactive", "OnTraining", "Saved"];
export const Dashboard = () => {
  return (
    <div style={{ margin: "10px 35px", backgroundColor: "white" }}>
      <Flex
        justify="space-between"
        style={{
          width: "100%",
          backgroundColor: "transparent",
          gap: 10,
          marginTop: 30,
        }}
      >
        {actionsButtons?.map((actionButton, index) => (
          <DashboardActionsButtons
            key={index}
            buttonText={actionButton.text}
            icon={actionButton.icon}
          />
        ))}
      </Flex>
      <PlanBanner />
      <Flex style={{ marginTop: "2rem", gap: 20 }}>
        {filterTexts?.map((filterText, index) => (
          <FilterButton key={index} filterText={filterText} />
        ))}
      </Flex>
      <Row gutter={[20, 20]} style={{ marginTop: "2rem" }}>
        {agents?.map((agent, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <AgentCard agent={agent} />
          </Col>
        ))}
      </Row>
      {/* <AgentCard /> */}
    </div>
  );
};
