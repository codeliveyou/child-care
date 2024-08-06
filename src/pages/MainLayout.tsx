import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TradeMark from "./account/components/TradeMark";
import { colors } from "../constants/colors";
import SignOutButton from "./globalcomponents/SignOutButton";
import LogoButton from "./globalcomponents/LogoButton";
import DashboardSVG from "../assets/navbar/Dashboard.svg?react";
import RoomSVG from "../assets/navbar/Room.svg?react";
import CalendarSVG from "../assets/navbar/Calendar.svg?react";
import FolderSVG from "../assets/navbar/Folder.svg?react";
import SettingsSVG from "../assets/navbar/Settings.svg?react";
import { AnimatePresence, motion } from "framer-motion";

// MainLayout component definition
const MainLayout = () => {
    const navigate = useNavigate(); // React Router hook for navigation
    const { pathname } = useLocation(); // React Router hook for current pathname

    return (
        <>
            {/* Main layout structure */}
            <div className="bg-[#E9E9F3] flex flex-col w-full h-full">
                {/* Header section */}
                <header className="basis-24 flex items-center px-4 justify-between flex-none">
                    {/* Trademark component */}
                    <TradeMark color={colors.blue} className="float-left" />
                    {/* Notification and sign-out buttons */}
                    <div className="flex gap-7">
                        <button><img src="/Zoom.svg" /></button> {/* Zoom button */}
                        <button><img src="/Notification.svg" /></button> {/* Notification button */}
                        <SignOutButton /> {/* Sign out button */}
                    </div>
                </header>
                {/* Main content section */}
                <div className="flex flex-1 min-h-0">
                    {/* Sidebar section */}
                    <aside className="flex flex-col basis-24 items-center justify-between pb-5">
                        {/* Sidebar navigation links */}
                        <div className="w-16 bg-white rounded-xl flex flex-col items-center py-12 gap-4">
                            {/* Dashboard link */}
                            <button onClick={() => navigate("/")}
                                style={{ color: pathname === "/" ? colors.blue : colors.gray }}>
                                <DashboardSVG />
                            </button>
                            {/* Rooms link */}
                            <button onClick={() => navigate("/rooms")}
                                style={{ color: pathname.startsWith("/room") ? colors.blue : colors.gray }}>
                                <RoomSVG />
                            </button>
                            {/* Calendar link */}
                            <button onClick={() => navigate("/calendar")}
                                style={{ color: pathname === "/calendar" ? colors.blue : colors.gray }}>
                                <CalendarSVG />
                            </button>
                            {/* Files link */}
                            <button onClick={() => navigate("/files")}
                                style={{ color: pathname === "/files" ? colors.blue : colors.gray }}>
                                <FolderSVG />
                            </button>
                            {/* Settings link */}
                            <button onClick={() => navigate("/settings")}
                                style={{ color: pathname === "/settings" ? colors.blue : colors.gray }}>
                                <SettingsSVG />
                            </button>
                        </div>
                        {/* Logo button */}
                        <LogoButton />
                    </aside>
                    {/* Main content area */}
                    <main className="flex-1">
                        <Outlet /> {/* Renders nested routes */}
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;