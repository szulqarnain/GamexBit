import { IoSettingsOutline } from "react-icons/io5";
import { PiClockCounterClockwise } from "react-icons/pi";

import { RxQuestionMark } from "react-icons/rx";

const GCHeaderIcons = () => {
  return (
    <div className="flex items-center gap-[10px] ">
      <div className="w-[40px] h-[40px]  rounded-[16px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]">
        <IoSettingsOutline className="w-[24px] h-[24px]" />
      </div>
      <div className="w-[40px] h-[40px]  rounded-[16px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]">
        <PiClockCounterClockwise className="w-[24px] h-[24px]" />
      </div>
      <div className="w-[40px] h-[40px]  rounded-[16px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]">
        <RxQuestionMark size={24} className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default GCHeaderIcons;
