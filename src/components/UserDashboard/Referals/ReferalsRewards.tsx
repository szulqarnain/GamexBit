import React from "react";
import Diamond from "../../../assets/icons/Diamond.svg";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlinePercentage  } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";

const ReferalsRewards: React.FC = () => {
  return (
    <div className="w-full lg:w-[584px] lg:h-auto h-[520px] flex flex-col gap-[40px] p-[32px] withDrawBanner">
      <div className="w-[520px] h-auto flex flex-col gap-[32px]">
        <p className="text-[#8E8E8E] bd-nrm-med">Referral Rewards</p>
        <div className="w-[520px] h-[158px] gap-[32px] flex flex-col">
          <div className="w-[520px] h-auto gap-[26px] flex flex-col lg:flex-row">
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
          <div className="w-[520px] h-auto gap-[26px] flex flex-col lg:flex-row">
            <div className="w-[248px] h-[63px] gap-[16px] flex flex-col">
              <div className="w-[197px] h-[24px] gap-[8px] flex flex-row">
                 <AiOutlinePercentage color="#953BFF" className="w-[24px] h-[24px]"/>
                <p className="bd-lrg-med">My Commission Rate</p>
              </div>
              <p className="heading-4">0.0001</p>
            </div>
            <div className="w-[247px] h-[63px] gap-[16px] flex flex-col">
              <div className="w-[164px] h-[24px] gap-[8px] flex flex-row">
                <MdOutlinePeople color="#953BFF" className="w-[24px] h-[24px]"/>
                <p className="bd-lrg-med">Total Referrals</p>
              </div>
              <p className="heading-4">30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-[20px] pt-[170px] w-full flex">
        <button className="flex flex-row justify-center lg:w-auto w-full h-[40px] items-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-referal-btn text-[#FFFFFF]">
          <FaArrowUp className="w-[13.33] h-[13.33] " color="black" />
          <span>Withdrawals Points</span>
        </button>
      </div>
    </div>
  );
};

export default ReferalsRewards;
