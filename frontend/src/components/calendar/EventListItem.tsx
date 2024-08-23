interface IEventListItem {
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

function EventListItem({
  date,
  time,
  weekday,
  targetDate,
  title,
  description,
}: IEventListItem) {
  return (
    <div className="p-2 flex hover:bg-light-background transition duration-300 cursor-pointer rounded-lg">
      <div className="w-[100px] px-1.5 border-r-2 border-r-disabled-text flex flex-col shrink-0">
        <div className="flex flex-col gap-y-1 items-center self-start">
          <p className="font-bold text-xl leading-7">{date}</p>
          <div className="font-light text-sm leading-4 text-disabled-text flex flex-col items-center">
            <p>{time.start}</p>-<p>{time.end}</p>
          </div>
          <p className="text-sm leading-4">{weekday}</p>
        </div>
      </div>
      <div className="py-2 px-4 flex flex-col gap-y-1">
        <p className="text-primary-text/50 text-sm leading-4 font-light">
          {targetDate}
        </p>
        <p className="text-primary-background font-semibold leading-5">
          {title}
        </p>
        <p className="text-primary-text text-sm leading-4 font-light line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EventListItem;
