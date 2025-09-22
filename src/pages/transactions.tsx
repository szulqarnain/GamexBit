import { useState } from "react";
import AllTransaction from "../components/UserDashboard/transactions/AllTransaction";
import Deposit from "../components/UserDashboard/transactions/Deposit";
import Withdrawal from "../components/UserDashboard/transactions/Withdrawal";
import Referrals from "../components/UserDashboard/transactions/Referrals";
import RedeemCodes from "../components/UserDashboard/transactions/RedeemCodes";
import Game from "../components/UserDashboard/transactions/Game";
// import WithdrawalHistory from "../components/UserDashboard/transactions/WithdrawalHistory";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Transactions" },
    { id: "deposit", label: "Deposit" },
    { id: "withdrawal", label: "Withdrawal" },
    { id: "referrals", label: "Referrals" },
    { id: "redeem", label: "Redeem Codes" },
    { id: "game", label: "Game" },
  ];

  return (
    <div className="flex-1 min-w-0">
      {/* Tabs Navigation */}
      <div className="flex  flex-wrap border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-colors duration-200
              ${
                activeTab === tab.id
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="">
        {activeTab === "all" && <AllTransaction />}
        {activeTab === "deposit" && <div><Deposit /></div>}
        {activeTab === "withdrawal" && <Withdrawal />}
        {activeTab === "referrals" && <div><Referrals /></div>}
        {activeTab === "redeem" && <div><RedeemCodes /></div>}
        {activeTab === "game" && <div><Game /></div>}
      </div>
    </div>
  );
}
