interface IRoomHistoryItem {
  date: string;
  time: {
    start: string;
    end: string;
  };
  weekday: string;
  targetDate: string;
  title: string;
  description: string;
}

interface RoomHistoryItemProps {
  history: IRoomHistoryItem;
}

function RoomHistoryItem({ history }: RoomHistoryItemProps) {
  return (
    <div className="p-2 flex rounded-lg cursor-pointer hover:bg-light-background">
      <div className="w-[100px] px-1.5 border-r-2 border-r-disabled-text flex flex-col shrink-0">
        <div className="flex flex-col gap-y-1 items-center self-start">
          <p className="font-bold text-xl leading-7">{history.date}</p>
          <div className="font-light text-sm leading-4 text-disabled-text flex flex-col items-center">
            <p>{history.time.start}</p>-<p>{history.time.end}</p>
          </div>
          <p className="text-sm leading-4">{history.weekday}</p>
        </div>
      </div>
      <div className="py-2 px-4 flex flex-col gap-y-1">
        <p className="text-primary-text/50 text-sm leading-4 font-light">
          {history.targetDate}
        </p>
        <p className="text-primary-background font-semibold leading-5">
          {history.title}
        </p>
        <p className="text-primary-text text-sm leading-4 font-light line-clamp-2">
          {history.description}
        </p>
      </div>
    </div>
  );
}

export default RoomHistoryItem;
export type { IRoomHistoryItem };
