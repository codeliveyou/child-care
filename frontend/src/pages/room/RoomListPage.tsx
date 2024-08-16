import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Pagination from "../../components/room/Pagination";

const roomData = [
  {
    name: "Elsa rum",
    imageUri: "/images/room/1.png",
    activity: "Skapades rapport 2024-03-25",
    badge: 5,
    lastDate: "11:21",
  },
  {
    name: "Noah rum",
    imageUri: "/images/room/2.png",
    activity: "Skapades nästa möte",
    badge: 2,
    lastDate: "Igår",
  },
  {
    name: "Anna Lindberg",
    imageUri: "/images/room/3.png",
    activity: "Video samtal",
    badge: 2,
    lastDate: "23-03-2024",
  },
  {
    name: "Elsa",
    imageUri: "/images/room/4.png",
    activity: "Skapades rapport 2024-02-23",
    lastDate: "23-02-2024",
  },
  {
    name: "Emily",
    imageUri: "/images/room/5.png",
    activity: "skapades nästa möte",
    lastDate: "12-02-2024",
  },
  {
    name: "Lars Bergstöm",
    imageUri: "/images/room/6.png",
    activity: "Skapades rapport 2024-01-27",
    lastDate: "27-01-2024",
  },
  {
    name: "Noah",
    imageUri: "/images/room/7.png",
    activity: "Möte med deltagare",
    lastDate: "21-01-2024",
  },
  {
    name: "Elsa",
    imageUri: "/images/room/8.png",
    activity: "Skapades rapport 2024-01-17",
    lastDate: "17-01-2024",
  },
  {
    name: "Anna Skogberg",
    imageUri: "/images/room/9.png",
    activity: "Skapades rapport 2024-01-12",
    lastDate: "12-01-2024",
  },
];

const eventData = [
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

const RoomListPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage] = useState<number>(5);

  const handleAddRoomClick = () => {
    navigate("/room/create/onboarding");
  };

  return (
    <>
      {/* Motion container for page animation */}
      <motion.div
        className="grid grid-cols-2 w-full h-full gap-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left panel displaying room list */}
        <div className="bg-white h-full rounded-2xl flex flex-col gap-2.5 p-4 pr-1.5 overflow-y-auto relative">
          {/* Header for room list */}
          <p className="text-primary-text text-xl font-semibold">Rums list</p>
          <button
            className="absolute top-2 right-3 py-2 px-4 bg-primary-background text-white rounded-lg"
            onClick={handleAddRoomClick}
          >
            Lägg till rum
          </button>
          <div className="grow py-4 pr-2 flex-col flex gap-4 overflow-y-auto">
            {/* Room list items */}
            {roomData.map((room, index) => (
              <div
                key={index}
                className="flex items-center gap-x-4 cursor-pointer"
                onClick={() => {
                  navigate(`/room/${index}`);
                }}
              >
                <div className="w-[120px] h-full rounded-lg overflow-hidden relative">
                  <img
                    src={room.imageUri}
                    alt="Room image"
                    className="absolute top-1/2 -translate-y-1/2 w-full"
                  />
                </div>
                <div className="flex flex-col justify-between h-full grow">
                  <p className="font-semibold text-xl leading-7">{room.name}</p>
                  {room.activity && (
                    <div className="text-disabled-text text-sm leading-4 pb-2">
                      <p>Sista aktiviteten</p>
                      <p>{room.activity}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between items-end h-full">
                  <p className="text-disabled-text text-sm leading-4">
                    {room.lastDate}
                  </p>
                  {room.badge ? (
                    <span className="rounded-full bg-primary-background w-6 h-6 text-white flex items-center justify-center">
                      {room.badge}
                    </span>
                  ) : (
                    <span className="w-8 h-8 flex items-center justify-center rounded-[4px] bg-light-background">
                      <img src="/Message.svg" alt="Message icon" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel displaying room history list */}
        <div className="bg-white h-full rounded-2xl flex flex-col gap-2.5 p-4 pr-1.5 overflow-y-auto">
          <p className="text-primary-text text-xl font-semibold">
            Rums historik lista
          </p>
          <div className="grow pr-2 pb-4 flex flex-col overflow-y-auto">
            <div className="grow flex flex-col gap-y-2.5 overflow-y-auto">
              {eventData.map((eventItem, index) => (
                <div
                  key={index}
                  className="p-2 flex rounded-lg cursor-pointer hover:bg-light-background"
                >
                  <div className="w-[100px] px-1.5 border-r-2 border-r-disabled-text flex flex-col shrink-0">
                    <div className="flex flex-col gap-y-1 items-center self-start">
                      <p className="font-bold text-xl leading-7">
                        {eventItem.date}
                      </p>
                      <div className="font-light text-sm leading-4 text-disabled-text flex flex-col items-center">
                        <p>{eventItem.time.start}</p>-
                        <p>{eventItem.time.end}</p>
                      </div>
                      <p className="text-sm leading-4">{eventItem.weekday}</p>
                    </div>
                  </div>
                  <div className="py-2 px-4 flex flex-col gap-y-1">
                    <p className="text-primary-text/50 text-sm leading-4 font-light">
                      {eventItem.targetDate}
                    </p>
                    <p className="text-primary-background font-semibold leading-5">
                      {eventItem.title}
                    </p>
                    <p className="text-primary-text text-sm leading-4 font-light line-clamp-2">
                      {eventItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default RoomListPage;
