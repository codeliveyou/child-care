import { colors } from "../../../constants/colors";

type RoomListItemProps = {
  title: string;  // Title of the room or item
  createdAt: string;  // Date when the item was created
  logoUrl: string;  // URL for the logo image
  activity: string;  // Description of recent activity in the room
  pending?: number;  // Optional number indicating pending notifications
  [key: string]: any;  // Allow additional props to be passed
};

// Functional component to render an item in the room list
const RoomListItem = ({
  title,
  pending,
  createdAt,
  activity,
  logoUrl,
  ...props
}: RoomListItemProps) => {
  return (
    <button className="flex gap-2 text-start" {...props}>
      {/* Logo image for the room or item */}
      <div className="rounded-xl overflow-hidden">
        <img src={logoUrl} className="w-[120px] h-[90px] object-cover" />
      </div>

      <div className="flex flex-col flex-1 py-2">
        {/* Title of the room or item */}
        <div className="text-xl font-bold">{title}</div>
        {/* Spacer */}
        <div className="flex-1"></div>
        {/* Description of recent activity */}
        <div className="text-[#B6C2E1] text-sm">{activity} </div>
        {/* Creation date */}
        <div className="text-[#B6C2E1] text-sm">
          Skapades rapport {createdAt}{" "}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-3 h-full">
        {/* Date of creation displayed at the bottom */}
        <div className="text-[#B6C2E1] text-sm">{createdAt}</div>
        {pending ? (
          // Display a badge with the number of pending items
          <div
            className="rounded-full w-6 h-6 text-white text-center flex items-center justify-center"
            style={{ backgroundColor: colors.blue }}
          >
            <p>{pending}</p>
          </div>
        ) : (
          // Display a button with a message icon if no pending items
          <button className="bg-[#E9E9F3] p-1 rounded">
            <img src="/Message.svg" />
          </button>
        )}
      </div>
    </button>
  );
};

export default RoomListItem;
