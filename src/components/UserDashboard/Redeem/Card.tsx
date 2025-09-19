import Diamand from "../../../assets/icons/diamond.svg";

interface RedeemModelProps {
  setShowRedeemModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({ setShowRedeemModel }: RedeemModelProps) => {
  return (
    <div className="user-withdrawal-card1 w-full md:p-[32px] p-[24px] ">
      <div className="flex md:flex-row flex-col gap-[24px] md:items-center md:justify-between">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[8px]">
            <img src={Diamand} alt="Diamand" />
            <p className="bd-nrm-med font-[500px] text-[16px] text-[rgb(var(--primary-text))]  leading-[24px]">
              Total Redeem
            </p>
          </div>
          <p className="font-bold text-[32px] leading-[32px] tracking-[0%] text-[rgb(var(--primary-text))]">
            1000
          </p>
        </div>
        <button
          className="md:h-[60px] h-[40px] md:w-[343px]  cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]"
          onClick={() => setShowRedeemModel(true)}
        >
          Redeem Now
        </button>
      </div>
    </div>
  );
};

export default Card;
