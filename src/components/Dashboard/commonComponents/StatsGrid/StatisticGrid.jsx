// StatisticGrid.js
import { Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import classes from './StatisticGridIcon.css';
import SparkleChart from '../Charts/SparkleChart';
import { HStack } from 'rsuite';
import { useContext, useEffect, useState } from 'react';
import { ENDPOINTS } from '../../../../utils/apiConfig';
import { ApplicationContext } from '../../../../context/ApplicationContext';

export function StatisticGrid() {
  const { setKycStatus } = useContext(ApplicationContext);
  const dash_index = ENDPOINTS.DASH_BOARD;
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [dashboardIndex, setDashboardIndex] = useState({});
  const [mainBalance, setMainBalance] = useState("");
  const [totalSettalment, setTotalSettalment] = useState("");
  
  useEffect(() => {
    dashboardIndexData();
  }, [sessionid]);

  const dashboardIndexData = async () => {
    setLoader(true);
    try {
      const response = await fetch(dash_index, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionid: sessionid,
        }),
      });

      const resData = await response.json();
      setLoader(false);

      if (resData.mess) {
        if (resData.mess.StatusCodes === "DI00") {
          setDashboardIndex(resData.mess);
          setMainBalance(resData.mess.mainbalance);
          setTotalSettalment(resData.mess.settelment);
          setKycStatus(resData.mess.kyc_status);
        } else {
          // Handle error
        }
        if (resData.mess.kyc_status === "N") {
          const myModal = new window.bootstrap.Modal(
            document.getElementById("docsReqModal")
          );
          myModal.show();
        }
      } else {
        console.error("Unexpected response structure:", resData);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error :", error);
    }
  };

  // Sample trend data, update with actual values from the state
  const positiveTrend = [10, 20, 40, 20, 40, 10, 50];  // Replace with dynamic data
  const negativeTrend = [50, 40, 20, 40, 20, 40, 10];  // Replace with dynamic data
  const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];  // Replace with dynamic data

  const data = [
    { title: 'Received', value: mainBalance, diff: 34, trend: positiveTrend },
    { title: 'Settled', value: totalSettalment, diff: -13, trend: negativeTrend },
    { title: 'Pending', value: '745', diff: 18, trend: neutralTrend },
  ];

  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <div className='col-lg-5 col-md-5 col-auto' key={stat.title}>
        <HStack>
          <Paper withBorder p="md" radius="md">
            <Group justify="apart">
              <SparkleChart trendData={stat.trend} />
              <div>
                <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
                  {stat.title}
                </Text>
                <Text fw={700} fz="xl">
                  ₹ {stat.value}
                </Text>
              </div>
              <ThemeIcon
                color="gray"
                variant="light"
                style={{
                  color: stat.diff > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
                }}
                size={38}
                radius="md"
              >
                <DiffIcon size="1.8rem" stroke={1.5} />
              </ThemeIcon>
            </Group>
            <Text c="dimmed" fz="sm" mt="md">
              <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
                {stat.diff}%
              </Text>{' '}
              {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
            </Text>
          </Paper>
        </HStack>
      </div>
    );
  });

  return (
    <HStack className='col-lg-12 col-md-12 col-auto'>
      <div className={classes.root}>
        <HStack>
          <div className='col-lg-9 col-md-9 col-auto'>
            <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
          </div>
          <div className="col-lg-2 col-md-2 col-auto">
            <div className="img-bg">
              <img
                src="https://i.ibb.co/Fx8FHCd/account-card-img.png"
                alt="account-card-img"
              />
            </div>
          </div>
        </HStack>
      </div>
    </HStack>
  );
}

export default StatisticGrid;
