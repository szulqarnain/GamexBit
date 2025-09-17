import { FaArrowUp } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-[24px]">
      <div className="user-withdrawal-card1 w-full">
        <div className="flex flex-col gap-[24px]">
          <p className="bd-nrm-med font-[500px] text-[16px] text-[#8E8E8E] leading-[24px]">
            Available Balance
          </p>
          <p className="font-bold text-[32px] leading-[32px] tracking-[0%] text-[#1D1D1D]">
            $500
          </p>
          <button className="flex w-[192px] cursor-pointer items-center justify-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]">
            <FaArrowUp className="w-[13.33] h-[13.33] " />
            <span>Withdrawals</span>
          </button>
        </div>
      </div>
      <div className="user-withdrawal-card1 w-full ">
        <div className="flex flex-col gap-[24px]">
          <p className="bd-nrm-med font-[500px] text-[16px] text-[#8E8E8E] leading-[24px]">
            Withdrawals
          </p>
          <p className="font-bold text-[32px] leading-[32px] tracking-[0%] text-[#1D1D1D]">
            $10,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
