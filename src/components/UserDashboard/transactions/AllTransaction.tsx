import TetherUSDT from "../../../assets/images/tether-usdt.png.png";
import { FaRegCopy } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoMdLink } from "react-icons/io";
const AllTransaction = () => {
  return (
    <div className=" p-[16px] border-[#E5E5E5] border-[1px] rounded-xl shadow-md bd-nrm-reg">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-[#8E8E8E] uppercase">
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Asset</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Network</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">TXID</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>

            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowUpLeft className="text-gray-700" />
                </span>
                <span>Withdraw</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-0">
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#E5E5E5] w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <GoArrowDownRight className="text-gray-700" />
                </span>
                <span>Deposit</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                {/* Asset Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={TetherUSDT} alt="TetherUSDT" className="w-6 h-6" />
                </div>

                {/* Asset Info */}
                <div>
                  <ul className="space-y-1">
                    <li className="font-medium text-gray-800">USDT</li>
                    <li className="text-xs text-gray-500">2025-02-17 22:19</li>
                  </ul>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">+180.00 USDT</td>
            <td className="px-4 py-2">TRC20</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0xA8B3...EeB90
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bd-nrm-reg text-[#1D1D1D]">
                  0x7A23...EfC92
                </span>
                <FaRegCopy
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Copy"
                />
                <IoMdLink
                  size={16}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  title="Open link"
                />
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#00B341] w-[8px] h-[8px] rounded-full block"></span>
                <span>Success</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4 text-[#8E8E8E] space-x-2">
        {/* Previous Button */}
        <button className="px-3 py-[10px] border border-[#E5E5E5] rounded flex items-center justify-center">
          <SlArrowLeft size={20} />
          {/* <img src={rightArrow} className="w-[20px] h-[20px]" alt="" /> */}
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          <button
            className="px-4 py-2 rounded border border-[#E5E5E5] text-sm"
            style={{
              background:
                "linear-gradient(270deg, rgba(138, 33, 255, 0) 0%, rgba(138, 33, 255, 0.16) 100%)",
              boxShadow:
                "0px 1px 4px 0px #C590FF1F, inset 0px 2px 10px 0px #C590FF29",
            }}
          >
            1
          </button>

          <button className="px-4 py-2 border border-[#E5E5E5] rounded">
            2
          </button>
          <button className="px-4 py-2 border border-[#E5E5E5] rounded">
            3
          </button>
          <button className="px-4 py-2 border border-[#E5E5E5] rounded">
            5
          </button>
          <span className="px-2">...</span>
          <button className="px-4 py-2 border border-[#E5E5E5] rounded">
            40
          </button>
        </div>

        {/* Next Button */}
        <button className="px-4 py-[10px] border border-[#E5E5E5] rounded flex items-center justify-center">
          <SlArrowRight size={20} />
          {/* <img src={leftArrow} className="w-[20px] h-[20px]" alt="" /> */}
        </button>
      </div>
    </div>
  );
};

export default AllTransaction;
