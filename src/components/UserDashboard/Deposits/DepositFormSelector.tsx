// src/components/UserDashboard/Deposits/DepositSelectorForm.tsx

import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useTheme } from "../../../context/ThemeContext";
import toast from "react-hot-toast";

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
  const { darkMode } = useTheme();

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success("Copied");
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <div className="w-full h-auto gap-[40px]">
      {/* Select Coin */}
      <div className="flex flex-col gap-[12px] w-full">
        <p className="text-[#8E8E8E] bd-nrm-med">Select Coin</p>
        <div className="relative w-full h-[60px]">
          <div
            onClick={() => setCoinDropdownOpen(!coinDropdownOpen)}
            className="flex items-center justify-between px-[16px] py-[12px] border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--primary-text))] rounded-[12px] cursor-pointer"
          >
            <div className="flex items-center gap-[12px]">
              <img
                src={selectedCoin.icon}
                className="w-[32px] h-[32px]"
                alt={selectedCoin.label}
              />
              <span className="text-[rgb(var(--primary-text))]">
                {selectedCoin.label}
              </span>
            </div>
            {coinDropdownOpen ? (
              <MdOutlineKeyboardArrowDown className="rotate-180 transition-transform duration-200 w-[24px] h-[24px]" />
            ) : (
              <MdOutlineKeyboardArrowDown className="w-[24px] h-[24px]" />
            )}
          </div>

          {coinDropdownOpen && (
            <div className="absolute mt-2 w-full max-h-[200px] overflow-auto border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--primary-text))] rounded-[12px] shadow-lg z-10">
              {coinOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCoin(option);
                    setCoinDropdownOpen(false);
                  }}
                  className={`flex items-center gap-[12px] px-[16px] py-[10px] cursor-pointer  ${
                    darkMode ? "" : "hover:bg-[rgb(var(--border))]"
                  } ${
                    option.label === selectedCoin.label
                      ? "bg-[rgb(var(--border))]"
                      : ""
                  }`}
                >
                  <img
                    src={option.icon}
                    className="w-[24px] h-[24px]"
                    alt={option.label}
                  />
                  <span className={"text-[rgb(var(--primary-text))]"}>
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Select Network */}
      <div className="flex flex-col gap-[12px] w-full mt-[20px]">
        <p className="text-[#8E8E8E] bd-nrm-med">Select Network</p>
        <div className="relative w-full h-[60px]">
          <div
            onClick={() => setNetworkDropdownOpen(!networkDropdownOpen)}
            className="flex items-center justify-between px-[16px] py-[12px] border  border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--primary-text))] rounded-[12px] cursor-pointer"
          >
            <span className="text-[rgb(var(--primary-text))]">
              {selectedNetwork.label}
            </span>
            {networkDropdownOpen ? (
              <MdOutlineKeyboardArrowDown className="rotate-180 transition-transform duration-200 w-[24px] h-[24px]" />
            ) : (
              <MdOutlineKeyboardArrowDown className="w-[24px] h-[24px]" />
            )}
          </div>

          {networkDropdownOpen && (
            <div className="absolute mt-2 w-full max-h-[200px] overflow-auto border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--primary-text))] rounded-[12px] shadow-lg z-10">
              {networkOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedNetwork(option);
                    setNetworkDropdownOpen(false);
                  }}
                  className={`px-[16px] py-[10px] cursor-pointer ${
                    darkMode ? "" : "hover:bg-[rgb(var(--border))]"
                  } ${
                    option.label === selectedNetwork.label
                      ? "bg-[rgb(var(--border))]"
                      : ""
                  }`}
                >
                  <span className={"text-[rgb(var(--primary-text))]"}>
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Deposit Address */}
      <div className="flex flex-col gap-[12px] w-full mt-[20px]">
        <p className="text-[#8E8E8E] bd-nrm-med">Deposit Address</p>
        <div className="relative">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter address"
            className="w-full h-[60px] px-[16px] border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--primary-text))] rounded-[12px]  outline-none"
          />
          <p
            className="bd-nrm-reg absolute right-[16px] top-1/2 -translate-y-1/2 text-[#2DC7FF] cursor-pointer"
            onClick={() => {
              if (amount) {
                handleCopy(amount);
              }
            }}
          >
            COPY
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepositSelectorForm;
