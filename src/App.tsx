import { Outlet } from "react-router-dom";
import Sidebar from "./components/Common/sideBar";
import Header from "./components/Common/header";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-4 bg-[rgb(var(--bg))] overflow-auto">
          {/* Pages will render here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
