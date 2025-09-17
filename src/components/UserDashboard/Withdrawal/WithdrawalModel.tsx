import { VscClose } from "react-icons/vsc";

const WithdrawalModel = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000099] backdrop-blur-[3px]">
      <div className="h-[80%] w-[35%] rounded-[16px] p-[32px] bg-[#FFFFFF]">
        <div className="flex items-center justify-between">
          <p className="font-[700] text-[24px] leading-[24px]">Withdrawals</p>
          <VscClose className="w-[24px] h-[24px]" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WithdrawalModel;
