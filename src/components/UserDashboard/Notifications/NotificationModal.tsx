import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsBell } from "react-icons/bs";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

interface NotificationModalProps {
  setOpenModalOpenId: React.Dispatch<React.SetStateAction<string | null>>;
  buttonRef: React.RefObject<HTMLButtonElement | null>; // ✅ allow null
}
const NotificationModal = ({
  setOpenModalOpenId,
  buttonRef,
}: NotificationModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
      className="border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary-nrm))] shadow-[inset_0px_16px_100px_0px_rgba(138,33,255,0.04)] absolute md:right-0 right-[-55px] top-[50px] z-50 rounded-[16px] text-[rgb(var(--primary-text))] md:w-[522px] w-[80vw] p-[16px] flex flex-col gap-[16px] "
    >
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-[700] leading-[24px]">Notifications</p>
        <p className="text-[16px] font-[400] leading-[24px] text-[#249FCC]">
          Mark add as read
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[rgb(var(--border))]">
            <BsBell />
          </div>
          <p className="bd-nrm-med">BR/USDT, BRUSDT ya dispinible en Grid</p>
        </div>
        <p className="bd-nrm-med text-[rgb(var(--secondary-text))]">
          Today 10:00
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[rgb(var(--border))]">
            <BsBell />
          </div>
          <p className="bd-nrm-med">BR/USDT, BRUSDT ya dispinible en Grid</p>
        </div>
        <p className="bd-nrm-med text-[rgb(var(--secondary-text))]">
          Today 10:00
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[rgb(var(--border))]">
            <BsBell />
          </div>
          <p className="bd-nrm-med">BR/USDT, BRUSDT ya dispinible en Grid</p>
        </div>
        <p className="bd-nrm-med text-[rgb(var(--secondary-text))]">
          Today 10:00
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[rgb(var(--border))]">
            <BsBell />
          </div>
          <p className="bd-nrm-med">BR/USDT, BRUSDT ya dispinible en Grid</p>
        </div>
        <p className="bd-nrm-med text-[rgb(var(--secondary-text))]">
          Today 10:00
        </p>
      </div>
    </motion.div>
  );
};

export default NotificationModal;
