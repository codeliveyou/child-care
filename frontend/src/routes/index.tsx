import { Navigate } from "react-router-dom";

import GuestLogin from "../pages/auth/GuestLogin";
import Payment from "../pages/auth/Payment";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../pages/AuthLayout";
import CalendarPage from "../pages/calendar/CalendarPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import FilesPage from "../pages/files/FilesPage";
import MainLayout from "../pages/MainLayout";
import RoomListPage from "../pages/room/RoomListPage";
import RoomPage from "../pages/room/RoomPage";
import AIStructureList from "../pages/room_create/AIStructureList";
import CreateRoomMain from "../pages/room_create/CreateRoomMain";
import RoomCreateOnboardingMain from "../pages/room_create/RoomCreateOnboardingMain";
import SettingsPage from "../pages/settings/SetttingsPage";
import PatientLogin from "../pages/auth/PatientLogin";
import PaymentDetail from "../pages/auth/PaymentDetail";
import LoginWithBank from "../pages/auth/LoginWithBank";
import RegisterWithBank from "../pages/auth/RegisterWithBank";

// Array of route objects defining the application's navigation structure
const routes = [
  {
    path: "/room/create", // Route path for creating a room
    element: <CreateRoomMain />, // Component to render for this route
  },
  {
    path: "/room/create/onboarding", // Route path for room creation onboarding
    element: <RoomCreateOnboardingMain />, // Component to render for this route
  },
  {
    path: "/room/create/ai-structure",
    element: <MainLayout />,
    children: [{ index: true, element: <AIStructureList /> }],
  },
  {
    path: "/auth",
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
      // { path: 'bank-signin', element: <}
    ],
  },
  {
    path: "/", // Root path
    element: <MainLayout />, // Main layout component to render for this route
    children: [
      // Nested routes within MainLayout
      { index: true, element: <DashboardPage /> }, // Default index route for Dashboard
      { path: "rooms", element: <RoomListPage /> }, // Route for room list
      { path: "calendar", element: <CalendarPage /> }, // Route for calendar
      { path: "files", element: <FilesPage /> }, // Route for files
      { path: "settings", element: <SettingsPage /> }, // Route for settings
      { path: "room/:id", element: <RoomPage /> }, // Dynamic route for a specific room
    ],
  },
];

export default routes;
