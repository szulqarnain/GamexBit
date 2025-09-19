// src/components/Common/ProfileMenu.tsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import UserImage from "../../../assets/images/user.png";
import ProfileDropdown from "./ProfileDropdown";

export default function ProfileMenu() {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setShowProfileModal(!showProfileModal)}
        className="w-[40px] h-[40px] sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[rgb(var(--border))] flex items-center justify-center"
      >
        <img
          src={UserImage}
          alt="User Avatar"
          className="w-full h-full object-cover cursor-pointer"
        />
      </button>
      <AnimatePresence>
        {showProfileModal && <ProfileDropdown />}
      </AnimatePresence>
    </div>
  );
}
