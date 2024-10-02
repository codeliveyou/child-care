interface IEventListItem {
  // The date of the event in string format
  date: string;
  // Object containing start and end times of the event
  time: {
    start: string;
    end: string;
  };
  // Weekday of the event
  weekday: string;
  // Target date for the event (e.g., registration or deadline date)
  targetDate: string;
  // Title of the event
  title: string;
  // Description of the event
  description: string;
}

/**
 * EventListItem component displays detailed information about an event.
 *
 * @param {IEventListItem} props - Component properties including event details.
 * @param {string} props.date - The date of the event.
 * @param {Object} props.time - The start and end time of the event.
 * @param {string} props.time.start - The start time of the event.
 * @param {string} props.time.end - The end time of the event.
 * @param {string} props.weekday - The weekday of the event.
 * @param {string} props.targetDate - The target date for the event.
 * @param {string} props.title - The title of the event.
 * @param {string} props.description - The description of the event.
 * @returns {JSX.Element} The rendered EventListItem component.
 */
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
      {/* Container for event date and time details */}
      <div className="w-[100px] px-1.5 border-r-2 border-r-disabled-text flex flex-col shrink-0">
        <div className="flex flex-col gap-y-1 items-center self-start">
          {/* Display event date */}
          <p className="font-bold text-xl leading-7">{date}</p>
          <div className="font-light text-sm leading-4 text-disabled-text flex flex-col items-center">
            {/* Display start and end time */}
            <p>{time.start}</p>-<p>{time.end}</p>
          </div>
          {/* Display the weekday of the event */}
          <p className="text-sm leading-4">{weekday}</p>
        </div>
      </div>
      {/* Container for event title and description */}
      <div className="py-2 px-4 flex flex-col gap-y-1">
        {/* Display target date */}
        <p className="text-primary-text/50 text-sm leading-4 font-light">
          {targetDate}
        </p>
        {/* Display event title */}
        <p className="text-primary-background font-semibold leading-5">
          {title}
        </p>
        {/* Display event description with line clamping */}
        <p className="text-primary-text text-sm leading-4 font-light line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EventListItem;
