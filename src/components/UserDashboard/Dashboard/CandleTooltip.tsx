import { IoMdArrowUp } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { LuCrown } from "react-icons/lu";
import Diamand from "../../../assets/icons/diamond.svg";

interface CandleTooltipUIProps {
  x: number;
  y: number;
  isBullish: boolean;
}

const CandleTooltip = ({ x, y, isBullish }: CandleTooltipUIProps) => {
  return (
    <div
      className={`absolute -translate-x-1/2 pointer-events-none flex flex-col items-center gap-[10px] ${
        isBullish ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        left: x,
        top: isBullish ? y - 10 : y + 10, // offset above or below
      }}
    >
      {/* Tooltip Box */}
      <div
        className={`bg-[rgb(var(--pg-stroke))] p-[12px] rounded-[16px] flex flex-col gap-[8px] relative ${
          isBullish ? "order-0" : "order-2"
        } `}
      >
        <div
          className={`w-[19px] h-[19px] rounded-[2px] rotate-45 bg-[rgb(var(--pg-stroke))] absolute  left-1/2 -translate-x-1/2 z-[-20] ${
            isBullish ? "bottom-[-5px]" : "top-[-5px]"
          } `}
        ></div>
        <div className="flex flex-col md:gap-[8px] gap-[5.3px]">
          <p className="font-[700] md:text-[18px] text-[12px] md:leading-[18px] leading-[12px] [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
            49%
          </p>
          <IoMdArrowUp
            className={`md:w-[20px] md:h-[20px] w-[13.3px] h-[13.3px]  ${
              !isBullish
                ? "rotate-180 text-[rgb(var(--primary-text))]"
                : "text-[#953BFF]"
            }`}
          />
        </div>

        <div>
          <div className="flex items-center gap-[2px]">
            <FiUsers
              className={`md:w-[12px] md:h-[12px] h-[8px] w-[8px] text-[#953BFF] ${
                !isBullish
                  ? "text-[rgb(var(--primary-text))]"
                  : "text-[#953BFF]"
              }`}
            />
            <p className="bd-sm-reg text-[rgb(var(--primary-text))]">1,505</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <RxCross2
              className={`md:w-[12px] md:h-[12px] h-[8px] w-[8px] text-[#953BFF] ${
                !isBullish
                  ? "text-[rgb(var(--primary-text))]"
                  : "text-[#953BFF]"
              }`}
            />
            <p className="bd-sm-reg text-[rgb(var(--primary-text))]">1:2.13</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <img
              src={Diamand}
              alt="Diamand"
              className="md:w-[12px] md:h-[12px]  h-[8px] w-[8px]"
            />
            <p className="bd-sm-reg text-[rgb(var(--primary-text))]">12</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <LuCrown
              className={`md:w-[12px] md:h-[12px] h-[8px] w-[8px] text-[#953BFF] ${
                !isBullish
                  ? "text-[rgb(var(--primary-text))]"
                  : "text-[#953BFF]"
              }`}
            />
            <p className="bd-sm-reg text-[rgb(var(--primary-text))]">980</p>
          </div>
        </div>
      </div>

      {/* Arrow Box */}
      <div
        className={`w-[34px] h-[29.5px] bg-[rgb(var(--pg-stroke))] rounded-[2px] [clip-path:polygon(0%_0%,100%_0%,100%_70%,50%_100%,0%_70%)] md:flex hidden items-center justify-center ${
          !isBullish && "rotate-180"
        }`}
      >
        <IoMdArrowUp
          className={`md:w-[20px] md:h-[20px] w-[13.3px] h-[13.3px] text-[#953BFF] ${
            !isBullish ? "text-[rgb(var(--primary-text))]" : "text-[#953BFF]"
          }`}
        />
      </div>
    </div>
  );
};

export default CandleTooltip;
