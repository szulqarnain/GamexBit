import React, { useState, useEffect } from "react";
import Tether from "../assets/icons/tether.svg";
import DownArrow from "../assets/icons/Vector.svg";
import QRcode from "../assets/icons/QR.svg";
import ContentCopy from "../assets/icons/content_copy.svg";
import ContentCopyGrey from "../assets/icons/content_copy_grey.svg";
import link from "../assets/icons/link.svg";
import DashboardTable from "../components/UserDashboard/Deposits/DashboardTable";
import Pagination from "../components/Common/pagination";
import QRBoard from "../components/UserDashboard/Deposits/QRBoard";
import DepositSelectorForm from "../components/UserDashboard/Deposits/DepositFormSelector";
import DepositeCards from "../components/UserDashboard/Deposits/DepositeCards";

type DepositFormProps = {};

const DepositForm: React.FC<DepositFormProps> = () => {
  const coinOptions = [
    { label: "USDT", icon: Tether },
    { label: "BTC", icon: DownArrow },
    { label: "ETH", icon: DownArrow },
  ];

  const networkOptions = [
    { label: "Tron (TRC20)" },
    { label: "Ethereum (ERC20)" },
    { label: "Binance (BEP20)" },
  ];

  const [selectedCoin, setSelectedCoin] = useState(coinOptions[0]);
  const [coinDropdownOpen, setCoinDropdownOpen] = useState(false);

  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
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

  const data = [
    {
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: Tether },
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
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: Tether },
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
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: Tether },
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
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: Tether },
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
      Asset: { text: "USDT", className: "text-[#1D1D1D]", icon: Tether },
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

  // const [data1, setData1] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async (page: number) => {
    const res = data; // fetch from server
    // setData1(res); // your response format
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
