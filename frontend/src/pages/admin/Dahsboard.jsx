import Chart from "react-apexcharts";
import React, { useState } from "react";
import DashboardStats from "../../Components/admin/dashboard.stats";
import DashboardGraph from "../../Components/admin/dashboard.Graph";
import { Box, Heading } from "@chakra-ui/react";
const Dahsboard = () => {

  return (
    <Box width={"100%"} border="1px solid green">
      <Heading>Dahsboard</Heading>
      <DashboardStats/>
     <DashboardGraph/>
    </Box>
  );
}
export default Dahsboard