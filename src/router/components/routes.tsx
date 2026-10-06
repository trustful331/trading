import { Navigate } from "react-router-dom";
import LegacyPortalRedirect from "./LegacyPortalRedirect";
import SiteLayout from "src/components/Marketing/SiteLayout";
import PortalLayout from "src/components/Portal/PortalLayout";
import AdminLayout from "src/components/Admin/AdminLayout";

import Home from "src/pages/landing/Home";
import Markets from "src/pages/landing/Markets";
import Accounts from "src/pages/landing/Accounts";
import Platforms from "src/pages/landing/Platforms";
import Conditions from "src/pages/landing/Conditions";
import Funding from "src/pages/landing/Funding";
import Education from "src/pages/landing/Education";
import Calendar from "src/pages/landing/Calendar";
import About from "src/pages/landing/About";
import Contact from "src/pages/landing/Contact";
import Faq from "src/pages/landing/Faq";
import Partners from "src/pages/landing/Partners";
import Legal from "src/pages/landing/Legal";

import Login from "src/pages/auth/Login";
import Register from "src/pages/auth/Register";
import ForgotPassword from "src/pages/auth/ForgotPassword";
import VerifyEmail from "src/pages/auth/VerifyEmail";
import ResetPassword from "src/pages/auth/ResetPassword";

import Dashboard from "src/pages/portal/Dashboard";
import Deposit from "src/pages/portal/Deposit";
import Withdraw from "src/pages/portal/Withdraw";
import Questionnaire from "src/pages/portal/Questionnaire";
import TradingInfo from "src/pages/portal/TradingInfo";
import Documents from "src/pages/portal/Documents";
import Transactions from "src/pages/portal/Transactions";
import Security from "src/pages/portal/Security";
import Trade from "src/pages/portal/Trade";
import Profile from "src/pages/portal/Profile";
import Support from "src/pages/portal/Support";
import PortalPartners from "src/pages/portal/Partners";

import AdminHome from "src/pages/admin/Home";
import Users from "src/pages/admin/Users";
import UserDetail from "src/pages/admin/UserDetail";
import Kyc from "src/pages/admin/Kyc";
import Deposits from "src/pages/admin/Deposits";
import Withdrawals from "src/pages/admin/Withdrawals";
import Tickets from "src/pages/admin/Tickets";
import Announcements from "src/pages/admin/Announcements";
import AdminConditions from "src/pages/admin/Conditions";
import AdminAccountTypes from "src/pages/admin/AccountTypes";
import Audit from "src/pages/admin/Audit";

const open = { isPrivate: false, public: true };

export const AllRoutes = [
  {
    path: "/",
    page: <SiteLayout />,
    ...open,
    children: [
      { index: true, page: <Home />, ...open },
      { path: "markets", page: <Markets />, ...open },
      { path: "products", page: <Markets />, ...open },
      { path: "accounts", page: <Accounts />, ...open },
      { path: "account-types", page: <Accounts />, ...open },
      { path: "platforms", page: <Platforms />, ...open },
      { path: "conditions", page: <Conditions />, ...open },
      { path: "funding", page: <Funding />, ...open },
      { path: "education", page: <Education />, ...open },
      { path: "calendar", page: <Calendar />, ...open },
      { path: "about", page: <About />, ...open },
      { path: "contact", page: <Contact />, ...open },
      { path: "faq", page: <Faq />, ...open },
      { path: "partners", page: <Partners />, ...open },
      { path: "legal/:slug", page: <Legal />, ...open },
    ],
  },
  { path: "login", page: <Login />, ...open },
  { path: "register", page: <Register />, ...open },
  { path: "forgot-password", page: <ForgotPassword />, ...open },
  { path: "verify-email", page: <VerifyEmail />, ...open },
  { path: "reset-password", page: <ResetPassword />, ...open },
  { path: "platform", page: <Trade />, ...open },
  {
    page: <PortalLayout />,
    ...open,
    children: [
      { path: "dashboard", page: <Dashboard />, ...open },
      { path: "deposit", page: <Deposit />, ...open },
      { path: "withdraw-funds", page: <Withdraw />, ...open },
      { path: "questionnaire", page: <Questionnaire />, ...open },
      { path: "trading-info", page: <TradingInfo />, ...open },
      { path: "upload-documents", page: <Documents />, ...open },
      { path: "transactions-history", page: <Transactions />, ...open },
      { path: "security", page: <Security />, ...open },
      { path: "profile", page: <Profile />, ...open },
      { path: "support", page: <Support />, ...open },
      { path: "partners", page: <PortalPartners />, ...open },
    ],
  },
  { path: "portal", page: <Navigate to="/dashboard" replace />, ...open },
  { path: "portal/*", page: <LegacyPortalRedirect />, ...open },
  {
    path: "admin",
    page: <AdminLayout />,
    ...open,
    children: [
      { index: true, page: <AdminHome />, ...open },
      { path: "users", page: <Users />, ...open },
      { path: "users/:id", page: <UserDetail />, ...open },
      { path: "kyc", page: <Kyc />, ...open },
      { path: "deposits", page: <Deposits />, ...open },
      { path: "withdrawals", page: <Withdrawals />, ...open },
      { path: "tickets", page: <Tickets />, ...open },
      { path: "announcements", page: <Announcements />, ...open },
      { path: "conditions", page: <AdminConditions />, ...open },
      { path: "instruments", page: <AdminConditions />, ...open },
      { path: "account-types", page: <AdminAccountTypes />, ...open },
      { path: "audit", page: <Audit />, ...open },
      { path: "audit-logs", page: <Audit />, ...open },
    ],
  },
];
