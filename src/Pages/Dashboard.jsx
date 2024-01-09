import React from "react";
import ProfileComponent from "../Components/Dashboard/ProfileComponent";
import TableDataSatu from "../Components/Dashboard/TableDataSatu";
import { Flex } from "antd";
import TableDataDua from "../Components/Dashboard/TableDataDua";
import TableDataTiga from "../Components/Dashboard/TableDataTiga";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Flex gap={10} vertical>
        <ProfileComponent />
        <TableDataSatu />
        <TableDataDua />
        <TableDataTiga />
      </Flex>
    </React.Fragment>
  );
};

export default Dashboard;
