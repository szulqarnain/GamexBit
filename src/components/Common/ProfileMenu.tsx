// src/components/Common/ProfileMenu.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserImage from "../../assets/images/user.png";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Profile", onClick: () => alert("Go to Profile") },
    { label: "Settings", onClick: () => alert("Go to Settings") },
    { label: "UID: #12345", onClick: () => {} },
    { label: "Logout", onClick: () => alert("Logging out...") },
  ];

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen(true)}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[rgb(var(--border))] flex items-center justify-center"
      >
        <img
          src={UserImage}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Desktop dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:absolute sm:right-0 sm:mt-2 sm:w-56 sm:rounded-2xl sm:shadow-lg sm:border sm:border-[rgb(var(--border))] sm:bg-[rgb(var(--bg))] sm:z-50"
          >
            <ul className="p-2">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      item.onClick();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-xl text-[rgb(var(--primary-text))] hover:bg-[rgb(var(--border))]/20"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-[rgb(var(--bg))] border-l border-[rgb(var(--border))] z-50 sm:hidden"
          >
            {/* Header with close */}
            <div className="flex justify-between items-center p-4 border-b border-[rgb(var(--border))]">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-lg font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Items */}
            <ul className="p-4 space-y-2">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      item.onClick();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl text-[rgb(var(--primary-text))] hover:bg-[rgb(var(--border))]/20"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
