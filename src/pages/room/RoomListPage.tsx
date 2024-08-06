import react from "react";
import Button from "../globalcomponents/Button";
import RoomListItem from "./components/RoomListItem";
import RoomHistoricListItem from "../globalcomponents/EventItem";
import Pagination from "../globalcomponents/Pagination";
import EventItem from "../globalcomponents/EventItem";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RoomListPage = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Motion container for page animation */}
            <motion.div
                className="flex w-full h-full gap-5 p-5 pt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left panel displaying room list */}
                <div className="bg-white h-full flex-[7] rounded-xl flex flex-col p-5">
                    <div>
                        {/* Header for room list */}
                        <span className="text-[#374151] text-xl font-bold float-left">Rums list </span>
                        {/* Button to add a room */}
                        <Button className="float-right">Lägg till rum</Button>
                    </div>
                    <div className="flex-1 flex-col flex gap-2">
                        {/* Room list items */}
                        <RoomListItem
                            createdAt="2024-04-01"
                            logoUrl="/logo/logo1.jpg"
                            title="Elsa rum"
                            activity="Sista aktiviteten"
                            pending={5}
                            onClick={() => navigate("/room/id")}
                        />
                        <RoomListItem
                            createdAt="2024-04-11"
                            logoUrl="/logo/logo2.png"
                            title="Elsa rum"
                            activity="Sista aktiviteten"
                            pending={5}
                        />
                        <RoomListItem
                            createdAt="2024-08-01"
                            logoUrl="/logo/logo1.jpg"
                            title="Elsa rum"
                            activity="Sista aktiviteten"
                        />
                        <RoomListItem
                            createdAt="2024-04-21"
                            logoUrl="/logo/logo1.jpg"
                            title="Elsa rum"
                            activity="Sista aktiviteten"
                            pending={5}
                        />
                    </div>
                </div>

                {/* Right panel displaying room history list */}
                <div className="bg-white h-full flex-[6] rounded-xl flex flex-col p-5">
                    <div className="text-[#374151] text-xl font-bold float-left">Rums historik lista</div>
                    <div className="flex flex-1 flex-col">
                        {/* Event items in the room history */}
                        <EventItem
                            date="14 Juni"
                            startTime="10:00"
                            endTime="12:00"
                            DoW="Mondag"
                            fulldate="02 Aug 2024"
                            title="Möte med Noah och Elsa"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <EventItem
                            date="12 Juni"
                            startTime="10:00"
                            endTime="12:00"
                            DoW="Mondag"
                            fulldate="02 Aug 2024"
                            title="Möte Elsa"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <EventItem
                            date="11 Juni"
                            startTime="10:00"
                            endTime="12:00"
                            DoW="Mondag"
                            fulldate="02 Aug 2024"
                            title="Noah rapport"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <EventItem
                            date="4 Juni"
                            startTime="10:00"
                            endTime="12:00"
                            DoW="Mondag"
                            fulldate="02 Aug 2024"
                            title="Noah och Elsa"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className="flex justify-center">
                        {/* Pagination component */}
                        <Pagination />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default RoomListPage;