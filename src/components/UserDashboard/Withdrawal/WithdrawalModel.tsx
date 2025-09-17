import { VscClose } from "react-icons/vsc";
import DropDown from "./DropDown";
import { useState } from "react";
import TetherIcon from "../../../assets/icons/Tether.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface cryptoOption {
  text: string;
  svg?: string;
}

interface networkOption {
  text: string;
  svg?: string;
}

const cryptoOptions = [
  {
    svg: TetherIcon,
    text: "USDT - 1",
  },
  {
    svg: TetherIcon,
    text: "USDT - 2",
  },
  {
    svg: TetherIcon,
    text: "USDT - 3",
  },
];

const networkOptions = [
  {
    text: "Tron (TRC20) - 1",
  },
  {
    text: "Tron (TRC20) - 1",
  },
  {
    text: "Tron (TRC20) - 1",
  },
];

interface WithdrawalModelProps {
  setShowWithdrawalModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const WithdrawalModel = ({ setShowWithdrawalModel }: WithdrawalModelProps) => {
  const [cryptoSelectedValue, setCryptoSelectedValue] =
    useState<cryptoOption | null>({
      svg: TetherIcon,
      text: "USDT - 1",
    });

  const [networkSelectedValue, setNetworkSelectedValue] =
    useState<networkOption | null>({
      text: "Tron (TRC20) - 1",
    });

  return (
    <div className="fixed inset-0 flex md:items-center items-end justify-center bg-[#00000099] backdrop-blur-[3px]">
      <div className="md:h-[80%] h-[85%] md:w-[584px] w-full overflow-y-scroll rounded-[16px] md:p-[32px] py-[32px] px-[24px] bg-[#FFFFFF] no-scrollbar">
        <div className="flex items-center justify-between">
          <p className="font-[700] text-[24px] leading-[24px]">Withdrawals</p>
          <VscClose
            onClick={() => setShowWithdrawalModel(false)}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
        <div className="mt-[40px] flex flex-col gap-[24px] ">
          <div className="flex flex-col gap-[5px]">
            <label className="bd-nrm-med text-[#8E8E8E]">Crypto</label>
            <DropDown
              selectedValue={cryptoSelectedValue}
              setSelectedValue={setCryptoSelectedValue}
              options={cryptoOptions}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center justify-between">
              <p className="bd-nrm-med text-[#8E8E8E]">Amount</p>
              <div className="flex items-center gap-[12px]">
                <p className="bd-sm-reg text-[#8E8E8E]">Available:</p>
                <p className="bd-sm-reg text-[#1D1D1D]">500 USDT</p>
                <img
                  src={TetherIcon}
                  className="h-[24px] w-[24px]"
                  alt="TetherIcon"
                />
              </div>
            </div>
            <div className="relative">
              <input
                className="h-[60px] rounded-[12px] border border-[#E5E5E5] py-[14px] px-[16px] bg-white w-full pr-[50px]"
                placeholder="Enter amount"
                value={100}
              />
              <p className="bd-nrm-reg absolute right-[16px] top-1/2 -translate-y-1/2 text-[#2DC7FF] cursor-pointer">
                MAX
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="bd-nrm-med text-[#8E8E8E]">Network</label>
            <DropDown
              selectedValue={networkSelectedValue}
              setSelectedValue={setNetworkSelectedValue}
              options={networkOptions}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex flex-col gap-[5px]">
              <label className="bd-nrm-med text-[#8E8E8E]">
                Wallet Address
              </label>
              <div className="relative">
                <input
                  className="h-[60px] rounded-[12px] border border-[#E5E5E5] py-[14px] px-[16px] bg-white w-full pr-[50px]"
                  placeholder="Enter amount"
                  value="TL5x7z8n4eX2Y3q1vR9sW6bUcA1dM2kLpN"
                />
                <p className="bd-nrm-reg absolute right-[16px] top-1/2 -translate-y-1/2 text-[#2DC7FF] cursor-pointer">
                  PASTE
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-[12px] bd-nrm-med text-[#8E8E8E]">
              <IoIosInformationCircleOutline />
              <p>Minimum Withdrawal 5 USDT</p>
            </div>
          </div>
          <button className="h-[60px] cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModel;
