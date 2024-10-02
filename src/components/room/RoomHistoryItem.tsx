interface IRoomHistoryItem {
  date: string;  // Date of the history item
  time: {
    start: string;  // Start time of the history item
    end: string;    // End time of the history item
  };
  weekday: string;  // Day of the week for the history item
  targetDate: string;  // Date associated with the history item
  title: string;  // Title of the history item
  description: string;  // Description of the history item
}

interface RoomHistoryItemProps {
  history: IRoomHistoryItem;  // History data to display
}

function RoomHistoryItem({ history }: RoomHistoryItemProps) {
  return (
    <div className="p-2 flex hover:bg-light-background transition duration-300 cursor-pointer rounded-lg">
      {/* Container for date, time, and weekday information */}
      <div className="w-[100px] px-1.5 border-r-2 border-r-disabled-text flex flex-col shrink-0">
        <div className="flex flex-col gap-y-1 items-center self-start">
          {/* Display the date */}
          <p className="font-bold text-xl leading-7">{history.date}</p>
          {/* Display start and end time */}
          <div className="font-light text-sm leading-4 text-disabled-text flex flex-col items-center">
            <p>{history.time.start}</p>-<p>{history.time.end}</p>
          </div>
          {/* Display the weekday */}
          <p className="text-sm leading-4">{history.weekday}</p>
        </div>
      </div>
      {/* Container for target date, title, and description */}
      <div className="py-2 px-4 flex flex-col gap-y-1">
        {/* Display the target date */}
        <p className="text-primary-text/50 text-sm leading-4 font-light">
          {history.targetDate}
        </p>
        {/* Display the title of the history item */}
        <p className="text-primary-background font-semibold leading-5">
          {history.title}
        </p>
        {/* Display the description with line clamping for overflow */}
        <p className="text-primary-text text-sm leading-4 font-light line-clamp-2">
          {history.description}
        </p>
      </div>
    </div>
  );
}

export default RoomHistoryItem;
export type { IRoomHistoryItem };
