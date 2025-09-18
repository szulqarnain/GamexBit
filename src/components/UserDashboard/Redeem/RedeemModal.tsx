import { VscClose } from "react-icons/vsc";

interface RedeemModelProps {
  setShowRedeemModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const RedeemModal = ({ setShowRedeemModel }: RedeemModelProps) => {
  return (
    <div className="fixed inset-0 flex md:items-center items-end justify-center bg-[#00000099] backdrop-blur-[3px]">
      <div className="md:w-[584px] w-full overflow-y-scroll rounded-[16px] md:p-[32px] py-[32px] px-[24px] bg-[#FFFFFF] [background:var(--bg-secondary)] border-1 border-[rgb(var(--border))]  no-scrollbar">
        <div className="flex items-center justify-between">
          <p className="font-[700] text-[24px] leading-[24px] text-[rgb(var(--primary-text))]">
            Apply Code
          </p>
          <VscClose
            onClick={() => setShowRedeemModel(false)}
            className="w-[24px] h-[24px] cursor-pointer text-[rgb(var(--primary-text))]"
          />
        </div>
        <div className="mt-[40px] flex flex-col gap-[24px] ">
          <div className="flex flex-col gap-[5px]">
            <label className="bd-nrm-med text-[rgb(var(--secondary-text))]">
              Redeem Codes
            </label>
            <div className="relative">
              <input
                className="h-[60px] rounded-[12px] border border-[rgb(var(--border))] py-[14px] px-[16px] bg-[rgb(var(--bg))] w-full pr-[50px] text-[rgb(var(--primary-text))]"
                placeholder="Enter amount"
                value="RTKLQ9PMZD38"
              />
              <p className="bd-nrm-reg absolute right-[16px] top-1/2 -translate-y-1/2 text-[#2DC7FF] cursor-pointer">
                PASTE
              </p>
            </div>
          </div>
          <button className="h-[60px] cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]">
            Redeem Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemModal;
