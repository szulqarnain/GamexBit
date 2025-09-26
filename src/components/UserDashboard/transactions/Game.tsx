import TetherUSDT from "../../../assets/images/tether-usdt.png.png";
import { FaRegCopy } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoMdLink } from "react-icons/io";
import Card from "./Card";
import toast from "react-hot-toast";
// Sample data array
const tableData = [
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "TRC20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC93",
    status: "pending",
    icon: <GoArrowUpLeft className="text-gray-700" size={16} />,
  },
];

const Game = () => {
  return (
    <>
      {/* Desktop Table View */}
      <div className="p-[16px] border-[rgb(var(--border))] border-[1px] rounded-xl shadow-md hidden lg:block">
        <table className="w-full text-left bg-[rgb(var(--bg))]">
          <thead className="text-[rgb(var(--secondary-text))]">
            <tr>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                Type
              </th>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                Asset
              </th>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                Amount
              </th>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                Network
              </th>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                Address
              </th>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                TXID
              </th>
              <th className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-[rgb(var(--primary-text))]">
            {tableData.map((row) => (
              <tr key={row.txid} className="border-0">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#E5E5E5] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      {row.icon}
                    </span>
                    <span>{row.type}</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={TetherUSDT}
                        alt="TetherUSDT"
                        className="w-[2rem] h-[2rem] object-contain"
                      />
                    </div>
                    <div>
                      <ul>
                        <li className="bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                          {row.asset}
                        </li>
                        <li className="tbd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%] text-[rgb(var(--secondary-text))]">
                          {row.date}
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                  {row.amount} USDT
                </td>
                <td className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                  {row.network}
                </td>
                <td className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                  <div className="flex items-center gap-2">
                    <span className="bd-nrm-reg">{row.address}</span>
                    <FaRegCopy
                      size={16}
                      className="cursor-pointer hover:text-gray-700"
                      title="Copy"
                      onClick={() => {
                        toast.success("Address Copied to clipboard");
                        navigator.clipboard.writeText(row.address);
                      }}
                    />
                  </div>
                </td>
                <td className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                  <div className="flex items-center gap-2">
                    <span className="bd-nrm-reg">{row.txid}</span>
                    <FaRegCopy
                      size={16}
                      className="cursor-pointer hover:text-gray-700"
                      title="Copy"
                      onClick={() => {
                        toast.success("TXID Copied to clipboard");
                        navigator.clipboard.writeText(row.txid);
                      }}
                    />
                    <IoMdLink
                      size={16}
                      className="cursor-pointer hover:text-gray-700"
                      title="Open link"
                      onClick={() =>
                        window.open(
                          `https://tronscan.org/#/transaction/${row.txid}`,
                          "_blank"
                        )
                      }
                    />
                  </div>
                </td>
                <td className="px-4 py-2 bd-nrm-reg [text-box-trim:cap-height] [text-box-edge:cap] tracking-[0%]">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-[8px] h-[8px] rounded-full block ${
                        row.status === "Success"
                          ? "bg-[#00B341]"
                          : row.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <span>{row.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Frontend (Non-functional) */}
        <div className="flex justify-center items-center mt-4 text-[#8E8E8E] space-x-2">
          <button className="px-3 py-[10px] border border-[rgb(var(--border))] rounded flex items-center justify-center">
            <SlArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-2 rounded border border-[rgb(var(--border))] text-sm"
              style={{
                background:
                  "linear-gradient(270deg, rgba(138, 33, 255, 0) 0%, rgba(138, 33, 255, 0.16) 100%)",
                boxShadow:
                  "0px 1px 4px 0px #C590FF1F, inset 0px 2px 10px 0px #C590FF29",
              }}
            >
              1
            </button>
            <button className="px-4 py-2 border border-[rgb(var(--border))] rounded">
              2
            </button>
            <button className="px-4 py-2 border border-[rgb(var(--border))] rounded">
              3
            </button>
            <span className="px-2">...</span>
            <button className="px-4 py-2 border border-[rgb(var(--border))] rounded">
              3
            </button>
          </div>
          <button className="px-4 py-[10px] border border-[rgb(var(--border))] rounded flex items-center justify-center">
            <SlArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="block lg:hidden">
        {tableData.map((row) => (
          <Card
            key={row.txid}
            type={row.type}
            coin={row.asset}
            date={row.date}
            amount={row.amount}
            network={row.network}
            address={row.address}
            txId={row.txid}
            status={row.status as "Success" | "Pending" | "Failed"}
            icon={row.icon}
          />
        ))}
        {/* <WithdrawalHistory /> */}
      </div>
    </>
  );
};

export default Game;
