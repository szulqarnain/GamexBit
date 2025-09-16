// src/components/Common/Header.tsx
import { useState, useEffect } from "react";
import ProfileMenu from "./ProfileMenu";
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

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

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
        className="w-full flex justify-between lg:justify-end items-center bg-[rgb(var(--bg))]
          border-b border-[rgb(var(--border))]
          px-[16px] py-[20px] sm:px-[16px] sm:py-[24px] lg:px-[32px] lg:py-[24px]
          max-[375px]:px-[10px] max-[375px]:py-[12px]"
      >
        {/* Logo */}
        <img
          src={darkMode ? DarkModeLogo : LightModeLogo}
          alt={darkMode ? "Logo Dark" : "Logo Light"}
          className="md:w-[170px] lg:hidden"
          style={{
            width: (() => {
              if (typeof window !== "undefined") {
                const w = window.innerWidth;
                if (w <= 375 && w > 320) return "110px";
                if (w <= 320) return "80px";
              }
              return "134px";
            })(),
          }}
        />

        <div className="flex items-center gap-[6px] sm:gap-[12px] max-[375px]:gap-[4px]">
          {/* Total */}
          <button
            className="flex items-center gap-[6px] sm:gap-[8px] text-[rgb(var(--primary-text))] total_btn
              sm:py-[12px] sm:px-[18px] px-[8px] py-[7px] rounded-[12px]
              max-[375px]:px-[6px] max-[375px]:py-[5px]"
          >
            <SiteIcon className="sm:w-[25px] sm:h-[25px] w-[16px] h-[16px] max-[375px]:w-[14px] max-[375px]:h-[14px]" />
            <span className="hidden sm:inline text-[16px] sm:text-[18px] font-medium leading-[22px] sm:leading-[28px] max-[375px]:text-[13px]">
              Total:
            </span>
            <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[22px] sm:leading-[28px] lg:leading-[30px] max-[375px]:text-[13px]">
              224.56
            </span>
            <TotalIcon className="w-[25px] h-[25px] hidden sm:block max-[375px]:w-[18px] max-[375px]:h-[18px]" />
          </button>

          {/* Country */}
          <button className="p-[9px] border-[1px] rounded-[22px] border-[rgb(var(--border))] hidden sm:block">
            <CountryIcon className="w-[32px] h-[32px] text-[rgb(var(--primary-text))] max-[375px]:w-[24px] max-[375px]:h-[24px]" />
          </button>

          {/* Dark / Light mode */}
          <button
            onClick={toggleDarkMode}
            className="p-[12px] border-[1px] rounded-[22px] border-[rgb(var(--border))] hidden sm:block"
          >
            {darkMode ? (
              <LightModeIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))] max-[375px]:w-[20px] max-[375px]:h-[20px]" />
            ) : (
              <DarkModeIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))] max-[375px]:w-[20px] max-[375px]:h-[20px]" />
            )}
          </button>

          {/* Sidebar open button (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="relative p-[5px] sm:p-[12px] border-[1px]
              rounded-[12px] sm:rounded-[22px] border-[rgb(var(--border))]
              block lg:hidden max-[375px]:p-[4px]"
          >
            <NavIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))] max-[375px]:w-[20px] max-[375px]:h-[20px]" />
          </button>

          {/* Notifications */}
          <button
            className="relative p-[5px] sm:p-[12px] border-[1px]
              rounded-[12px] sm:rounded-[22px] border-[rgb(var(--border))]
              max-[375px]:p-[4px]"
          >
            <NotificationIcon className="w-[25px] h-[25px] text-[rgb(var(--primary-text))] max-[375px]:w-[20px] max-[375px]:h-[20px]" />
            <span className="absolute -top-2 -right-2 bg-[#953BFF] text-white text-[12px] sm:text-[14px] font-medium py-[1px] px-[6px] rounded-full border-2 border-[rgb(var(--secondary-border))] max-[375px]:text-[10px] max-[375px]:px-[4px]">
              12
            </span>
          </button>

          {/* ✅ Profile Menu */}
          <ProfileMenu />
        </div>
      </header>

      {/* ================= SIDEBAR DRAWER ================= */}
      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[256px] bg-[rgb(var(--bg))]
          border-r border-[rgb(var(--border))] z-50 transform transition-all
          duration-300 ease-in-out lg:hidden
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
    </>
  );
}
