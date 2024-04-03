import React from "react";
import { Button } from "antd";

export const FilterButton = ({ filterText }) => {
  return (
    <Button
      style={{
        width: "auto",
        height: "auto",
        borderRadius: "25px",
        backgroundColor: "#white",
        color: "black",
        padding: "10px",
        fontFamily: "Outfit",
        border: "2px solid #62D2E9",
      }}
    >
      {filterText} Agents
    </Button>
  );
};
