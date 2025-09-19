import { AnimatePresence } from "framer-motion";
import UserImage from "../../../assets/images/user.png";
import ProfileDropdown from "./ProfileDropdown";
import { useRef } from "react";

interface ProfileProps {
  setOpenModalOpenId: React.Dispatch<React.SetStateAction<string | null>>;
  openModalId: string | null;
}

export default function ProfileMenu({
  setOpenModalOpenId,
  openModalId,
}: ProfileProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        ref={buttonRef}
        onClick={() =>
          setOpenModalOpenId(openModalId === "profile" ? null : "profile")
        }
        className="w-[43px] h-[43px] rounded-[16px] overflow-hidden border border-[rgb(var(--border))] flex items-center justify-center"
      >
        <img
          src={UserImage}
          alt="User Avatar"
          className="w-full h-full object-cover cursor-pointer"
        />
      </button>

      <AnimatePresence>
        {openModalId === "profile" && (
          <ProfileDropdown
            key="profile-dropdown" // ✅ key is required for AnimatePresence exit
            setOpenModalOpenId={setOpenModalOpenId}
            buttonRef={buttonRef} // ✅ pass button ref down
          />
        )}
      </AnimatePresence>
    </div>
  );
}
