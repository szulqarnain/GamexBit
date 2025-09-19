import TetherUSDT from "../../../assets/images/tether-usdt.png.png";
import { FaRegCopy } from "react-icons/fa";
import { GoArrowUpLeft, GoArrowDownRight } from "react-icons/go";
import { IoMdLink } from "react-icons/io";

// Sample data array
const tableData = [
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
  {
    type: "Withdraw",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowUpLeft className="text-gray-700" />,
  },
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
  {
    type: "Deposit",
    asset: "USDT",
    date: "2025-02-17 22:19",
    amount: "180.00",
    network: "BSC/Bep20",
    address: "0xA8B3...EeB90",
    txid: "0x7A23...EfC92",
    status: "Success",
    icon: <GoArrowDownRight className="text-gray-700" />,
  },
];

const Table = () => {
  return (
    <div className="p-[16px] border-[rgb(var(--border))] border-[1px] rounded-xl shadow-md bd-nrm-reg">
      <table className="w-full text-sm text-left text-gray-700 bg-[rgb(var(--bg))]">
        <thead className="text-xs text-[rgb(var(--secondary-text))] uppercase">
          <tr>
            <th className="px-4 py-2">Asset</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Network</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">TXID</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-[rgb(var(--primary-text))]">
          {tableData.map((row, index) => (
            <tr key={index} className="border-0">
              <td className="px-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={TetherUSDT}
                      alt="TetherUSDT"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <ul className="space-y-1">
                      <li className="font-medium">{row.asset}</li>
                      <li className="text-xs text-[rgb(var(--secondary-text))]">
                        {row.date}
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">{row.amount}</td>
              <td className="px-4 py-2">{row.network}</td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="bd-nrm-reg">{row.address}</span>
                  <FaRegCopy
                    size={16}
                    className="cursor-pointer hover:text-gray-700"
                    title="Copy"
                  />
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="bd-nrm-reg">{row.txid}</span>
                  <FaRegCopy
                    size={16}
                    className="cursor-pointer hover:text-gray-700"
                    title="Copy"
                  />
                  <IoMdLink
                    size={16}
                    className="cursor-pointer hover:text-gray-700"
                    title="Open link"
                  />
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                  <span>{row.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
