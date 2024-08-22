import { useNavigate } from "react-router-dom";

export interface IRoomListItem {
  name: string;
  imageUri: string;
  activity: string;
  lastDate: string;
  badge?: number;
}

interface RoomListItemProps {
  index: number;
  room: IRoomListItem;
}

export default function RoomListItem({ index, room }: RoomListItemProps) {
  const navigate = useNavigate();

  return (
    <div
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
        <p className="text-disabled-text text-sm leading-4">{room.lastDate}</p>
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
  );
}
