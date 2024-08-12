import React, { useState } from "react";
import EventListItem from "./components/EventListItem";
import EventItem from "../globalcomponents/EventItem";
import Pagination from "../globalcomponents/Pagination";
import CalendarItem from "./components/CalendarItem";
import { motion } from "framer-motion";

const CalendarPage = () => {
    return (
        <>
            {/* Framer Motion container for animation */}
            <motion.div
                className="flex w-full h-full p-5 pt-0 gap-5 text-[#374151]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left section containing Calendar */}
                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex-1 bg-white rounded-xl py-2 px-4">
                        {/* Calendar component */}
                        <CalendarItem />
                    </div>
                    <div className="flex-1 bg-white rounded-xl flex flex-col p-5 gap-3">
                        {/* Today's events section */}
                        <div className="text-2xl font-semibold pb-5">Dagens evenemang</div>
                        {/* Event list items */}
                        <EventListItem
                            title="Möte med Noah och Elsa"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            date="02 Aug 2024"
                        />
                        <EventListItem
                            title="Anna besök av personal"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo."
                            date="02 Aug 2024"
                        />
                    </div>
                </div>

                {/* Right section containing Events */}
                <div className="flex-[2] h-full bg-white rounded-xl flex flex-col p-5 gap-3">
                    <div className="text-2xl font-semibold">Evenemang</div>
                    <div className="flex flex-1 flex-col">
                        {/* Event items */}
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
                    {/* Pagination component */}
                    <div className="flex justify-center">
                        <Pagination />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default CalendarPage;