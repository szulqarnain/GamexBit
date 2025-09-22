import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Common/sideBar";
import Header from "./components/Common/header";
import { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <div
          ref={mainRef}
          className="flex-1 p-4 bg-[rgb(var(--bg))] overflow-auto"
        >
          {/* Pages will render here */}
          <Outlet />
          <Toaster />
        </div>
      </div>
    </div>
  );
}
