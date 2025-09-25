import PredictSubCards from "./PredictSubCards";

const PredictCard = () => {
  return (
    <div className="md:border-[1px] md:border-[rgb(var(--border))] md:pt-[40px] md:px-[16px] md:pb-[16px] rounded-[16px] flex flex-col gap-[24px]">
      <div className="flex flex-col md:items-center md:justify-center md:gap-[20px] gap-[12px]">
        <p className="md:font-[700] font-[500] md:text-[24px] text-[18px] md:leading-[24px] leading-[28px] [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--primary-text))]">
          Predict the color of the next 5-minute candle
        </p>
        <p className="bd-nrm-med [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
          Predictions close in 1 minute
        </p>
      </div>
      <div className="h-[28px] rounded-[999px] dashboard-bar-outer ">
        <p className="flex items-center justify-center w-[30%] h-full text-[rgb(var(--primary-text))] bg-white rounded-[999px] dashboard-bar-inner">
          20S
        </p>
      </div>
      <div>
        <PredictSubCards />
      </div>
    </div>
  );
};

export default PredictCard;
