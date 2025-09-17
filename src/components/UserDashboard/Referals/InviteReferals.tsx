import React from "react";
import Diamond from "../../../assets/icons/Diamond.svg";

const InviteReferals: React.FC = () => {
  return (
    <div className="w-[584px] h-[396px] flex flex-col gap-[40px] p-[32px] withDrawBanner">
      <p className="text-[#8E8E8E] bd-nrm-med">Invite Referral</p>
      <div className="w-[520px] h-[200px] flex flex-col gap-[32px]">
        <div className="w-[520px] h-[158px] gap-[32px] flex flex-col">
          <div className="w-[520px] h-[63px] gap-[26px] flex flex-row">
            <div className="w-[247px] h-[63px] gap-[16px] flex flex-col">
              <div className="w-[131px] h-[24px] gap-[8px] flex flex-row">
                <img src={Diamond} className="w-[24px] h-[24px]" />
                <p className="bd-lrg-med">Total Points</p>
              </div>
              <p className="heading-4">1000</p>
            </div>
            <div className="w-[247px] h-[63px] gap-[16px] flex flex-col">
              <div className="w-[164px] h-[24px] gap-[8px] flex flex-row">
                <img src={Diamond} className="w-[24px] h-[24px]" />
                <p className="bd-lrg-med">Available Points</p>
              </div>
              <p className="heading-4">100</p>
            </div>
          </div>
          <div className="w-[520px] h-[63px] gap-[26px] flex flex-row">
            <div className="w-[248px] h-[63px] gap-[16px] flex flex-col">
              <div className="w-[197px] h-[24px] gap-[8px] flex flex-row">
                <img src={Diamond} className="w-[24px] h-[24px]" />
                <p className="bd-lrg-med">My Commission Rate</p>
              </div>
              <p className="heading-4">0.0001</p>
            </div>
            <div className="w-[247px] h-[63px] gap-[16px] flex flex-col">
              <div className="w-[164px] h-[24px] gap-[8px] flex flex-row">
                <img src={Diamond} className="w-[24px] h-[24px]" />
                <p className="bd-lrg-med">Total Referrals</p>
              </div>
              <p className="heading-4">30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <button className="flex w-[190px] h-[40px] items-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]">
          <span>Enter Referal Code</span>
        </button>
      </div>
    </div>
  );
};

export default InviteReferals;
