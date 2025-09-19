import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Layout with Sidebar + Header
import Dashboard from "./pages/dashboard";
import Deposits from "../src/pages/deposits";
import Withdrawals from "../src/pages/withdrawals";
import Referrals from "../src/pages/referrals";
import Redeem from "../src/pages/redeem";
import FAQ from "../src/pages/faq";
import Transactions from "../src/pages/transactions";
import Logout from "../src/pages/logout";
import { ThemeProvider } from "./context/ThemeContext"; // import your ThemeProvider
import "./index.css";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "deposits", element: <Deposits /> },
      { path: "withdrawals", element: <Withdrawals /> },
      { path: "referrals", element: <Referrals /> },
      { path: "redeem", element: <Redeem /> },
      { path: "faq", element: <FAQ /> },
      { path: "transactions", element: <Transactions /> },
      { path: "logout", element: <Logout /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
