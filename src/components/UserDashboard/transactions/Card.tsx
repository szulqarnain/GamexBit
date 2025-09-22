import React from "react";
import { IoMdLink } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import TetherUSDT from "../../../assets/images/tether-usdt.png.png";

interface CardProps {
  type: string;   // 👈 Add this
  coin?: string;
  date?: string;
  amount?: string | number;
  network?: string;
  address?: string;
  txId?: string;
  status: "Success" | "Pending" | "Failed";
  icon: React.ReactNode;   // 👈 add this
}

const Card: React.FC<CardProps> = ({
  coin = "USDT",
  date = "2025-02-17 22:19",
  amount = "180.00",
  network = "TRC20",
  address = "0x7...C92",
  txId = "0x7...C92",
  status = "Success",
}) => {
  return (
    <div>
      <div className="flex flex-col gap-[20px] py-[20px] border-b-[1px] border-[rgb(var(--border))]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[12px]">
            <img src={TetherUSDT} alt="TetherUSDT" className="object-contain" />
            <div>
              <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                {coin}
              </p>
              <p className="bd-sm-reg leading-[22px] text-[14px] text-[rgb(var(--secondary-text))]">
                {date}
              </p>
            </div>
          </div>
          <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
            {amount}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))]">
              Network
            </p>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
              {network}
            </p>
          </div>
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))] text-end">
              Address
            </p>
            <div className="flex gap-[16px] items-center bd-nrm-reg text-[16px] text-[rgb(var(--primary-text))]">
              <p className="leading-[24px]">{address}</p>
              <IoMdLink
                className="w-[20px] h-[20px] cursor-pointer hover:text-gray-700"
                title="Open transaction link"
                onClick={() =>
                  window.open(
                    `https://tronscan.org/#/transaction/${txId}`,
                    "_blank"
                  )
                }
              />
              <MdOutlineContentCopy
                className="w-[20px] h-[20px] cursor-pointer hover:text-gray-700"
                title="Copy address"
                onClick={() => navigator.clipboard.writeText(address)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))]">
              Tx ID
            </p>
            <div className="flex gap-[16px] items-center bd-nrm-reg text-[16px] text-[rgb(var(--primary-text))]">
              <p className="leading-[24px]">{txId}</p>
              <MdOutlineContentCopy
                className="w-[20px] h-[20px] cursor-pointer hover:text-gray-700"
                title="Copy TXID"
                onClick={() => navigator.clipboard.writeText(txId)}
              />
            </div>
          </div>
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))] text-end">
              Status
            </p>
            <div className="flex items-center gap-[8px]">
              <div
                className={`w-[8px] h-[8px] rounded-full ${status.toLowerCase() === "success"
                  ? "bg-[#00B341]"
                  : status.toLowerCase() === "pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                  }`}
              ></div>
              <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;