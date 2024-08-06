import BankQR from "../pages/account/BankQR";
import GuestSignIn from "../pages/account/GuestSignIn";
import PatientSignIn from "../pages/account/PatientSignIn";
import Hourly from "../pages/account/payment_setup/Hourly";
import PaymentTypeSelect from "../pages/account/payment_setup/PaymentTypeSelect";
import Subscription from "../pages/account/payment_setup/Subscription";
import SignIn from "../pages/account/SignIn";
import SignUp from "../pages/account/SignUp";
import CalendarPage from "../pages/calendar/CalendarPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import FilesPage from "../pages/files/FilesPage";
import MainLayout from "../pages/MainLayout";
import RoomListPage from "../pages/room/RoomListPage";
import RoomPage from "../pages/room/RoomPage";
import CreateRoomMain from "../pages/room_create/CreateRoomMain";
import RoomCreateOnboardingMain from "../pages/room_create/RoomCreateOnboardingMain";
import SettingsPage from "../pages/settings/SetttingsPage";

// Array of route objects defining the application's navigation structure
const routes = [
    {
        path: "/signin",            // Route path for sign in
        element: <SignIn />,        // Component to render for this route
    },
    {
        path: "/signup",            // Route path for sign up
        element: <SignUp />,        // Component to render for this route
    },
    {
        path: "/guest_signin",      // Route path for guest sign in
        element: <GuestSignIn />,   // Component to render for this route
    },
    {
        path: "/patient_signin",    // Route path for patient sign in
        element: <PatientSignIn />, // Component to render for this route
    },
    {
        path: "/bank_qr",           // Route path for bank QR
        element: <BankQR />,        // Component to render for this route
    },
    {
        path: "/signup/payment",                // Route path for payment setup
        element: <PaymentTypeSelect />          // Component to render for this route
    },
    {
        path: "/signup/payment/subscription",   // Route path for subscription payment setup
        element: <Subscription />               // Component to render for this route
    },
    {
        path: "/signup/payment/hourly",         // Route path for hourly payment setup
        element: <Hourly />                     // Component to render for this route
    },
    {
        path: "/room/create",           // Route path for creating a room
        element: <CreateRoomMain />     // Component to render for this route
    },
    {
        path: "/room/create/onboarding",        // Route path for room creation onboarding
        element: <RoomCreateOnboardingMain />,  // Component to render for this route
    },
    {
        path: "/",                    // Root path
        element: <MainLayout />,      // Main layout component to render for this route
        children: [                   // Nested routes within MainLayout
            { index: true, element: <DashboardPage /> },  // Default index route for Dashboard
            { path: "rooms", element: <RoomListPage /> }, // Route for room list
            { path: "calendar", element: <CalendarPage /> }, // Route for calendar
            { path: "files", element: <FilesPage /> },   // Route for files
            { path: "settings", element: <SettingsPage /> }, // Route for settings
            { path: "room/:id", element: <RoomPage /> }  // Dynamic route for a specific room
        ]
    }
];

export default routes;