import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Diamand from "../../../assets/icons/Diamond.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";

interface HistoryModalProps {
  setOpenModalOpenId: React.Dispatch<React.SetStateAction<string | null>>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

const HistoryModal = ({ buttonRef, setOpenModalOpenId }: HistoryModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [accordianId, setAccordianId] = useState<number | null>(1);

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
      className="border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary-nrm))] shadow-[inset_0px_16px_100px_0px_rgba(138,33,255,0.04)] absolute  z-50 rounded-[16px] text-[rgb(var(--primary-text))] w-[303px] md:right-0 right-[-45px] top-[50px] px-[8px] pb-[12px]"
    >
      <div className="py-[12px] border-b border-[rgb(var(--border))]">
        <div
          onClick={() => setAccordianId(accordianId === 1 ? null : 1)}
          className="px-[10px] flex items-center justify-between cursor-pointer"
        >
          <div>
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
              Your Result
            </p>
            <div className="flex items-center gap-[3px]">
              <img src={Diamand} alt="Diamand" className="h-[16px] w-[16px]" />
              <p className="bd-lrg-sem  [text-box-trim:cap-height] [text-box-edge:cap] text-[#FF3B30]">
                -0,0276
              </p>
            </div>
          </div>
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
              className="flex flex-col bg-[rgb(var(--pg-stroke))] p-[12px] mt-[12px] gap-[12px] rounded-[4px] text-[rgb(var(--primary-text))] "
            >
              <div className="flex items-center justify-between border-b border-[#3F3C6B]">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your History
                </p>
                <p className="bd-lrg-sem  [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Lose
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your direction
                </p>
                <div className="flex items-center gap-[2px]">
                  <IoMdArrowUp className="h-[16px] w-[16px] text-[#953BFF]" />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] ">
                    UP
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your position
                </p>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={Diamand}
                    alt="Diamand"
                    className="h-[16px] w-[16px]"
                  />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] ">
                    1,000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your result
                </p>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={Diamand}
                    alt="Diamand"
                    className="h-[16px] w-[16px]"
                  />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] text-[#FF3B30]">
                    -1,000
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="py-[12px] border-b border-[rgb(var(--border))]">
        <div
          onClick={() => setAccordianId(accordianId === 2 ? null : 2)}
          className="px-[10px] flex items-center justify-between cursor-pointer"
        >
          <div>
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
              Your Result
            </p>
            <div className="flex items-center gap-[3px]">
              <img src={Diamand} alt="Diamand" className="h-[16px] w-[16px]" />
              <p className="bd-lrg-sem  [text-box-trim:cap-height] [text-box-edge:cap] text-[#4CD964]">
                +0,0118
              </p>
            </div>
          </div>
          {accordianId === 1 ? (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]  rotate-180" />
          ) : (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]  " />
          )}
        </div>
        <AnimatePresence initial={false}>
          {accordianId === 2 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col bg-[rgb(var(--pg-stroke))] p-[12px] mt-[12px] gap-[12px] rounded-[4px] text-[rgb(var(--primary-text))] "
            >
              <div className="flex items-center justify-between border-b border-[#3F3C6B]">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your History
                </p>
                <p className="bd-lrg-sem  [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Win
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your direction
                </p>
                <div className="flex items-center gap-[2px]">
                  <IoMdArrowUp className="h-[16px] w-[16px] text-[#953BFF]" />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] ">
                    UP
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your position
                </p>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={Diamand}
                    alt="Diamand"
                    className="h-[16px] w-[16px]"
                  />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] ">
                    1,000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your result
                </p>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={Diamand}
                    alt="Diamand"
                    className="h-[16px] w-[16px]"
                  />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] text-[#4CD964]">
                    1,000
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="py-[12px] border-b border-[rgb(var(--border))]">
        <div
          onClick={() => setAccordianId(accordianId === 3 ? null : 3)}
          className="px-[10px] flex items-center justify-between cursor-pointer"
        >
          <div>
            <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] text-[rgb(var(--secondary-text))]">
              Your Result
            </p>
            <div className="flex items-center gap-[3px]">
              <img src={Diamand} alt="Diamand" className="h-[16px] w-[16px]" />
              <p className="bd-lrg-sem  [text-box-trim:cap-height] [text-box-edge:cap] text-[#4CD964]">
                +0,0118
              </p>
            </div>
          </div>
          {accordianId === 1 ? (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]  rotate-180" />
          ) : (
            <MdKeyboardArrowDown className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]  " />
          )}
        </div>
        <AnimatePresence initial={false}>
          {accordianId === 3 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col bg-[rgb(var(--pg-stroke))] p-[12px] mt-[12px] gap-[12px] rounded-[4px] text-[rgb(var(--primary-text))] "
            >
              <div className="flex items-center justify-between border-b border-[#3F3C6B]">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your History
                </p>
                <p className="bd-lrg-sem  [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Win
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your direction
                </p>
                <div className="flex items-center gap-[2px]">
                  <IoMdArrowUp className="h-[16px] w-[16px] text-[#953BFF]" />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] ">
                    UP
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your position
                </p>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={Diamand}
                    alt="Diamand"
                    className="h-[16px] w-[16px]"
                  />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] ">
                    1,000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="bd-sm-reg [text-box-trim:cap-height] [text-box-edge:cap] ">
                  Your result
                </p>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={Diamand}
                    alt="Diamand"
                    className="h-[16px] w-[16px]"
                  />
                  <p className="bd-sm-reg  [text-box-trim:cap-height] [text-box-edge:cap] text-[#4CD964]">
                    1,000
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default HistoryModal;
