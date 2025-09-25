import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";

import { FiUsers } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { LuCrown } from "react-icons/lu";
import Diamand from "../../../assets/icons/diamond.svg";

const PredictSubCards = () => {
  return (
    <div className="flex items-center md:gap-[32px]">
      <div className="rounded-[12px] border-[1px] border-[rgb(var(--border))] md:p-[24px] p-[16px] w-full flex flex-col gap-[32px] md:rounded-r-[12px] rounded-r-[0px] ">
        <div className="flex md:flex-col flex-row md:justify-start justify-between md:gap-[32px]">
          <div className="flex flex-col md:gap-[16px] justify-center items-center md:order-0 order-2">
            <div className="flex items-center gap-[8px] ">
              <IoMdArrowUp className="md:w-[24px] md:h-[24px] w-[18px] h-[18px] text-[#953BFF]" />
              <p className="bd-lrg-med [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
                UP
              </p>
            </div>
            <p className="font-[700] md:text-[40px] text-[24px] leading-[40px] [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
              49%
            </p>
          </div>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-center gap-[8px]">
              <FiUsers className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1,505
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <RxCross2 className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1:2.13
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img
                src={Diamand}
                alt="Diamand"
                className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]"
              />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">12</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <LuCrown className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">980</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <input
            defaultValue={20}
            type="text"
            className="h-[60px] rounded-[12px] border-[2px] border-[rgb(var(--border))] w-full text-[rgb(var(--primary-text))] px-[16px]"
          />
          <button className="user-withdrawal-btn h-[40px] border-[0.4px] px-[12px] py-[8px] text-white ml-[-60px] cursor-pointer ">
            Up
          </button>
        </div>
      </div>
      <div className="rounded-[12px] border-[1px] border-[rgb(var(--border))] md:p-[24px] p-[16px] w-full flex flex-col gap-[32px] md:rounded-l-[12px] rounded-l-[0px]">
        <div className="flex md:flex-col flex-row md:justify-start justify-between md:gap-[32px]">
          <div className="flex flex-col md:gap-[16px] justify-center items-center ">
            <div className="flex items-center gap-[8px] ">
              <IoArrowDownOutline className="md:w-[24px] md:h-[24px] w-[18px] h-[18px] text-[#953BFF]" />
              <p className="bd-lrg-med [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
                Down
              </p>
            </div>
            <p className="font-[700] md:text-[40px] text-[24px] leading-[40px] [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
              51%
            </p>
          </div>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-center gap-[8px]">
              <FiUsers className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1,505
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <RxCross2 className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1:2.13
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <img
                src={Diamand}
                alt="Diamand"
                className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]"
              />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">12</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <LuCrown className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">980</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <input
            defaultValue={5}
            type="text"
            className="h-[60px] rounded-[12px] border-[2px] border-[rgb(var(--border))] w-full text-[rgb(var(--primary-text))] px-[16px]"
          />
          <button className="user-withdrawal-btn h-[40px] border-[0.4px] px-[12px] py-[8px] text-white ml-[-80px] cursor-pointer ">
            Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictSubCards;
