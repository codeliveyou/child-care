type EventItemProps = {
  date: string;
  startTime: string;
  endTime: string;
  fulldate: string;
  title: string;
  content: string;
  DoW: string;
};
const EventItem = ({
  date,
  startTime,
  endTime,
  DoW,
  fulldate,
  title,
  content,
}: EventItemProps) => {
  return (
    <>
      <div className="flex p-3">
        <div className="flex flex-col items-center border-r-2 border-[#B6C2E1] pr-3 basis-24 flex-none">
          <div className="text-xl font-bold text-[#374151]">{date}</div>
          <div className="text-[#37415180] text-sm">{startTime}</div>
          <div className="text-[#37415180] text-sm">-</div>
          <div className="text-[#37415180] text-sm">{endTime}</div>
          <div className="text-[#374151]">{DoW}</div>
        </div>
        <div className="flex flex-col p-3 justify-between">
          <div className="text-[12px] text-[#37415188] font-light">
            {fulldate}
          </div>
          <div className="text-[#211DEF] font-bold">{title}</div>
          <div className="text-[11px] text-[#374151]">{content}</div>
        </div>
      </div>
    </>
  );
};

export default EventItem;
