import React, { useState, useEffect } from "react";
import TetherIcon from "../assets/icons/Tether.svg"; // Fixed import
import DownArrow from "../assets/icons/Vector.svg";
import QRcode from "../assets/icons/QR.svg";
import ContentCopy from "../assets/icons/content_copy.svg";
import ContentCopyGrey from "../assets/icons/content_copy_grey.svg";
import link from "../assets/icons/link.svg";
import DashboardTable from "../components/UserDashboard/Deposits/DashboardTable";
import Pagination from "../components/Common/Pagination.tsx";
import QRBoard from "../components/UserDashboard/Deposits/QRBoard";
import DepositSelectorForm from "../components/UserDashboard/Deposits/DepositFormSelector";
// Add type definitions
interface CoinOption {
  label: string;
  icon: string; // SVG imports return string paths
}

interface NetworkOption {
  label: string;
}

interface TableData {
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

  const data: TableData[] = [
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
    // ... other data objects
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async (page: number) => {
    const res = data;
    setTotalPages(Math.ceil(res.length / 10)); // Assuming 10 items per page
    setCurrentPage(page);
  };

  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div className="w-[1256px] h-auto p-[16px] flex flex-col gap-[40px]">
      <div className="w-[1192px] h-auto gap-[24px]">
        <div className="w-[1192px] h-auto p-[32px] border border-[#E5E5E5] rounded-[16px] flex flex-row gap-[18%]">
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
        <DashboardTable headers={headers} data={data} />

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
