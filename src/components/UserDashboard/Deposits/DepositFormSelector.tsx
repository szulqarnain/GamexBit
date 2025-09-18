// src/components/UserDashboard/Deposits/DepositSelectorForm.tsx

import React from "react";
import DownArrow from "../../../assets/icons/Vector.svg";

type Option = {
  label: string;
  icon?: string;
};

type DepositSelectorFormProps = {
  coinOptions: Option[];
  networkOptions: Option[];
  selectedCoin: Option;
  setSelectedCoin: any;
  coinDropdownOpen: boolean;
  setCoinDropdownOpen: (open: boolean) => void;
  selectedNetwork: Option;
  setSelectedNetwork: (option: Option) => void;
  networkDropdownOpen: boolean;
  setNetworkDropdownOpen: (open: boolean) => void;
  amount: string;
  setAmount: (value: string) => void;
};

const DepositSelectorForm: React.FC<DepositSelectorFormProps> = ({
  coinOptions,
  networkOptions,
  selectedCoin,
  setSelectedCoin,
  coinDropdownOpen,
  setCoinDropdownOpen,
  selectedNetwork,
  setSelectedNetwork,
  networkDropdownOpen,
  setNetworkDropdownOpen,
  amount,
  setAmount,
}) => {
  return (
    <div className="w-full lg:w-[554px] h-auto gap-[40px]">
      {/* Select Coin */}
      <div className="flex flex-col gap-[12px] w-full">
        <p className="text-[#8E8E8E] bd-nrm-med">Select Coin</p>
        <div className="relative w-full lg:w-[554px] h-[60px]">
          <div
            onClick={() => setCoinDropdownOpen(!coinDropdownOpen)}
            className="flex items-center justify-between px-[16px] py-[12px] border border-[#E5E5E5] rounded-[12px] cursor-pointer bg-white"
          >
            <div className="flex items-center gap-[12px]">
              <img
                src={selectedCoin.icon}
                className="w-[32px] h-[32px]"
                alt={selectedCoin.label}
              />
              <span className="text-[#333]">{selectedCoin.label}</span>
            </div>
            <img src={DownArrow} />
          </div>

          {coinDropdownOpen && (
            <div className="absolute mt-2 w-full max-h-[200px] overflow-auto bg-white border border-[#E5E5E5] rounded-[12px] shadow-lg z-10">
              {coinOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCoin(option);
                    setCoinDropdownOpen(false);
                  }}
                  className={`flex items-center gap-[12px] px-[16px] py-[10px] cursor-pointer hover:bg-gray-100 ${
                    option.label === selectedCoin.label ? "bg-gray-100" : ""
                  }`}
                >
                  <img
                    src={option.icon}
                    className="w-[24px] h-[24px]"
                    alt={option.label}
                  />
                  <span className="text-[#333]">{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Select Network */}
      <div className="flex flex-col gap-[12px] w-full lg:w-[554px] mt-[20px]">
        <p className="text-[#8E8E8E] bd-nrm-med">Select Network</p>
        <div className="relative w-full lg:w-[554px] h-[60px]">
          <div
            onClick={() => setNetworkDropdownOpen(!networkDropdownOpen)}
            className="flex items-center justify-between px-[16px] py-[12px] border border-[#E5E5E5] rounded-[12px] cursor-pointer bg-white"
          >
            <span className="text-[#333]">{selectedNetwork.label}</span>
            <img src={DownArrow} />
          </div>

          {networkDropdownOpen && (
            <div className="absolute mt-2 w-full lg:w-[554px] max-h-[200px] overflow-auto bg-white border border-[#E5E5E5] rounded-[12px] shadow-lg z-10">
              {networkOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedNetwork(option);
                    setNetworkDropdownOpen(false);
                  }}
                  className={`px-[16px] py-[10px] cursor-pointer hover:bg-gray-100 ${
                    option.label === selectedNetwork.label ? "bg-gray-100" : ""
                  }`}
                >
                  <span className="text-[#333]">{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Deposit Address */}
      <div className="flex flex-col gap-[12px] w-full lg:w-[554px] mt-[20px]">
        <p className="text-[#8E8E8E] bd-nrm-med">Deposit Address</p>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter address"
          className="w-full lg:w-[554px] h-[60px] px-[16px] border border-[#E5E5E5] rounded-[12px] text-[#333] bg-white outline-none"
        />
      </div>
    </div>
  );
};

export default DepositSelectorForm;
