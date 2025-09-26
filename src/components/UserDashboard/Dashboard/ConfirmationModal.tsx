import toast from "react-hot-toast";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface ConfirmationModalProps {
  setConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmationModal = ({
  setConfirmationModal,
}: ConfirmationModalProps) => {
  return (
    <div
      className="fixed inset-0 flex md:items-center items-end justify-center bg-[#00000099] backdrop-blur-[3px]"
      onClick={() => setConfirmationModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="  rounded-[16px] p-[32px]  [background:var(--bg-secondary)] border-1 border-[rgb(var(--border))] no-scrollbar w-[584px] flex flex-col gap-[40px]"
      >
        <div className="flex items-center justify-between text-[rgb(var(--primary-text))]">
          <p className="font-[700] text-[24px] leading-[24px] [text-box-trim:cap-height] [text-box-edge:cap]">
            Confirmation Required
          </p>
          <RxCross2
            onClick={() => setConfirmationModal(false)}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
        <div className="bd-nrm-med  text-[rgb(var(--secondary-text))]">
          <p className="mb-1">By continuing, you confirm that:</p>
          <ul className="list-disc pl-8 flex flex-col gap-1 ">
            <li>
              Your prediction cannot be changed or canceled once submitted.
            </li>
            <li>Outcomes depend on the final candle close.</li>
            <li>
              You accept full responsibility for your actions and results.
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[16px]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="peer h-8 w-8 rounded-[12px] border border-[rgb(var(--border))] appearance-none checked:bg-[rgb(var(--bg))] "
            />
            <FiCheck
              className="absolute left-1/2 top-1/2 w-full h-full text-[#249FCC] pointer-events-none 
                   -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 
                   transition-transform duration-150 p-1"
            />
          </label>
          <p className="bd-nrm-med [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
            I confirm and agree to proceed.
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setConfirmationModal(false);
            }}
            className="h-[60px] cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF]  w-full"
          >
            Confirm & Start
          </button>
          <div className="flex items-center justify-center gap-[16px] mt-[24px]">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="peer h-8 w-8 rounded-[12px] border border-[rgb(var(--border))] appearance-none checked:bg-[rgb(var(--bg))] "
              />
              <FiCheck
                className="absolute left-1/2 top-1/2 w-full h-full text-[#249FCC] pointer-events-none 
                   -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 
                   transition-transform duration-150 p-1"
              />
            </label>
            <p className="bd-nrm-med [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
              Do not show confirmation window anymore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
