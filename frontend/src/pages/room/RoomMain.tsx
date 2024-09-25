import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/common/Button";
import Pagination from "../../components/room/Pagination";
import RoomListItem, {
  IRoomListItem,
} from "../../components/room/RoomListItem";
import RoomHistoryItem, {
  IRoomHistoryItem,
} from "../../components/room/RoomHistoryItem";

import classes from "./RoomMain.module.scss";
import axios from "axios";

// Dummy data representing a list of rooms
// const dummyRoomData: IRoomListItem[] = [
//   {
//     name: "Elsa rum",
//     imageUri: "/images/room/1.png",
//     activity: "Skapades rapport 2024-03-25",
//     badge: 5,
//     lastDate: "11:21",
//   },
//   // More room items...
//   {
//     name: "Noah rum",
//     imageUri: "/images/room/2.png",
//     activity: "Skapades nästa möte",
//     badge: 2,
//     lastDate: "Igår",
//   },
//   {
//     name: "Anna Lindberg",
//     imageUri: "/images/room/3.png",
//     activity: "Video samtal",
//     badge: 2,
//     lastDate: "23-03-2024",
//   },
//   {
//     name: "Elsa",
//     imageUri: "/images/room/4.png",
//     activity: "Skapades rapport 2024-02-23",
//     lastDate: "23-02-2024",
//   },
//   {
//     name: "Emily",
//     imageUri: "/images/room/5.png",
//     activity: "skapades nästa möte",
//     lastDate: "12-02-2024",
//   },
//   {
//     name: "Lars Bergstöm",
//     imageUri: "/images/room/6.png",
//     activity: "Skapades rapport 2024-01-27",
//     lastDate: "27-01-2024",
//   },
//   {
//     name: "Noah",
//     imageUri: "/images/room/7.png",
//     activity: "Möte med deltagare",
//     lastDate: "21-01-2024",
//   },
//   {
//     name: "Elsa",
//     imageUri: "/images/room/8.png",
//     activity: "Skapades rapport 2024-01-17",
//     lastDate: "17-01-2024",
//   },
//   {
//     name: "Anna Skogberg",
//     imageUri: "/images/room/9.png",
//     activity: "Skapades rapport 2024-01-12",
//     lastDate: "12-01-2024",
//   },
// ];

// Dummy data representing room history
const dummyHistoryData: IRoomHistoryItem[] = [
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
  // More history items...
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

const API_LOCATION = "http://localhost:8000";

// Main component for displaying the list of rooms and their history
const RoomListPage = () => {
  const navigate = useNavigate();

  // State to manage the current page of the pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Total number of pages for pagination (static value)
  const [totalPage] = useState<number>(5);
  const [roomData, setRoomData] = useState<any>([{}]);

  // Handler function to navigate to the room creation page
  const handleAddRoomClick = () => {
    navigate("/room/create/onboarding");
  };

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`${API_LOCATION}/rooms/fetch_rooms_data`);
        setRoomData(response.data);
      } catch (err: any) {
        console.log("Error in fetching room data", err);
      }
    };

    fetchRoomData();
  }, []);

  return (
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Panel displaying the list of rooms */}
      <div className={classes.roomListPanel}>
        <p>Rums list</p>
        {/* Button to add a new room */}
        <Button size="compress" onClick={handleAddRoomClick}>
          Lägg till rum
        </Button>
        <div className={classes.roomList}>
          {/* Mapping over dummyRoomData to render each RoomListItem */}
          {roomData.map((room: IRoomListItem, index: Key | null | undefined) => (
            <RoomListItem key={index} room={room} room_name={0} />
          ))}
        </div>
      </div>

      {/* Panel displaying the room history */}
      <div className={classes.historyPanel}>
        <p>Rums historik lista</p>
        <div className={classes.historyList}>
          <div className="grow flex flex-col gap-y-2.5 overflow-y-auto">
            {/* Mapping over dummyHistoryData to render each RoomHistoryItem */}
            {dummyHistoryData.map((history, index) => (
              <RoomHistoryItem key={index} history={history} />
            ))}
          </div>
        </div>
        <div className={classes.pagination}>
          {/* Pagination component to handle page changes */}
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RoomListPage;
