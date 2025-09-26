import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiClockCounterClockwise } from "react-icons/pi";

import { RxQuestionMark } from "react-icons/rx";
import SettingsModal from "./SettingsModal";
import HistoryModal from "./HistoryModal";

const GCHeaderIcons = () => {
  const [openModalId, setOpenModalOpenId] = useState<string | null>(null);
  const settingBtnRef = useRef<HTMLButtonElement | null>(null);
  const historyBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex items-center gap-[10px] ">
      <div className="relative">
        <button
          ref={settingBtnRef}
          onClick={() =>
            setOpenModalOpenId(openModalId === "settings" ? null : "settings")
          }
          className="w-[40px] h-[40px]  rounded-[16px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]"
        >
          <IoSettingsOutline className="w-[24px] h-[24px]" />
        </button>
        <AnimatePresence>
          {openModalId === "settings" && (
            <SettingsModal
              buttonRef={settingBtnRef}
              setOpenModalOpenId={setOpenModalOpenId}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <button
          ref={historyBtnRef}
          onClick={() =>
            setOpenModalOpenId(openModalId === "history" ? null : "history")
          }
          className="w-[40px] h-[40px]  rounded-[16px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]"
        >
          <PiClockCounterClockwise className="w-[24px] h-[24px]" />
        </button>
        <AnimatePresence>
          {openModalId === "history" && (
            <HistoryModal
              buttonRef={historyBtnRef}
              setOpenModalOpenId={setOpenModalOpenId}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="w-[40px] h-[40px]  rounded-[16px] flex items-center justify-center bg-[rgb(var(--pg-stroke))] cursor-pointer text-[rgb(var(--primary-text))]">
        <RxQuestionMark size={24} className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default GCHeaderIcons;
