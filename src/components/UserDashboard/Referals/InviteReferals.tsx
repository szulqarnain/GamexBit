import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";

interface InviteReferalsProps {
  setShowRefralModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const InviteReferals: React.FC<InviteReferalsProps> = ({ setShowRefralModel }) => {
  const {darkMode} = useTheme();
  return (
    <div className="w-full h-auto flex flex-col gap-[40px] p-[32px] withDrawBanner">
        <p className="text-[#8E8E8E] bd-nrm-med">Invite Referral</p>
      <form>
        <div className="w-full h-[200px] gap-[32px] flex flex-col">
          <div className="w-full h-[84px] gap-[12px] flex flex-col">
            <p className="bd-nrm-med text-[#A8AEBA]">Your invite code</p>
            <div className="relative w-full h-[60px]">
              <input className={`w-full h-[60px] gap-auto px-[16px] border-[2px] ${darkMode ? ' border-[rgb(var(--border))]' : ''} text-[rgb(var(--primary-text))] rounded-[12px]`} value="GXB14S"/>
              <div className="absolute right-[16px] top-[20px]">
                <MdOutlineContentCopy className="text-[#A8AEBA]" />
              </div>
            </div>
          </div>
          <div className="w-full h-[84px] gap-[12px] flex flex-col">
            <p className="bd-nrm-med text-[#A8AEBA]">Your invite URL</p>
            <div className="relative w-full h-[60px]">
              <input className={`w-full h-[60px] gap-auto px-[16px] border-[2px] ${darkMode ? ' border-[rgb(var(--border))]' : ''} text-[rgb(var(--primary-text))] rounded-[12px]`} value="https://app.gamexbit.com/sponser?ref=AhmerIlyas"/>
              <div className="absolute right-[16px] top-[20px]">
                <MdOutlineContentCopy className="text-[#A8AEBA]" />
              </div>
            </div>
          </div>
        </div>
      </form>
        <button 
        className={`flex flex-row justify-center lg:w-[173px] w-full h-[40px] items-center gap-[8px] rounded-[8px] px-[12px] py-[8px] user-referal-btn text-[#FFFFFF] ${
          darkMode ? "border-0" : "border-[0.4px]"
        }`}
        onClick={() => setShowRefralModel(true)}>
          <span>Enter Referal Code</span>
        </button>
    </div>
  );
};

export default InviteReferals;
