import React from "react";
import { CustomMenu } from "../components/menu/CustomMenu";
import { NavBar } from "../components/navbar/NavBar";
import { Flex } from "antd";
import { Dashboard } from "../pages/Dashboard";

export const Layout = () => {
  return (
    <>
      <Flex>
        <CustomMenu></CustomMenu>
        <NavBar></NavBar>
      </Flex>
    </>
  );
};
