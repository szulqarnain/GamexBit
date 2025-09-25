// src/components/Common/Header.tsx
import { useState, useEffect, useRef } from "react";
import Sidebar from "./sideBar";
import LightModeLogo from "../../assets/logos/LightLogo.png";
import DarkModeLogo from "../../assets/logos/DarkLogo.png";
import { useTheme } from "../../context/ThemeContext";
import TotalIcon from "../../assets/icons/hide.svg?react";
import DarkModeIcon from "../../assets/icons/darkMode.svg?react";
import LightModeIcon from "../../assets/icons/lightMode.svg?react";
import NotificationIcon from "../../assets/icons/Notification.svg?react";
import CountryIcon from "../../assets/icons/usa.svg?react";
import SiteIcon from "../../assets/icons/gamexbit.svg?react";
import NavIcon from "../../assets/icons/navIcon.svg?react";
import ProfileMenu from "../UserDashboard/Profile/ProfileMenu";
import { AnimatePresence } from "framer-motion";
import NotificationModal from "../UserDashboard/Notifications/NotificationModal";
import LoginModal from "../Common/LoginModal";

// ✅ Import your auth hook
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, loading } = useAuth(); // ✅ from AuthContext

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openModalId, setOpenModalOpenId] = useState<string | null>(null);
  const notiBtnRef = useRef<HTMLButtonElement | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // prevent scrolling when sidebar open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  // ESC closes sidebar
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header
        className="w-full flex justify-between lg:justify-end items-center 
        bg-[rgb(var(--bg))] border-b border-[rgb(var(--border))]
        py-[24px] px-[16px] sm:py-[24px] md:px-[32px] md:py-[24px] h-[88px]"
      >
        {/* Logo */}
        <img
          src={darkMode ? DarkModeLogo : LightModeLogo}
          alt={darkMode ? "Logo Dark" : "Logo Light"}
          className="w-[134px] lg:hidden"
        />

        <div className="flex items-center gap-[6px] sm:gap-[12px] max-[375px]:gap-[4px]">
          {/* Total */}
          <button className="md:flex hidden items-center text-[rgb(var(--primary-text))] total_btn gap-[8px] md:px-[16px] px-[8px] h-[43px] rounded-[16px]">
            <SiteIcon className="h-[20px] w-[20px]" />
            <span className="hidden bd-lrg-med sm:inline">Total:</span>
            <span className="bd-lrg-med">224.56</span>
            <TotalIcon className="w-[20px] h-[20px] hidden sm:block" />
          </button>

          {/* Country */}
          <button className="border-[1px] rounded-[16px] border-[rgb(var(--border))] h-[44px] w-[44px] items-center justify-center hidden md:flex">
            <CountryIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))]" />
          </button>

          {/* 🔹 Conditional Auth Section */}
          {loading ? (
            <span className="text-sm text-[rgb(var(--primary-text))]">Loading...</span>
          ) : user ? (
            <>
              {/* Notifications */}
              <div className="relative inline-block">
                <span className="absolute -top-2 -right-2 bg-[#953BFF] text-white text-[12px] sm:text-[14px] font-medium py-[1px] px-[6px] rounded-full border-2 border-[rgb(var(--secondary-border))]">
                  12
                </span>
                <button
                  className="border-[1px] h-[44px] w-[44px] rounded-[16px]
                  border-[rgb(var(--border))] flex items-center justify-center"
                  onClick={() =>
                    setOpenModalOpenId(
                      openModalId === "notification" ? null : "notification"
                    )
                  }
                  ref={notiBtnRef}
                >
                  <NotificationIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))]" />
                </button>
                <AnimatePresence>
                  {openModalId === "notification" && (
                    <NotificationModal
                      setOpenModalOpenId={setOpenModalOpenId}
                      buttonRef={notiBtnRef}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* ✅ Profile Menu */}
              <ProfileMenu
                setOpenModalOpenId={setOpenModalOpenId}
                openModalId={openModalId}
              />
            </>
          ) : (
            <>
              {/* Dark / Light mode button (always visible) */}
              <button
                onClick={toggleDarkMode}
                className="border-[1px] rounded-[16px] h-[44px] w-[44px] border-[rgb(var(--border))] hidden md:flex items-center justify-center"
              >
                {darkMode ? (
                  <LightModeIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))]" />
                ) : (
                  <DarkModeIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))]" />
                )}
              </button>

              {/* 🔹 Login Button */}
              <button
                onClick={() => setShowLoginModal(true)}
                className="h-[43px] cursor-pointer text-center gap-[8px] rounded-[8px] px-[20px] py-[8px] user-referal-btn text-[#FFFFFF] hover-button "
              >
                Login
              </button>
            </>
          )}

          {/* Sidebar open button (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="border-[1px] rounded-[16px] h-[44px] w-[44px] border-[rgb(var(--border))] flex items-center justify-center xl:hidden"
          >
            <NavIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))]" />
          </button>
        </div>
      </header>

      {/* ================= SIDEBAR DRAWER ================= */}
      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out xl:hidden 
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[256px] bg-[rgb(var(--bg))]
          border-r border-[rgb(var(--border))] z-50 transform transition-all
          duration-300 ease-in-out xl:hidden
          ${isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="p-4 text-[rgb(var(--primary-text))]"
        >
          ✕
        </button>
        <Sidebar variant="mobile" setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Login Modal */}
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </>
  );
}
