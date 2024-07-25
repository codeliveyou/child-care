import react from "react"
import { Outlet } from "react-router-dom";
import TradeMark from "./account/components/TradeMark";
import { colors } from "../constants/colors";
import SignOutButton from "./globalcomponents/SignOutButton";
import LogoButton from "./globalcomponents/LogoButton";

const MainLayout  = () => {
    return <>
        <div className="bg-[#E9E9F3] flex flex-col w-full h-full">
            <header className="basis-24 flex items-center px-4 justify-between">
                <TradeMark color={colors.blue} className="float-left"/>
                <div className="flex gap-7">
                    <button><img src="/Zoom.svg" /></button>
                    <button><img src="/Notification.svg" /></button>
                    <SignOutButton />
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="flex flex-col basis-24 items-center justify-between pb-5">
                    <div className="w-16 bg-white rounded-xl flex flex-col items-center py-12 gap-4 text-green-400 ">
                        <button><img src="/navbar/Dashboard.svg" /></button>
                        <button><img src="/navbar/Room.svg" /></button>
                        <button><img src="/navbar/Calendar.svg" /></button>
                        <button><img src="/navbar/Folder.svg" /></button>
                        <button><img src="/navbar/Settings.svg" /></button>
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