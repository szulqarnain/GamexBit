import BtcIcon from "../../../assets/icons/bitcoin.svg";
import GCHeaderIcons from "./GCHeaderIcons";

const GraphCardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex md:flex-row flex-col md:items-center md:gap-[24px] gap-[18px]">
        <div className="flex items-center md:justify-start justify-between gap-[24px]">
          <div className="flex items-center  md:gap-[24px] gap-[6px] ">
            <img
              className="md:h-[40px] md:w-[40px] h-[32px] w-[32px] "
              src={BtcIcon}
              alt="BTC Icon"
            />
            <p className="md:font-[700] font-[500] md:text-[24px] text-[18px] md:leading-[24px] leading-[28px] [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
              111,663.89
            </p>
            {/* <div className="md:w-[40px] md:h-[40px] h-[32px] w-[32px] md:rounded-[16px] rounded-[12.8px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer">
              <MdKeyboardArrowDown className="md:w-[24px] md:h-[24px] h-[19px] w-[19px] text-[rgb(var(--primary-text))]" />
            </div> */}
          </div>
          <div className="md:w-[55px] md:h-[40px] h-[32px] w-[39.2px] md:rounded-[16px] rounded-[12.8px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]">
            <div className="flex items-center gap-[2px]">
              <p className="bd-sm-reg">5M</p>
              {/* <MdKeyboardArrowDown className="md:w-[24px] md:h-[24px] h-[19px] w-[19px] " /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0px]">
          <div className="flex items-center gap-[8px]">
            <p className="bd-lrg-sem [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
              BTC
            </p>
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
              Bitcoin
            </p>
          </div>
          <div className="flex items-center gap-[12px] text-[rgb(var(--secondary-text))]">
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap]">
              24h Vol: 551M
            </p>
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap]">
              H: <span className="text-green-600">114,997.54</span>
            </p>
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap]">
              L: <span className="text-red-600">110,438.72</span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <GCHeaderIcons />
      </div>
    </div>
  );
};

export default GraphCardHeader;
