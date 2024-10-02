import { useNavigate } from "react-router-dom";

export interface IRoomListItem {
  host: string; // Name of the room
  created_at: string; // URI for the room image
  ended_at: string; // Description of the last activity in the room
  prticipants_count: number; // Date of the last activity
  room_name: string,
  _id: string; // Optional badge number for the room
}

interface RoomListItemProps {
  room_name: number; // Index of the room in the list
  room: IRoomListItem; // Room data to display
}

export default function RoomListItem({ room }: RoomListItemProps) {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div
      className="p-2 flex items-center gap-x-4 hover:bg-light-background cursor-pointer rounded-lg"
      onClick={() => {
        // Navigate to the room detail page when the item is clicked
        navigate(`/room/${room.room_name}`);
      }}
    >
      {/* Container for room image */}
      <div className="w-[120px] h-full rounded-lg overflow-hidden relative">
        <img
          src="/images/room/1.png"
          alt="Room image"
          className="absolute top-1/2 -translate-y-1/2 w-full"
        />
      </div>
      {/* Container for room name and activity */}
      <div className="flex flex-col justify-between h-full grow">
        {/* Display the room name */}
        <p className="font-semibold text-xl leading-7">{room.host}</p>
        <div className="text-disabled-text text-sm leading-4 pb-2">
            <p>Sista aktiviteten</p>
        </div>
        {/* Display the last activity if available */}
        {/* {room.activity && (
          <div className="text-disabled-text text-sm leading-4 pb-2">
            <p>Sista aktiviteten</p>
            <p>{room.activity}</p>
          </div>
        )} */}
        
      </div>
      {/* Container for last date and badge/icon */}
      <div className="flex flex-col justify-between items-end h-full">
        {/* Display the last activity date */}
        <p className="text-disabled-text text-sm leading-4">{room.created_at}</p>
        {/* Display badge number or default icon */}
        {room.prticipants_count  ? (
          <span className="rounded-full bg-primary-background w-6 h-6 text-white flex items-center justify-center">
            {room.prticipants_count}
          </span>
        ) : (
          <span className="w-8 h-8 flex items-center justify-center rounded-[4px] bg-light-background">
            <img src="/Message.svg" alt="Message icon" />
          </span>
        )}
      </div>
    </div>
  );
}
