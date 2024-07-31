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

const routes = [
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/guest_signin",
        element: <GuestSignIn />,
    },
    {
        path: "/patient_signin",
        element: <PatientSignIn />,
    },
    {
        path: "/bank_qr",
        element: <BankQR />,
    },
    {
        path: "/signup/payment",
        element: <PaymentTypeSelect />
    },
    {
        path: "/signup/payment/subscription",
        element: <Subscription />
    },
    {
        path: "/signup/payment/hourly",
        element: <Hourly />
    },
    {
        path: "/room/create",
        element: <CreateRoomMain />
    },
    {
        path: "/room/create/onboarding",
        element: <RoomCreateOnboardingMain />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {index: true, element: <DashboardPage />},
            {path: "rooms", element: <RoomListPage />},
            {path: "calendar", element: <CalendarPage />},
            {path: "files", element: <FilesPage />},
            {path: "settings", element: <SettingsPage />},
            {path: "room/:id", element: <RoomPage />}
        ]
    }
];

export default routes;