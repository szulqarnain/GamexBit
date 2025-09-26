import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

interface SettingsModalProps {
  setOpenModalOpenId: React.Dispatch<React.SetStateAction<string | null>>;
  buttonRef: React.RefObject<HTMLButtonElement | null>; // ✅ allow null
}

const SettingsModal = ({
  setOpenModalOpenId,
  buttonRef,
}: SettingsModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [accordianId, setAccordianId] = useState<number | null>(2);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenModalOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenModalOpenId]);

  return (
    <motion.div
      variants={dropdownVariants}
      ref={modalRef}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary-nrm))] shadow-[inset_0px_16px_100px_0px_rgba(138,33,255,0.04)] absolute  z-50 rounded-[16px] text-[rgb(var(--primary-text))] md:w-[436px] min-w-[300px] md:right-0 right-[-100px] top-[50px] p-[16px] "
    >
      <div className="flex items-center justify-between ">
        <p className="font-[700] md:text-[24px] text-[16px] md:leading-[24px] leading-[16px] [text-box-trim:cap-height] [text-box-edge:cap] ">
          Preferences
        </p>
        <RxCross2
          onClick={() => setOpenModalOpenId(null)}
          className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] cursor-pointer"
        />
      </div>
      <div className="py-[8px] border-b border-[rgb(var(--border))] md:mt-[14px] mt-[8px] flex flex-col gap-[12px]">
        <div
          onClick={() => setAccordianId(accordianId === 1 ? null : 1)}
          className="flex items-center justify-between cursor-pointer"
        >
          <p className="md:text-[18px] text-[14px] leading-[28px] font-[600] [text-box-trim:cap-height] [text-box-edge:cap]">
            General
          </p>
          {accordianId === 1 ? (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]  rotate-180" />
          ) : (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]  " />
          )}
        </div>
        <AnimatePresence initial={false}>
          {accordianId === 1 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-between"
            >
              <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap]">
                Order Confirmation
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[rgb(var(--link-text))] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="py-[8px] flex flex-col gap-[12px]">
        <div
          onClick={() => setAccordianId(accordianId === 2 ? null : 2)}
          className="flex items-center justify-between cursor-pointer"
        >
          <p className="md:text-[18px] text-[14px] leading-[28px] font-[600] [text-box-trim:cap-height] [text-box-edge:cap]">
            Pop-Up Confirmation Windows
          </p>
          {accordianId === 2 ? (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] rotate-180" />
          ) : (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] " />
          )}
        </div>
        <AnimatePresence initial={false}>
          {accordianId === 2 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-between"
            >
              <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap]">
                Order Confirmation
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[rgb(var(--link-text))] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SettingsModal;
