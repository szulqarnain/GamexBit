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
import toast from "react-hot-toast";

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
        ${
          variant === "desktop" ? "hidden xl:flex" : "flex"
        } overflow-y-auto pb-16 xl:pb-0`}
    >
      {/* Logo */}
      <div className="p-[5px] lg:p-[28px]">
        <img
          src={darkMode ? DarkModeLogo : LightModeLogo}
          alt={darkMode ? "Logo Dark" : "Logo Light"}
          className="w-[179px] hidden lg:block"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-0 lg:flex-1 p-[10px] pb-0 lg:px-[24px] lg:py-[16px] flex flex-col gap-[8px]">
        <ul className="space-y-[8px] flex-1">
          {navItems.map(({ Icon, label, path }) => (
            <li key={label}>
              {label === "Telegram Group" ? (
                <a
                  href="https://telegram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-[12px] py-[12px] px-[8px] rounded-[12px] group
             text-[rgb(var(--secondary-text))] hover:text-[rgb(var(--primary-text))] sideNav_a`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-current group-hover:text-primary" />
                  <span className="bd-nrm-med">{label}</span>
                </a>
              ) : (
                <NavLink
                  to={path}
                  onClick={() =>
                    variant === "mobile" && setSidebarOpen?.(false)
                  }
                  className={({ isActive }) =>
                    `flex items-center gap-[12px] p-[12px] rounded-[12px] group
             text-[rgb(var(--secondary-text))]  sideNav_a
             ${
               isActive
                 ? "user-withdrawal-btn text-white"
                 : "hover:text-[rgb(var(--primary-text))]"
             }`
                  }
                >
                  <Icon className="lg:w-[20px] lg:h-[20px] w-5 h-5 text-current group-hover:text-primary" />
                  <span className="bd-nrm-med">{label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-[12px] lg:p-[28px] pb-0">
        <ul className="space-y-0 lg:space-y-3">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                variant === "mobile" && setSidebarOpen?.(false);
                toast.success("Logged out successfully");
              }}
              className={({ isActive }) =>
                `flex items-center gap-[12px] p-[12px] rounded-[12px] group
             text-[rgb(var(--secondary-text))] sideNav_a
                 ${
                   isActive
                     ? "user-withdrawal-btn text-white"
                     : "hover:text-[rgb(var(--primary-text))]"
                 }`
              }
            >
              <LogOutIcon className="lg:w-[20px] lg:h-[20px] w-5 h-5 text-current group-hover:text-primary" />
              <span className="bd-nrm-med">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
