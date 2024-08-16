import { useMemo, useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import EventDialog, { Action } from "./EventDialog";

interface IWeekdayEvent {
  start: string;
  end: string;
  title: string;
  description: string;
  isEmpty?: boolean;
}

interface IWeekdayItem {
  day: number;
  events: IWeekdayEvent[];
  sleepTime: string;
}

interface CalendarProps {
  className?: string;
}

interface WeekdayItemProps extends IWeekdayItem {
  weekday: number;
  isActive?: boolean;
  onWeekdayChange?: (weekday: number) => void;
}

const weekdayTexts: string[] = [
  "Mon",
  "Tis",
  "Ons",
  "Tor",
  "Fre",
  "Lör",
  "Sön",
];
const weekdayItems: IWeekdayItem[] = [
  {
    day: 12,
    events: [
      {
        start: "10:00",
        end: "13:00",
        title: "Noah möte",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        start: "14:00",
        end: "15:00",
        title: "Elsa Rapport",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    sleepTime: "14:00",
  },
  {
    day: 13,
    events: [
      {
        start: "10:00",
        end: "13:00",
        title: "Noah möte",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    sleepTime: "23:00",
  },
  {
    day: 14,
    events: [],
    sleepTime: "23:00",
  },
  {
    day: 15,
    events: [],
    sleepTime: "23:00",
  },
  {
    day: 16,
    events: [],
    sleepTime: "23:00",
  },
  {
    day: 17,
    events: [],
    sleepTime: "23:00",
  },
  {
    day: 18,
    events: [],
    sleepTime: "23:00",
  },
];

function WeekdayItem({
  weekday,
  day,
  events,
  sleepTime,
  isActive = false,
  onWeekdayChange = () => {},
}: WeekdayItemProps) {
  const [eventIndex, setEventIndex] = useState<number>(-1);
  const [eventDialogOpen, setEventDialogOpen] = useState<boolean>(false);

  const weekdayEvents = useMemo(() => {
    return [...events, ...Array(2).fill({ isEmpty: true })].slice(0, 2);
  }, [events]);

  const isItemActive = useMemo(
    () => isActive && eventIndex !== -1,
    [isActive, eventIndex]
  );

  return (
    <>
      <div
        className={twMerge(
          "py-4 flex grow min-w-[10%] overflow-y-auto",
          isItemActive ? "grid grid-cols-3" : "shrink"
        )}
      >
        <div className="flex flex-col items-center gap-y-0.5 w-full">
          <p className="text-sm leading-4">{weekdayTexts[weekday]}</p>
          <p className="font-bold text-2xl">{day}</p>
          {weekdayEvents.map((event, index) => (
            <span
              key={index}
              className={twMerge(
                "w-full py-2 rounded-lg text-center text-xs leading-4 text-white cursor-pointer",
                event.isEmpty
                  ? "text-primary-text"
                  : isActive && index === eventIndex
                  ? "bg-focused-background"
                  : "bg-primary-background"
              )}
              onClick={() => {
                if (!event.isEmpty) {
                  setEventIndex(index);
                  onWeekdayChange(weekday);
                }
              }}
            >
              {event.isEmpty ? "-" : event.start}
            </span>
          ))}
          <span className="w-full py-2 text-center text-xs leading-4">
            {sleepTime}
          </span>
        </div>
        {isItemActive && (
          <div className="flex flex-col gap-y-1 text-primary-text px-2 col-span-2">
            <p className="text-xs leading-4">
              {events[eventIndex].start} - {events[eventIndex].end}
            </p>
            <p className="font-bold leading-5">{events[eventIndex].title}</p>
            <p className="text-sm leading-4 line-clamp-4">
              {events[eventIndex].description}
            </p>
            <button
              className="rounded-lg py-2 px-4 bg-primary-background self-end text-white leading-5 mt-2.5"
              onClick={() => {
                setEventDialogOpen(true);
              }}
            >
              Se allt
            </button>
          </div>
        )}
      </div>
      <EventDialog
        open={eventDialogOpen}
        onClose={() => {
          setEventDialogOpen(false);
        }}
        action={Action.Update}
        day={`${day} Mars`}
        time={`${weekdayEvents[eventIndex]?.start} - ${weekdayEvents[eventIndex]?.end}`}
        title={weekdayEvents[eventIndex]?.title}
        description={weekdayEvents[eventIndex]?.description}
      />
    </>
  );
}

function Calendar({ className = "" }: CalendarProps) {
  const [activeWeekday, setActiveWeekday] = useState<number>(-1);

  return (
    <div
      className={twMerge("rounded-xl bg-white py-2 px-4", className)}
      onMouseLeave={() => {
        setActiveWeekday(-1);
      }}
    >
      <div className="flex flex-col gap-y-1">
        <div className="w-full flex justify-between">
          <p className="font-semibold text-xl leading-6">Kalender</p>
          <div className="flex items-center gap-x-2.5">
            <span className="w-5 h-5 flex items-center justify-center text-sm cursor-pointer">
              <FaChevronDown />
            </span>
            <p className="leading-5">Mars 2024</p>
          </div>
        </div>
        <div className="flex py-2">
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <FaChevronLeft />
          </span>
          <p className="grow font-semibold text-xl leading-6">Vecka 2</p>
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <FaChevronRight />
          </span>
        </div>
        <div className="py-2 flex gap-x-2.5">
          {weekdayItems.map((weekdayItem, index) => (
            <WeekdayItem
              key={index}
              weekday={index}
              isActive={activeWeekday === index}
              onWeekdayChange={(index) => {
                setActiveWeekday(index);
              }}
              {...weekdayItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
