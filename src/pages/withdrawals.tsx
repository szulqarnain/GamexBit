import DashboardTable from "../components/Common/DashboardTable";
import Cards from "../components/UserDashboard/Withdrawal/Cards";
import WithdrawalHistory from "../components/UserDashboard/Withdrawal/WithdrawalHistory";
import TetherIcon from "../assets/icons/Tether.svg";
import Pagination from "../components/Common/Pagination";
import { useEffect, useState } from "react";
import WithdrawalModel from "../components/UserDashboard/Withdrawal/WithdrawalModel";

const headers = [
  {
    key: "Asset",
    label: "Asset/Date",
    className: "text-[#8E8E8E] text-left pl-[13px]",
  },
  { key: "Amount", label: "Amount", className: "text-[#8E8E8E]" },
  { key: "Network", label: "Network", className: "text-[#8E8E8E]" },
  { key: "Address", label: "Address", className: "text-[#8E8E8E]" },
  { key: "TXID", label: "TXID", className: "text-[#8E8E8E]" },
  { key: "Status", label: "Status", className: "text-[#8E8E8E]" },
];

const data = [
  {
    Asset: {
      text: "USDT",
      className: "text-[#1D1D1D]",
      icon: TetherIcon,
      date: "2025-02-17 22:19",
    },
    Amount: "180.00",
    Network: "03:500",
    Address: {
      text: "0x8AB3.....EeB90",
      copyable: true,
    },
    TXID: {
      text: "0x7A23.....EfC92",
      url: "https://etherscan.io/address/0xABC123456789",

      copyable: true,
    },
    Status: { text: "Success" },
  },
  {
    Asset: {
      text: "USDT",
      className: "text-[#1D1D1D]",
      icon: TetherIcon,
      date: "2025-02-17 22:19",
    },
    Amount: "180.00",
    Network: "03:500",
    Address: {
      text: "0x8AB3.....EeB90",
      copyable: true,
    },
    TXID: {
      text: "0x7A23.....EfC92",
      url: "https://etherscan.io/address/0xABC123456789",
      copyable: true,
    },
    Status: { text: "Success" },
  },
  {
    Asset: {
      text: "USDT",
      className: "text-[#1D1D1D]",
      icon: TetherIcon,
      date: "2025-02-17 22:19",
    },
    Amount: "180.00",
    Network: "03:500",
    Address: {
      text: "0x8AB3.....EeB90",
      copyable: true,
    },
    TXID: {
      text: "0x7A23.....EfC92",
      url: "https://etherscan.io/address/0xABC123456789",

      copyable: true,
    },
    Status: { text: "Success" },
  },
  {
    Asset: {
      text: "USDT",
      className: "text-[#1D1D1D]",
      icon: TetherIcon,
      date: "2025-02-17 22:19",
    },
    Amount: "180.00",
    Network: "03:500",
    Address: {
      text: "0x8AB3.....EeB90",
      copyable: true,
    },
    TXID: {
      text: "0x7A23.....EfC92",
      url: "https://etherscan.io/address/0xABC123456789",
      copyable: true,
    },
    Status: { text: "Rejected" },
  },
  {
    Asset: {
      text: "USDT",
      className: "text-[#1D1D1D]",
      icon: TetherIcon,
      date: "2025-02-17 22:19",
    },
    Amount: "180.00",
    Network: "03:500",
    Address: {
      text: "0x8AB3.....EeB90",
      copyable: true,
    },
    TXID: {
      text: "0x7A23.....EfC92",
      url: "https://etherscan.io/address/0xABC123456789",
      copyable: true,
    },
    Status: { text: "Pending" },
  },
];

export default function Withdrawls() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showWithdrawalModel, setShowWithdrawalModel] = useState(false);

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
    <div className="lg:py-[57px] lg:px-[16px]">
      <h1 className="lg:hidden font-[700] text-[24px] leading-[24px] text-[#1D1D1D] mb-[24px]">
        Withdrawals History
      </h1>
      <Cards setShowWithdrawalModel={setShowWithdrawalModel} />
      <h1 className="lg:hidden bd-lrg-sem font-[600] text-[16px] leading-[28px] text-[#1D1D1D] mt-[24px]">
        Withdrawals History
      </h1>
      <div className="lg:hidden">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <WithdrawalHistory />
        ))}
      </div>
      <div className="mt-[78px] lg:block hidden">
        <DashboardTable headers={headers} data={data} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={getData}
        class1={"pageBtn"}
      />
      {showWithdrawalModel && (
        <WithdrawalModel setShowWithdrawalModel={setShowWithdrawalModel} />
      )}
    </div>
  );
}
