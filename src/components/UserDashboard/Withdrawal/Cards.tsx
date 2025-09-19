import { FaArrowUp } from "react-icons/fa";

interface CardsModelProps {
  setShowWithdrawalModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cards = ({ setShowWithdrawalModel }: CardsModelProps) => {
  return (
    <div className="flex lg:flex-row flex-col gap-[24px]">
      <div className="user-withdrawal-card1 w-full md:p-[32px] p-[24px]">
        <div className="flex flex-col md:gap-[20px] gap-[12px]">
          <p className="bd-nrm-med text-[rgb(var(--secondary-text))] [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
            Available Balance
          </p>
          <p className="font-[700] text-[2rem] leading-[32px] tracking-[0%]  text-[rgb(var(--primary-text))] [text-box-trim:cap-height] [text-box-edge:cap] ">
            $500
          </p>
          <button
            onClick={() => setShowWithdrawalModel(true)}
            className="flex w-[192px] h-[40px] cursor-pointer items-center justify-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]"
          >
            <FaArrowUp className="w-[13.33] h-[13.33] " />
            <span>Withdrawals</span>
          </button>
        </div>
      </div>
      <div className="user-withdrawal-card1 w-full md:p-[32px] p-[24px]">
        <div className="flex flex-col md:gap-[14px] gap-[12px]">
          <p className="bd-nrm-med text-[rgb(var(--secondary-text))] [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
            Total Withdrawn
          </p>
          <p className="font-[700] text-[2rem] leading-[32px] tracking-[0%]  text-[rgb(var(--primary-text))] [text-box-trim:cap-height] [text-box-edge:cap] ">
            $10,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
