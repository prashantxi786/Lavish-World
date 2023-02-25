import { Box } from "@chakra-ui/react"
import Chart from "react-apexcharts";
import React, { useState } from "react";
const DashboardGraph = () => {
    const [chartState, setChartState] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "series-2",
          data: [3, 10, 15, 31, 20, 40, 50, 100],
        },
        {
          name: "series-3",
          data: [13, 19, 25, 40, 80, 60, 35, 49],
        },
      ],
    });
    const [pieChart, setPieChart] = useState({
          
            series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
          }
            )
  return (
    <Box width={"100%"} mt={10} mb={5}>
      <Box display={"flex"}  justifyContent="space-evenly">
        <Chart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          width="600"
        />
        <Chart
          options={chartState.options}
          series={chartState.series}
          type="line"
          width="400"
        />
      </Box>
      <Chart
        options={pieChart.options}
        series={pieChart.series}
        type="pie"
        width="500"
      />
    </Box>
  );
}
export default DashboardGraph