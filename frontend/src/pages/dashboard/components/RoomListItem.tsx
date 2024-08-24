import { colors } from "../../../constants/colors";

type RoomListItemProps = {
  title: string;
  createdAt: string;
  logoUrl: string;
  pending?: number; // Optional: number of pending items
};

const RoomListItem = ({
  title,
  pending,
  createdAt,
  logoUrl,
}: RoomListItemProps) => {
  return (
    <div className="flex gap-2 pr-3">
      {/* Display room logo */}
      <div className="rounded-xl overflow-hidden">
        <img src={logoUrl} width={80} alt="Room Logo" /> {/* Provide alt text for accessibility */}
      </div>

      <div className="flex flex-col py-2 flex-1">
        {/* Display room title */}
        <div className="text-xl font-bold">{title}</div>
        <div className="flex-1"></div>
        {/* Display creation date */}
        <div className="text-[#B6C2E1] text-sm">
          Skapades rapport {createdAt}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        {/* Display pending count or message button based on the presence of pending items */}
        {pending ? (
          <div
            className="rounded-full w-6 h-6 text-white text-center flex items-center justify-center"
            style={{ backgroundColor: colors.blue }}
          >
            <p>{pending}</p> {/* Show the number of pending items */}
          </div>
        ) : (
          <button className="bg-[#E9E9F3] p-1 rounded">
            {/* Message button for rooms with no pending items */}
            <img src="/Message.svg" alt="Message Icon" /> {/* Provide alt text for accessibility */}
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomListItem;
