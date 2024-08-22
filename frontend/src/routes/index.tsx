import { Navigate, Outlet } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";

import GuestLogin from "../pages/auth/GuestLogin";
import Payment from "../pages/auth/Payment";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CalendarPage from "../pages/calendar/CalendarPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import FilesPage from "../pages/files/FilesPage";
import RoomListPage from "../pages/room/RoomMain";
import RoomPage from "../pages/room/RoomDetail";
import AIStructureList from "../pages/room_create/AIStructureList";
import CreateRoomMain from "../pages/room_create/CreateRoomMain";
import RoomCreateOnboardingMain from "../pages/room_create/RoomCreateOnboardingMain";
import SettingsPage from "../pages/settings/SetttingsPage";
import PatientLogin from "../pages/auth/PatientLogin";
import PaymentDetail from "../pages/auth/PaymentDetail";
import LoginWithBank from "../pages/auth/LoginWithBank";
import RegisterWithBank from "../pages/auth/RegisterWithBank";
import AdminLogin from "../pages/admin/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import PatientDashboard from "../pages/patient/PatientDashboard";
import GuestDashboard from "../pages/guest/GuestDashboard";

const routes = [
  {
    path: "patient",
    element: <PatientDashboard />,
  },
  {
    path: "guest",
    element: <GuestDashboard />,
  },
  {
    path: "admin",
    element: <Outlet />,
    children: [
      {
        path: "sign-in",
        element: <AdminLogin />,
      },
      {
        path: "",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "room",
    element: <Outlet />,
    children: [
      {
        path: "create",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <CreateRoomMain />,
          },
          {
            path: "onboarding",
            element: <RoomCreateOnboardingMain />,
          },
          {
            path: "ai-structure",
            element: <MainLayout />,
            children: [{ index: true, element: <AIStructureList /> }],
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to={"sign-in"} /> },
      { path: "sign-in", element: <Login /> },
      { path: "sign-up", element: <Register /> },
      { path: "guest-signin", element: <GuestLogin /> },
      { path: "patient-signin", element: <PatientLogin /> },
      { path: "payment", element: <Payment /> },
      { path: "payment-detail", element: <PaymentDetail /> },
      { path: "signin-with-bank", element: <LoginWithBank /> },
      { path: "signup-with-bank", element: <RegisterWithBank /> },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "rooms", element: <RoomListPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "files", element: <FilesPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "room/:id", element: <RoomPage /> },
    ],
  },
];

export default routes;
