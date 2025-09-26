import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";

import { FiUsers } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { LuCrown } from "react-icons/lu";
import Diamand from "../../../assets/icons/diamond.svg";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const PredictSubCards = () => {
  const [showConfirmationModal, setConfirmationModal] =
    useState<boolean>(false);

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
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <FiUsers className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
                <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100  transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Total Users
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1,505
              </p>
            </div>
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <RxCross2 className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Multiplier
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1:2.13
              </p>
            </div>
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <img
                  src={Diamand}
                  alt="Diamand"
                  className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Total amount
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">12</p>
            </div>
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <LuCrown className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Top position
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
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
          <button
            onClick={() => setConfirmationModal(true)}
            className="user-withdrawal-btn h-[40px] border-[0.4px] px-[12px] py-[8px] text-white ml-[-60px] cursor-pointer "
          >
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
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <FiUsers className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Total Users
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1,505
              </p>
            </div>
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <RxCross2 className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Multiplier
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">
                1:2.13
              </p>
            </div>
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <img
                  src={Diamand}
                  alt="Diamand"
                  className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Total amount
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
              <p className="bd-lrg-med text-[rgb(var(--primary-text))]">12</p>
            </div>
            <div className="flex items-center gap-[8px] group">
              <div className="relative ">
                <LuCrown className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] text-[#953BFF]" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="absolute bg-[#0C0C1E] text-white broder-[1px] border-[#242435] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] rounded-[16px] p-[16px] h-[41px] flex items-center justify-center min-w-max bottom-[33px] left-1/2 -translate-x-1/2 z-50">
                    Top position
                  </p>
                  <div className="h-[17.59px] w-[17.59px] broder-[1px] border-[#242435] rotate-45 absolute bg-[#0C0C1E] bottom-[30px] left-1/2 -translate-x-1/2 "></div>
                </div>
              </div>
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
          <button
            onClick={() => setConfirmationModal(true)}
            className="user-withdrawal-btn h-[40px] border-[0.4px] px-[12px] py-[8px] text-white ml-[-80px] cursor-pointer "
          >
            Down
          </button>
        </div>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal setConfirmationModal={setConfirmationModal} />
      )}
    </div>
  );
};

export default PredictSubCards;
