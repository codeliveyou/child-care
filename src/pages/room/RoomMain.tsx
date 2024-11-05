import { Key, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/common/Button";
import Pagination from "../../components/room/Pagination";
import RoomListItem, {
  IRoomListItem,
} from "../../components/room/RoomListItem";
import RoomHistoryItem from "../../components/room/RoomHistoryItem";

import { useAppSelector } from "../../store";
import apiClient from "../../libs/api";
import classes from "./RoomMain.module.scss";

const removePeriod = (source: string) => source.replace(/\./g, '')

// Main component for displaying the list of rooms and their history
const RoomListPage = () => {
  const navigate = useNavigate();

  // State to manage the current page of the pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Total number of pages for pagination (static value)
  const [totalPage, setTotalPage] = useState<number>(0);
  const [roomData, setRoomData] = useState<any>([]);
  const userEmail = useAppSelector(state => state.auth.createUser.user_email);

  const memoRooms = useMemo(() => {
    return roomData.map((room: any) => {
      const date = new Date(room.created_at);
      let targetDate = new Date().toLocaleDateString('sv-SE', { day: '2-digit', month: 'short', year: 'numeric' });

      targetDate = removePeriod(targetDate).replace(/(\d{2}) (\w{3}) (\d{4})/, (_match, day, month, year) => {
        return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
      })
      const weekday = date.toLocaleDateString('sv-SE', { weekday: 'long' });

      return {
        id: room._id,
        date: removePeriod(date.toLocaleDateString('sv-SE', { month: 'short', day: '2-digit' })).replace(/(\d{2}) (\w{3})/, (_match, day, month) => {
          return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
        }),
        time: {
          start: date.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }),
          // end: new Date(event.endTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })
          end: ''
        },
        weekday: `${weekday[0].toUpperCase()}${weekday.slice(1)}`,
        targetDate: targetDate,
        title: room.room_name,
        description: room.patient_name,
      };
    });
  }, [roomData])

  // Handler function to navigate to the room creation page
  const handleAddRoomClick = () => {
    navigate("/room/create/onboarding");
  };

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response: any[] = await apiClient.post('/api/room/fetch_rooms_data', {
          userEmail
        });
        // console.log('roomdata', response)
        setRoomData(response);
        setTotalPage(Math.ceil(response.length / 10));
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
            {memoRooms.slice((currentPage - 1) * 10).map((history: any, index: number) => (
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
