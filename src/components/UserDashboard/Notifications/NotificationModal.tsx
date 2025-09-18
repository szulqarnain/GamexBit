import { motion } from "framer-motion";
import { BsBell } from "react-icons/bs";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

const NotificationModal = () => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary-nrm))] shadow-[inset_0px_16px_100px_0px_rgba(138,33,255,0.04)] absolute md:right-0 right-[-60px] top-[60px] z-50 rounded-[16px] text-[rgb(var(--primary-text))] md:w-[522px] w-[100vw] p-[16px] flex flex-col gap-[16px] "
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
