import react from "react"
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

// import DashboardSVG from "../assets/navbar/Calendar.svg";

const MainLayout  = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    console.log(location.pathname);
    return <>
        <div className="bg-[#E9E9F3] flex flex-col w-full h-full">
            <header className="basis-24 flex items-center px-4 justify-between flex-none">
                <TradeMark color={colors.blue} className="float-left"/>
                <div className="flex gap-7">
                    <button><img src="/Zoom.svg" /></button>
                    <button><img src="/Notification.svg" /></button>
                    <SignOutButton />
                </div>
            </header>
            <div className="flex flex-1 min-h-0">
                <aside className="flex flex-col basis-24 items-center justify-between pb-5">
                    <div className="w-16 bg-white rounded-xl flex flex-col items-center py-12 gap-4">
                        <button onClick={() => navigate("/")}
                            style={{color: pathname === "/" ? colors.blue : colors.gray }}><DashboardSVG />
                        </button>

                        <button onClick={() => navigate("/rooms")}
                            style={{color: pathname === "/rooms" ? colors.blue : colors.gray }}><RoomSVG />
                        </button>

                        <button onClick={() => navigate("/calendar")}
                            style={{color: pathname === "/calendar" ? colors.blue : colors.gray }}><CalendarSVG />
                        </button>

                        <button onClick={() => navigate("/files")}
                            style={{color: pathname === "/files" ? colors.blue : colors.gray }}><FolderSVG />
                        </button>

                        <button onClick={() => navigate("/settings")}
                            style={{color: pathname === "/settings" ? colors.blue : colors.gray }}><SettingsSVG />
                        </button>
                    </div>
                    <LogoButton />
                </aside>
                <main className="flex-1">
                    <Outlet />  
                </main>
            </div>
        </div>
    </>
}

export default MainLayout;