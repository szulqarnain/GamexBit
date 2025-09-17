import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import LightModeLogo from "../../assets/logos/LightLogo.png";
import DarkModeLogo from "../../assets/logos/DarkLogo.png";
import DashboardIcon from "../../assets/icons/dashboard.svg?react";
import DepositsIcon from "../../assets/icons/deposits.svg?react";
import WithdrawalsIcon from "../../assets/icons/withdrawals.svg?react";
import ReferralsIcon from "../../assets/icons/referrals.svg?react";
import RedeemIcon from "../../assets/icons/redeem.svg?react";
import FAQIcon from "../../assets/icons/faq.svg?react";
import TelegramGroupIcon from "../../assets/icons/telegramgroup.svg?react";
import TransactionsIcon from "../../assets/icons/transctions.svg?react";
import LogOutIcon from "../../assets/icons/logout.svg?react";

interface SidebarProps {
  variant?: "desktop" | "mobile";
  setSidebarOpen?: (open: boolean) => void; // callback to close mobile drawer
}

export default function Sidebar({
  variant = "desktop",
  setSidebarOpen,
}: SidebarProps) {
  const { darkMode } = useTheme();

  const navItems = [
    { Icon: DashboardIcon, label: "Dashboard", path: "/dashboard" },
    { Icon: DepositsIcon, label: "Deposits", path: "/deposits" },
    { Icon: WithdrawalsIcon, label: "Withdrawals", path: "/withdrawals" },
    { Icon: ReferralsIcon, label: "Referrals", path: "/referrals" },
    { Icon: RedeemIcon, label: "Redeem Codes", path: "/redeem" },
    { Icon: FAQIcon, label: "FAQ", path: "/faq" },
    { Icon: TelegramGroupIcon, label: "Telegram Group", path: "/telegram" },
    { Icon: TransactionsIcon, label: "Transactions", path: "/transactions" },
  ];

  return (
    <aside
      className={`w-[256px] h-screen bg-[rgb(var(--bg))] text-[rgb(var(--secondary-text))] 
        border-r border-[rgb(var(--border))] flex-col 
        ${variant === "desktop" ? "hidden lg:flex" : "flex"} overflow-y-auto`}
    >
      {/* Logo */}
      <div className="p-[5px] lg:p-[28px]">
        <img
          src={darkMode ? DarkModeLogo : LightModeLogo}
          alt={darkMode ? "Logo Dark" : "Logo Light"}
          className="w-[185px] hidden lg:block"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-0 lg:flex-1 p-[10px] pb-0 lg:p-[24px] flex flex-col gap-2">
        <ul className="space-y-1 lg:space-y-3">
          {navItems.map(({ Icon, label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                onClick={() => variant === "mobile" && setSidebarOpen?.(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3 px-4 rounded-[12px] group
     text-[rgb(var(--secondary-text))] hover:text-[rgb(var(--primary-text))] sideNav_a
     font-medium text-[14px] lg:text-base leading-6
     ${isActive ? "active" : ""}`
                }
              >
                <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-current group-hover:text-primary" />
                <span className="font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-[12px] lg:p-[28px]">
        <ul className="space-y-0 lg:space-y-3">
          <li>
            <NavLink
              to="/logout"
              onClick={() => variant === "mobile" && setSidebarOpen?.(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-[12px] group
                 text-[rgb(var(--secondary-text))] hover:text-[rgb(var(--primary-text))] sideNav_a
                 font-medium text-[14px] lg:text-base leading-6
                 ${isActive ? "active" : ""}`
              }
            >
              <LogOutIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-current group-hover:text-primary" />
              <span className="font-medium">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
