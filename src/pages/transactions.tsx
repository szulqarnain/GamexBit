import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import AllTransaction from "../components/UserDashboard/transactions/AllTransaction";
import Withdrawal from "../components/UserDashboard/transactions/Withdrawal";
import Referrals from "../components/UserDashboard/transactions/referrals";
import RedeemCodes from "../components/UserDashboard/transactions/RedeemCodes";
import Game from "../components/UserDashboard/transactions/Game";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Transactions Page
      </Typography>

      {/* MUI Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="transactions tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#881CFF", // custom indicator color
            height: "2px",              // make it 2px thick
          },
        }}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTab-root": {
            color: "black",            // all labels black
            fontWeight: 500,
            textTransform: "none",
          },
          "& .Mui-selected": {
            color: "#1D1D1D",            // keep active tab label black
          },
        }}
      >
        <Tab label="All Transactions" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Deposit" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Withdrawal" id="tab-2" aria-controls="tabpanel-2" />
        <Tab label="Referrals" id="tab-3" aria-controls="tabpanel-3" />
        <Tab label="Redeem Codes" id="tab-4" aria-controls="tabpanel-4" />
        <Tab label="Game" id="tab-5" aria-controls="tabpanel-5" />
      </Tabs>


      {/* Tab Panels */}
      <TabPanel value={activeTab} index={0}>
        <AllTransaction className="mt-4" />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Withdrawal className="mt-4" />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
       <Withdrawal className="mt-4" />
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
       <Referrals className="mt-4" />
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
       <RedeemCodes className="mt-4" />
      </TabPanel>
      <TabPanel value={activeTab} index={5}>
       <Game className="mt-4" />
      </TabPanel>
    </Box>
  );
}

// TabPanel Component
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
