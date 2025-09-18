import { HiOutlineIdentification } from "react-icons/hi";
import {
  MdOutlineContentCopy,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

const ProfileDropdown = () => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary-nrm))] shadow-[inset_0px_16px_100px_0px_rgba(138,33,255,0.04)] absolute right-[0px] top-[60px] z-50 rounded-[16px] text-[rgb(var(--primary-text))] md:w-[240px] w-full p-[12px] flex flex-col gap-[16px]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <HiOutlineIdentification className="w-[20px] h-[20px]" />
          <p className="bd-nrm-med">UID:GX548841252</p>
        </div>
        <MdOutlineContentCopy className="w-[20px] h-[20px] text-[#249FCC]" />
      </div>
      <div className="flex items-center gap-[12px]">
        <FaRegUser className="w-[20px] h-[20px]" />
        <Link to="/profile" className="bd-nrm-med">
          Profile
        </Link>
      </div>
      <div className="flex items-center gap-[12px]">
        <MdOutlineSettings className="w-[20px] h-[20px]" />
        <p className="bd-nrm-med">Settings</p>
      </div>
      <div className="flex items-center gap-[12px]">
        <MdOutlineLogout className="w-[20px] h-[20px]" />
        <p className="bd-nrm-med">Logout</p>
      </div>
    </motion.div>
  );
};

export default ProfileDropdown;
