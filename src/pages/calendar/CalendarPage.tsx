import react from "react"
import EventListItem from "./components/EventListItem";
import EventItem from "../globalcomponents/EventItem";
import Pagination from "../globalcomponents/Pagination";
import CalendarItem from "./components/CalendarItem";

const CalendarPage = () => {
    return <>
        <div className="flex w-full h-full p-5 pt-0 gap-5 text-[#374151]">
            <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 bg-white rounded-xl py-2 px-4">
                    <CalendarItem />
                </div>
                <div className="flex-1 bg-white rounded-xl flex flex-col p-5 gap-3">
                    <div className="text-2xl font-semibold pb-5">Dagens evenemang</div>
                    <EventListItem title="Möte med Noah och Elsa" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "  date="02 Aug 2024"/>
                    <EventListItem title="Anna besök av personal" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo."  date="02 Aug 2024"/>
                </div>
            </div>
            <div className="flex-[2] h-full bg-white rounded-xl flex flex-col p-5 gap-3">
                <div className="text-2xl font-semibold">Evenemang</div>
                <div className="flex flex-1 flex-col">

                <EventItem date="14 Juni" startTime="10:00" endTime="12:00" DoW="Mondag" fulldate="02 Aug 2024"
                    title="Möte med Noah och Elsa" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                <EventItem date="12 Juni" startTime="10:00" endTime="12:00" DoW="Mondag" fulldate="02 Aug 2024"
                    title="Möte Elsa" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                <EventItem date="11 Juni" startTime="10:00" endTime="12:00" DoW="Mondag" fulldate="02 Aug 2024"
                    title="Noah rapport" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                <EventItem date="4 Juni" startTime="10:00" endTime="12:00" DoW="Mondag" fulldate="02 Aug 2024"
                    title="Noah och Elsa" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                </div>
                <div className="flex justify-center"><Pagination /></div>
            </div>
        </div>
    </>
};

export default CalendarPage;