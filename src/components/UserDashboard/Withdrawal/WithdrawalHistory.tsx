import TetherIcon from "../../../../public/Tether.svg";
import { IoMdLink } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";

const WithdrawalHistory = () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px] py-[20px] border-b-[1px] border-[#E5E5E5]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[12px] ">
            <img src={TetherIcon} alt="TetherIcon" />
            <div>
              <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#1D1D1D]">
                USDT
              </p>
              <p className="bd-sm-reg leading-[22px] text-[14px] text-[#8E8E8E]">
                2025-02-17 22:19
              </p>
            </div>
          </div>
          <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#1D1D1D]">
            180.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#8E8E8E]">
              Network
            </p>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#1D1D1D]">
              BSC/Bep20
            </p>
          </div>
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#8E8E8E] text-end">
              Address
            </p>
            <div className="flex gap-[16px] items-center bd-nrm-reg text-[16px] text-[#1D1D1D]">
              <p className="leading-[24px]">0x7...C92</p>
              <IoMdLink className="w-[20px] h-[20px]" />
              <MdOutlineContentCopy className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#8E8E8E]">
              Tx ID
            </p>
            <div className="flex gap-[16px] items-center bd-nrm-reg text-[16px] text-[#1D1D1D]">
              <p className="leading-[24px]">0x7...C92</p>
              <MdOutlineContentCopy className="w-[20px] h-[20px]" />
            </div>
          </div>
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#8E8E8E] text-end">
              Status
            </p>
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] bg-[#00B341] rounded-full"></div>
              <p className="bd-nrm-reg text-[16px] leading-[24px] text-[#1D1D1D]">
                Success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
