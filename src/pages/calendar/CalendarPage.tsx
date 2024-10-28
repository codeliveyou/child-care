import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import EventListItem from "../../components/calendar/EventListItem";
import Pagination from "../../components/room/Pagination";
import MonthCalendar from "../../components/calendar/MonthCalendar";
import TodayEventItem from "../../components/calendar/TodayEventItem";

import EventDialog, { Action, IEvent } from "../../components/dashboard/EventDialog";
import apiClient from "../../libs/api";
import { getLocalDate } from "../../libs/date";

// Mock data for events
// const eventData = [
//   // List of events with date, time, and description
//   {
//     date: "14 Juni",
//     time: {
//       start: "10:00",
//       end: "12:00",
//     },
//     weekday: "Mondag",
//     targetDate: "02 Aug 2024",
//     title: "Möte med Noah och Elsa",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   // More event objects...
//   {
//     date: "12 Juni",
//     time: {
//       start: "10:00",
//       end: "12:00",
//     },
//     weekday: "Onsdag",
//     targetDate: "02 Aug 2024",
//     title: "Möte Elsa",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     date: "11 Juni",
//     time: {
//       start: "10:00",
//       end: "12:00",
//     },
//     weekday: "Onsdag",
//     targetDate: "02 Aug 2024",
//     title: "Noah rapport",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     date: "4 Juni",
//     time: {
//       start: "10:00",
//       end: "12:00",
//     },
//     weekday: "Onsdag",
//     targetDate: "02 Aug 2024",
//     title: "Noah och Elsa",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     date: "1 Juni",
//     time: {
//       start: "10:00",
//       end: "12:00",
//     },
//     weekday: "Onsdag",
//     targetDate: "02 Aug 2024",
//     title: "Möte och Elsa",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     date: "21 Maj",
//     time: {
//       start: "10:00",
//       end: "12:00",
//     },
//     weekday: "Onsdag",
//     targetDate: "02 Aug 2024",
//     title: "Möte och Anna",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

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

const removePeriod = (source: string) => source.replace(/\./g, '')

// Main component for Calendar Page
const CalendarPage = () => {
  // State for current page and total pages for pagination
  const [eventDialogOpen, setEventDialogOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage] = useState<number>(5);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [activeEvent, setActiveEvent] = useState<IEvent | null>(null);
  const [action, setAction] = useState<Action>(Action.Create);
  const [currentDay, setCurrentDay] = useState<Date>(new Date());

  const memoEvents = useMemo(() => {
    return events.map(event => {
      const date = new Date(event.startTime);
      let targetDate = new Date(event.createdAt).toLocaleDateString('sv-SE', { day: '2-digit', month: 'short', year: 'numeric' });

      targetDate = removePeriod(targetDate).replace(/(\d{2}) (\w{3}) (\d{4})/, (_match, day, month, year) => {
        return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
      })
      return {
        id: event.id,
        date: removePeriod(date.toLocaleDateString('sv-SE', { month: 'short', day: '2-digit' })).replace(/(\d{2}) (\w{3})/, (_match, day, month) => {
          return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
        }),
        time: {
          start: date.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }),
          end: new Date(event.endTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })
        },
        weekday: date.toLocaleDateString('sv-SE', { weekday: 'long' }),
        targetDate: targetDate,
        title: event.eventName,
        description: event.description,
      };
    });
  }, [events])

  const handleEventClick = (id: string) => () => {
    setActiveEvent(events.find(item => item.id === id) || null);
    console.log(events.find(item => item.id === id))
    setAction(Action.Update);
    setEventDialogOpen(true);
  }

  const handleCreateEventClick = () => {
    setAction(Action.Create);
    setEventDialogOpen(true);
  }

  const handleSubmit = (event: IEvent, type: 'create' | 'update' | 'delete') => {
    if (type === 'create') {
      apiClient.post('/api/events/', {
        "event_name": event.eventName,
        "patient_name": event.patientName,
        "start_time": new Date(event.startTime).toISOString(),
        "end_time": new Date(event.endTime).toISOString(),
        "description": event.description
      }).then((response: any) => {
        const { event_id, message } = response;
        setEvents([...events, { ...event, id: event_id }]);
        toast.success(message);
      })
    } else if (type === 'update') {
      apiClient.put(`/api/events/${event.id}`, {
        "event_name": event.eventName,
        "patient_name": event.patientName,
        "start_time": new Date(event.startTime).toISOString(),
        "end_time": new Date(event.endTime).toISOString(),
        "description": event.description
      }).then((response: any) => {
        const { message } = response;
        setEvents(events.map(item => item.id === event.id ? event : item))
        toast.success(message);
      })
    } else {
      apiClient.delete(`/api/events/${event.id}`).then((response: any) => {
        const { message } = response;
        setEvents(events.filter(item => item.id !== event.id));
        toast.success(message)
      })
    }
  }

  useEffect(() => {
    apiClient.get('/api/events/').then((response: any) => {
      setEvents(response.map((eventItem: any) => {
        const { _id, event_name, patient_name, start_time, end_time, description, created_at } = eventItem;
        return {
          id: _id,
          eventName: event_name,
          patientName: patient_name,
          startTime: getLocalDate(start_time),
          endTime: getLocalDate(end_time),
          description,
          createdAt: created_at
        }
      }))
    });
  }, []);

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
          <MonthCalendar selectedDay={currentDay} setSelectedDay={setCurrentDay} onOpenEventDialog={handleCreateEventClick} />
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
            {memoEvents.map((eventItem, index) => (
              <EventListItem key={index} {...eventItem} onEventClick={handleEventClick(eventItem.id || '')} />
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
      {/* Event dialog component */}
      <EventDialog
        currentDay={currentDay}
        event={activeEvent}
        open={eventDialogOpen}
        action={action}
        onClose={() => {
          setEventDialogOpen(false);
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CalendarPage;
