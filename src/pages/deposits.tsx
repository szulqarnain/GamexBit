import React, { useState, useEffect } from "react";
import TetherIcon from "../assets/icons/Tether.svg";
import DownArrow from "../assets/icons/Vector.svg";
import QRcode from "../assets/icons/QR.svg";
import ContentCopy from "../assets/icons/content_copy.svg";
import ContentCopyGrey from "../assets/icons/content_copy_grey.svg";
import link from "../assets/icons/link.svg";
import DashboardTable from "../components/Common/DashboardTable.tsx";
import Pagination from "../components/Common/Pagination.tsx";
import QRBoard from "../components/UserDashboard/Deposits/QRBoard";
import DepositSelectorForm from "../components/UserDashboard/Deposits/DepositFormSelector";
import DepositeCards from "../components/UserDashboard/Deposits/DepositeCards";

// Add type definitions
interface CoinOption {
  label: string;
  icon: string;
}

interface NetworkOption {
  label: string;
}

interface TableData {
  [key: string]: any; // Index signature to fix the error
  Asset: {
    text: string;
    className: string;
    icon: string;
  };
  Amount: string;
  Network: string;
  Address: {
    text: string;
    copyable: boolean;
    copyIcon: string;
  };
  TXID: {
    text: string;
    url?: string;
    linkIcon?: string;
    copyable: boolean;
    copyIcon: string;
  };
  Status: {
    text: string;
  };
}

type DepositFormProps = {};

const DepositForm: React.FC<DepositFormProps> = () => {
  const coinOptions: CoinOption[] = [
    { label: "USDT", icon: TetherIcon },
    { label: "BTC", icon: DownArrow },
    { label: "ETH", icon: DownArrow },
  ];

  const networkOptions: NetworkOption[] = [
    { label: "Tron (TRC20)" },
    { label: "Ethereum (ERC20)" },
    { label: "Binance (BEP20)" },
  ];

  const [selectedCoin, setSelectedCoin] = useState<CoinOption>(coinOptions[0]);
  const [coinDropdownOpen, setCoinDropdownOpen] = useState(false);

  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption>(
    networkOptions[0]
  );
  const [networkDropdownOpen, setNetworkDropdownOpen] = useState(false);

  const [amount, setAmount] = useState("");

   const headers = [
    { key: "Asset", label: "Asset/Date", className: "text-[#1D1D1D]" },
    { key: "Amount", label: "Amount", className: "text-[#1D1D1D]" },
    { key: "Network", label: "Network", className: "text-[#1D1D1D]" },
    { key: "Address", label: "Address", className: "text-[#1D1D1D]" },
    { key: "TXID", label: "TXID", className: "text-[#1D1D1D]" },
    { key: "Status", label: "Status", className: "text-[#1D1D1D]" },
  ];

  const data : TableData[] = [
    {
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: TetherIcon },
      Amount: "180.00",
      Network: "03:500",
      Address: {
        text: "0x8AB3.....EeB90",
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      TXID: {
        text: "0x7A23.....EfC92",
        url: "https://etherscan.io/address/0xABC123456789",
        linkIcon: link,
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      Status: { text: "Success" },
    },
    {
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: TetherIcon },
      Amount: "180.00",
      Network: "03:500",
      Address: {
        text: "0x8AB3.....EeB90",
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      TXID: {
        text: "0x7A23.....EfC92",
        url: "https://etherscan.io/address/0xABC123456789",
        linkIcon: link,
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      Status: { text: "Success" },
    },
    {
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: TetherIcon },
      Amount: "180.00",
      Network: "03:500",
      Address: {
        text: "0x8AB3.....EeB90",
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      TXID: {
        text: "0x7A23.....EfC92",
        url: "https://etherscan.io/address/0xABC123456789",
        linkIcon: link,
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      Status: { text: "Success" },
    },
    {
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: TetherIcon },
      Amount: "180.00",
      Network: "03:500",
      Address: {
        text: "0x8AB3.....EeB90",
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      TXID: {
        text: "0x7A23.....EfC92",
        url: "https://etherscan.io/address/0xABC123456789",
        linkIcon: link,
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      Status: { text: "Rejected" },
    },
    {
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: TetherIcon },
      Amount: "180.00",
      Network: "03:500",
      Address: {
        text: "0x8AB3.....EeB90",
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      TXID: {
        text: "0x7A23.....EfC92",
        url: "https://etherscan.io/address/0xABC123456789",
        linkIcon: link,
        copyable: true,
        copyIcon: ContentCopyGrey,
      },
      Status: { text: "Pending" },
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async (page: number) => {
    const res = data;
    setTotalPages(res.length);
    setCurrentPage(page);
  };

  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div className="w-full max-w-[1256px] h-auto p-[16px] flex flex-col gap-[40px]">
      <div className="w-full max-w-[1192px] h-auto gap-[24px]">
        <div className="w-full max-w-[1192px] h-auto mx-auto p-4 lg:p-[32px] border border-[#E5E5E5] rounded-[16px] flex flex-col lg:flex-row gap-8 lg:gap-[18%] justify-center">
          <DepositSelectorForm
            coinOptions={coinOptions}
            networkOptions={networkOptions}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
            coinDropdownOpen={coinDropdownOpen}
            setCoinDropdownOpen={setCoinDropdownOpen}
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
            networkDropdownOpen={networkDropdownOpen}
            setNetworkDropdownOpen={setNetworkDropdownOpen}
            amount={amount}
            setAmount={setAmount}
          />
          <QRBoard QRcode={QRcode} ContentCopy={ContentCopy} />
        </div>
      </div>
      <div className="mt-[24px]">
        <div className="lg:hidden">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <DepositeCards type="deposite"/>
          ))}
        </div>
        <div className="lg:block hidden">
          <DashboardTable headers={headers} data={data} />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={getData}
          class1={"pageBtn"}
        />
      </div>
    </div>
  );
};

export default DepositForm;
