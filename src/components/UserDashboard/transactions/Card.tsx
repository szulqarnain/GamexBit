import React from 'react';
import { IoMdLink } from 'react-icons/io';
import { MdOutlineContentCopy } from 'react-icons/md';
import TetherUSDT from '../../../assets/images/tether-usdt.png.png'; // Adjusted path to match AllTransaction

interface CardProps {
  type?: string;
  coin?: string;
  date?: string;
  amount?: string | number;
  network?: string;
  address?: string;
  txId?: string;
  status?: 'Success' | 'Pending' | 'Failed';
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  type = 'Deposit',
  coin = 'USDT',
  date = '2025-02-17 22:19',
  amount = '180.00',
  network = 'TRC20',
  address = '0x7...C92',
  txId = '0x7...C92',
  status = 'Success',
  icon,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 py-5 border-b border-[rgb(var(--border))]">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={TetherUSDT} alt="TetherUSDT" className="w-8 h-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  {icon}
                </span>
                <p className="bd-nrm-reg text-base text-[rgb(var(--primary-text))]">
                  {type}
                </p>
              </div>
              <p className="bd-nrm-reg text-base text-[rgb(var(--primary-text))]">
                {coin}
              </p>
              <p className="bd-sm-reg text-sm text-[rgb(var(--secondary-text))]">
                {date}
              </p>
            </div>
          </div>
          <p className="bd-nrm-reg text-base text-[rgb(var(--primary-text))] text-right">
            {amount} USDT
          </p>
        </div>

        {/* Network & Address */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm text-[rgb(var(--secondary-text))]">Network</p>
            <p className="text-base text-[rgb(var(--primary-text))]">{network}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[rgb(var(--secondary-text))]">Address</p>
            <div className="flex items-center justify-end gap-2 text-base text-[rgb(var(--primary-text))]">
              <p>{address}</p>
              <IoMdLink
                className="w-5 h-5 cursor-pointer hover:text-gray-700"
                onClick={() => window.open(`https://tronscan.org/#/transaction/${txId}`, '_blank')}
              />
              <MdOutlineContentCopy
                className="w-5 h-5 cursor-pointer hover:text-gray-700"
                onClick={() => navigator.clipboard.writeText(address)}
              />
            </div>
          </div>
        </div>

        {/* Tx ID & Status */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm text-[rgb(var(--secondary-text))]">Tx ID</p>
            <div className="flex items-center gap-2 text-base text-[rgb(var(--primary-text))]">
              <p>{txId}</p>
              <MdOutlineContentCopy
                className="w-5 h-5 cursor-pointer hover:text-gray-700"
                onClick={() => navigator.clipboard.writeText(txId)}
              />
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[rgb(var(--secondary-text))]">Status</p>
            <div className="flex items-center justify-end gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  status === 'Success'
                    ? 'bg-[#00B341]'
                    : status === 'Pending'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              ></div>
              <p className="text-base text-[rgb(var(--primary-text))]">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;