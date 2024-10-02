import { useState } from "react";
import { motion } from "framer-motion";

import EventListItem from "../../components/calendar/EventListItem";
import Pagination from "../../components/room/Pagination";
import MonthCalendar from "../../components/calendar/MonthCalendar";
import TodayEventItem from "../../components/calendar/TodayEventItem";

// Mock data for events
const eventData = [
  // List of events with date, time, and description
  {
    date: "14 Juni",
    time: {
      start: "10:00",
      end: "12:00",
    },
    weekday: "Mondag",
    targetDate: "02 Aug 2024",
    title: "Möte med Noah och Elsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // More event objects...
  {
    date: "12 Juni",
    time: {
      start: "10:00",
      end: "12:00",
    },
    weekday: "Onsdag",
    targetDate: "02 Aug 2024",
    title: "Möte Elsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "11 Juni",
    time: {
      start: "10:00",
      end: "12:00",
    },
    weekday: "Onsdag",
    targetDate: "02 Aug 2024",
    title: "Noah rapport",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "4 Juni",
    time: {
      start: "10:00",
      end: "12:00",
    },
    weekday: "Onsdag",
    targetDate: "02 Aug 2024",
    title: "Noah och Elsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "1 Juni",
    time: {
      start: "10:00",
      end: "12:00",
    },
    weekday: "Onsdag",
    targetDate: "02 Aug 2024",
    title: "Möte och Elsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "21 Maj",
    time: {
      start: "10:00",
      end: "12:00",
    },
    weekday: "Onsdag",
    targetDate: "02 Aug 2024",
    title: "Möte och Anna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const todayEventData = [
  // List of today's events
  {
    title: "Möte med Noah och Elsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "02 Aug 2024",
  },
  // More today's event objects...
  {
    title: "Anna besök av personal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.",
    date: "02 Aug 2024",
  },
  {
    title: "Elsa besök av personal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.",
    date: "02 Aug 2024",
  },
];

// Main component for Calendar Page
const CalendarPage = () => {
  // State for current page and total pages for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage] = useState<number>(5);

  return (
    <>
      {/* Framer Motion container for animation effects */}
      <motion.div
        className="flex w-full h-full gap-4 text-primary-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left section containing the calendar and today's events */}
        <div className="max-w-[434px] flex flex-col gap-2.5 shrink-0 overflow-y-auto">
          {/* Calendar component displaying the current month */}
          <MonthCalendar />
          <div className="grow p-4 pr-1.5 flex flex-col gap-2.5 bg-white rounded-xl overflow-y-auto">
            {/* Section heading for today's events */}
            <p className="text-xl font-semibold">Dagens evenemang</p>
            {/* List of today's events */}
            <div className="grow pr-2 overflow-y-auto">
              {todayEventData.map((eventItem, index) => (
                <TodayEventItem key={index} {...eventItem} />
              ))}
            </div>
          </div>
        </div>

        {/* Right section containing all events and pagination */}
        <div className="h-full grow p-4 pr-1.5 flex flex-col gap-2.5 bg-white rounded-xl overflow-y-auto">
          {/* Section heading for all events */}
          <p className="text-xl font-semibold">Evenemang</p>
          <div className="grow flex flex-col pr-2 overflow-y-auto">
            {/* List of all events */}
            {eventData.map((eventItem, index) => (
              <EventListItem key={index} {...eventItem} />
            ))}
          </div>
          {/* Pagination component to navigate through pages of events */}
          <div className="py-2 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CalendarPage;
