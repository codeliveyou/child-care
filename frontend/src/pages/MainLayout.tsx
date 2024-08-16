import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import TradeMark from "./account/components/TradeMark";
import Avatar from "../components/common/Avatar";
import SignOutButton from "../components/layout/SignOutButton";
import SearchInput from "../components/layout/SearchInput";
import { colors } from "../constants/colors";

import DashboardSVG from "../assets/navbar/Dashboard.svg?react";
import RoomSVG from "../assets/navbar/Room.svg?react";
import CalendarSVG from "../assets/navbar/Calendar.svg?react";
import FolderSVG from "../assets/navbar/Folder.svg?react";
import SettingsSVG from "../assets/navbar/Settings.svg?react";
import { twMerge } from "tailwind-merge";
import ActionButton from "../components/common/ActionButton";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: <DashboardSVG />,
    path: "/",
  },
  {
    title: "Rooms",
    icon: <RoomSVG />,
    path: "/rooms",
  },
  {
    title: "Calendar",
    icon: <CalendarSVG />,
    path: "/calendar",
  },
  {
    title: "Files",
    icon: <FolderSVG />,
    path: "/files",
  },
  {
    title: "Setting",
    icon: <SettingsSVG />,
    path: "/settings",
  },
];

const guestList = ["Anna", "Lukas", "Sara"];

const patientList = ["Elsa"];

// MainLayout component definition
const MainLayout = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const { pathname } = useLocation(); // React Router hook for current pathname
  const searchParams = useSearchParams();
  const isAIPage = pathname === "/room/create/ai-structure";
  const isRoomPage = pathname.startsWith("/room/");

  const [isSidebarExpand, setSidebarExpand] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<string>("");
  const [userType, setUserType] = useState<string>("guest");
  const [userList, setUserList] = useState<string[]>([]);

  const handleUserClick = (user: string) => () => {
    setActiveUser(user);
    navigate(`${pathname}?${new URLSearchParams({ message: userType, user })}`);
  };

  useEffect(() => {
    const userType = searchParams[0].get("message") as string;
    const currentUser = searchParams[0].get("user") as string;
    const userList = userType === "patient" ? patientList : guestList;

    setUserType(userType);
    setUserList(userList);
    if (!currentUser) setActiveUser(userList[0]);
    else setActiveUser(currentUser);
  }, [searchParams]);

  return (
    <>
      {/* Main layout structure */}
      <div className="bg-[#E9E9F3] flex flex-col w-full h-full py-4 gap-y-4">
        {/* Header section */}
        <header className="flex items-center px-4 justify-between">
          {/* Trademark component */}
          <TradeMark color={colors.blue} className="float-left" />
          {/* Notification and sign-out buttons */}
          <div className="flex items-center gap-2">
            {isRoomPage ? (
              <div className="flex gap-x-2">
                {userList.map((userItem, index) => (
                  <ActionButton
                    key={index}
                    className={twMerge(
                      "w-9 h-9 text-white",
                      userItem === activeUser
                        ? "bg-primary-background"
                        : "bg-primary-text"
                    )}
                    onClick={handleUserClick(userItem)}
                  >
                    {userItem.charAt(0).toUpperCase()}
                  </ActionButton>
                ))}
              </div>
            ) : (
              <>
                <SearchInput />
                <div className="p-4 flex items-center justify-center">
                  {/* Zoom button */}
                  <button>
                    <img src="/Notification.svg" />
                  </button>
                </div>
              </>
            )}
            <div className="p-0.5">
              {/* Notification button */}
              <SignOutButton /> {/* Sign out button */}
            </div>
          </div>
        </header>
        {/* Main content section */}
        <div className="flex flex-1 min-h-0 px-4 gap-4">
          {/* Sidebar section */}
          <aside
            className={twMerge(
              "flex flex-col justify-between shrink-0",
              isSidebarExpand ? "basis-60" : "",
              isAIPage ? "justify-end" : ""
            )}
          >
            {/* Sidebar navigation links */}
            {!isAIPage && (
              <div
                className={twMerge(
                  "relative",
                  isSidebarExpand ? "" : "self-start"
                )}
              >
                <ul className="bg-white rounded-xl flex flex-col py-8 shrink-0">
                  {/* Dashboard link */}
                  {sidebarItems.map((item, index) => (
                    <li
                      key={index}
                      className={twMerge(
                        "py-2 px-5 flex items-center gap-x-4 hover:text-primary-background cursor-pointer",
                        pathname === item.path
                          ? "text-primary-background"
                          : "text-disabled-text"
                      )}
                      onClick={() => navigate(item.path)}
                    >
                      <span className="text-inherit">{item.icon}</span>
                      {isSidebarExpand && (
                        <p className="text-left text-inherit">{item.title}</p>
                      )}
                    </li>
                  ))}
                </ul>
                <span
                  className="w-8 h-8 bg-white rounded-lg text-primary-background absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-basic cursor-pointer"
                  onClick={() => {
                    setSidebarExpand(!isSidebarExpand);
                  }}
                >
                  {isSidebarExpand ? <FaChevronLeft /> : <FaChevronRight />}
                </span>
              </div>
            )}
            {/* Avatar */}
            <Avatar uri={"/images/avatar.png"} className="self-start" />
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
