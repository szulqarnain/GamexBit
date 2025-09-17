const RedeemMobHistory = () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px] py-[20px] border-b-[1px] border-[rgb(var(--border))]">
        <div className="flex items-center justify-between">
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))]">
              Date & Time
            </p>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
              2025 -01-20 14:30
            </p>
          </div>
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))] text-end">
              Points Redeem
            </p>
            <p className="leading-[24px] bd-nrm-reg text-[16px] text-[rgb(var(--primary-text))] text-end">
              10 Points
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--secondary-text))]">
              Status
            </p>
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] bg-[#00B341] rounded-full"></div>
              <p className="bd-nrm-reg text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemMobHistory;
