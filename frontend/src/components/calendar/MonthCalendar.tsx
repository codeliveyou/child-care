import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa6";

import EventDialog from "../dashboard/EventDialog";
import { Action } from "../dashboard/EventDialog";
import { findFirstMondayOfMonth, findLastSundayOfMonth } from "../../libs/date";
import { twMerge } from "tailwind-merge";

const today = new Date();
const swedishWeeks = ["Mon", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
const swedishMonths = [
  "Janu",
  "Febr",
  "Mars",
  "Apra",
  "Majs",
  "Juni",
  "Juli",
  "Augu",
  "Sept",
  "Októ",
  "Nove",
  "Dece",
];
const dayToTime = 1000 * 60 * 60 * 24;
const firstDayOfMonth = (month: Date) => {
  return new Date(month.getFullYear(), month.getMonth(), 1);
};
const lastDayOfMonth = (month: Date) => {
  return new Date(month.getFullYear(), month.getMonth() + 1, 0);
};
const isEqual = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

function MonthCalendar() {
  // State to control the visibility of the EventDialog
  const [eventDialogOpen, setEventDialogOpen] = useState<boolean>(false);
  const [monthDays, setMonthDays] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [currentDay, setCurrentDay] = useState<Date>(new Date());

  const handlePrevClick = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const handleNextClick = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    const firstMonday = findFirstMondayOfMonth(currentMonth);
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const lastSunday = findLastSundayOfMonth(
      currentMonth,
      lastDayOfMonth.getDate()
    );
    const dayCount =
      Math.floor((lastSunday.getTime() - firstMonday.getTime()) / dayToTime) +
      1;
    setMonthDays(
      [...Array(dayCount).keys()].map((diff) => {
        const day = new Date(firstMonday);
        day.setDate(day.getDate() + diff);
        return day;
      })
    );
  }, [currentMonth]);

  return (
    <>
      <div className="relative p-4 w-full flex flex-col gap-y-6 bg-white rounded-xl">
        {/* Button to open the EventDialog */}
        <button
          className="absolute top-2 right-2 py-2 px-4 bg-primary-background text-white rounded-lg"
          onClick={() => {
            setEventDialogOpen(true);
          }}
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <FaPlus />
          </span>
        </button>
        {/* Calendar title */}
        <p className="font-semibold text-lg leading-6">Kalender</p>
        <div className="w-full flex flex-col gap-2.5">
          {/* Calendar navigation */}
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl leading-6">
              {swedishMonths[currentMonth.getMonth()]}{" "}
              <span className="font-normal">{currentMonth.getFullYear()}</span>
            </p>
            <div className="flex gap-x-2.5">
              {/* Button to navigate to the previous month */}
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-disabled-text cursor-pointer hover:bg-primary-background hover:border-primary-background hover:text-white"
                onClick={handlePrevClick}
              >
                <FaChevronLeft />
              </span>
              {/* Button to navigate to the next month */}
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-disabled-text cursor-pointer hover:bg-primary-background hover:border-primary-background hover:text-white"
                onClick={handleNextClick}
              >
                <FaChevronRight />
              </span>
            </div>
          </div>
          <div className="py-2 flex gap-x-1">
            {swedishWeeks.map((week, index) => (
              <div
                key={index}
                className="shrink-0 h-5 w-[54px] flex items-end justify-center"
              >
                {week}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-1 gap-y-2.5">
            {monthDays.map((day, index) => (
              <div
                key={index}
                className={twMerge(
                  "shrink-0 h-[54px] w-[54px] flex items-center justify-center cursor-pointer",
                  day.getTime() < firstDayOfMonth(currentMonth).getTime() ||
                    day.getTime() > lastDayOfMonth(currentMonth).getTime()
                    ? "text-light-background"
                    : ""
                )}
                onClick={() => {
                  setCurrentDay(day);
                }}
              >
                <span
                  className={twMerge(
                    "h-[42px] w-[42px] flex items-center justify-center rounded-full",
                    isEqual(day, currentDay)
                      ? "bg-primary-background text-white"
                      : ""
                  )}
                >
                  {day.getDate()}
                </span>
              </div>
            ))}
          </div>
          {/* Calendar grid showing days of the week and dates */}
        </div>
      </div>
      {/* Event dialog component */}
      <EventDialog
        title=""
        description=""
        day=""
        time=""
        open={eventDialogOpen}
        onClose={() => {
          setEventDialogOpen(false);
        }}
        action={Action.Create}
      />
    </>
  );
}

export default MonthCalendar;
