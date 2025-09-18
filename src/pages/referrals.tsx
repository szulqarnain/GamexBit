import ReferralsRewards from "../components/UserDashboard/Referals/ReferalsRewards";
import InviteReferals from "../components/UserDashboard/Referals/InviteReferals";
import DashboardTable from "../components/Common/DashboardTable.tsx";
import ReferalModal from "../components/UserDashboard/Referals/ReferalModal";
import { useState } from "react";
import DepositeCards from "../components/UserDashboard/Deposits/DepositeCards";

export default function Referrals() {
    const headers = [
    { key: "UID", label: "UID", className: "text-[#8E8E8E] text-left" },
    { key: "RegisteredTime", label: "Registered Time (UTC)", className: "text-[#8E8E8E] text-left pl-[95px]" },
    { key: "PointsEarned", label: "Points Earned", className: "text-[#8E8E8E] text-left pl-[125px]" },
    { key: "Status", label: "Status", className: "text-[#8E8E8E] text-left pl-[125px]" },
  ];

  const data = [
    {
      UID: { text:"1***7", className: "text-left pr-[270px]"},
      RegisteredTime: { text: "2025 -01-20 14:30", className: "text-left"},
      PointsEarned: { text: "600 Points", className: "text-left"},
      Status: { text: "Active", className: "text-left" },
    },
    {
      UID: { text:"1***7", className: "text-left pr-[270px]"},
      RegisteredTime: { text: "2025 -01-20 14:30", className: "text-left"},
      PointsEarned: { text: "0 Points", className: "text-left"},
      Status: { text: "Registered", className: "text-left"},
    },
    {
      UID: { text: "1***7", className: "text-left pr-[270px]"},
      RegisteredTime: { text: "2025 -01-20 14:30", className: "text-left"},
      PointsEarned: { text: "0 Points", className: "text-left"},
      Status: { text: "Registered", className: "text-left"},
    },
    {
      UID: { text: "1***7", className: "text-left pr-[270px]"},
      RegisteredTime: { text: "2025 -01-20 14:30", className: "text-left"},
      PointsEarned: { text: "100 Points", className: "text-left"},
      Status: { text: "Active", className: "text-left"},
    },
    {
      UID: { text: "1***7", className: "text-left pr-[270px]"},
      RegisteredTime: { text: "2025 -01-20 14:30", className: "text-left"},
      PointsEarned: { text: "50 Points", className: "text-left"},
      Status: { text: "Active", className: "text-left"},
    },
  ];
  const [showRefralModel, setShowRefralModel] = useState(false);
  return(
    <div className="w-auto h-auto fill-white">
      <div className="w-full h-auto flex flex-col px-[32px] py-[73px] gap-[40px]">
        <div className="w-full h-auto gap-[24px] flex flex-col">
          <div className="w-full h-auto gap-[24px] flex flex-col lg:flex-row">
            <ReferralsRewards/>
             <InviteReferals setShowRefralModel={setShowRefralModel} />
        </div>
        </div>
        <div className="w-full max-w-[1192px] h-auto mt-[20px] gap-[24px]">
        <div className="lg:hidden">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <DepositeCards type="referral" />
        ))}
      </div>
      <div className="lg:block hidden">
            <DashboardTable headers={headers} data={data}  />
      </div>
          </div>
      </div>
      {showRefralModel && (
        <ReferalModal setShowRefralModel={setShowRefralModel} />
      )}
    </div>
  );
}
