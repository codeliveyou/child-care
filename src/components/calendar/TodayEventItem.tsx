interface ITodayEventItem {
  // The date of the event
  date: string;
  // The title of the event
  title: string;
  // The description of the event
  description: string;
}

/**
 * TodayEventItem component displays information about an event happening today.
 *
 * @param {ITodayEventItem} props - Component properties including event details.
 * @param {string} props.date - The date of the event.
 * @param {string} props.title - The title of the event.
 * @param {string} props.description - The description of the event.
 * @returns {JSX.Element} The rendered TodayEventItem component.
 */
function TodayEventItem({ date, title, description }: ITodayEventItem) {
  return (
    <div className="py-2 flex flex-col gap-y-2.5">
      {/* Display the title of the event */}
      <p className="font-semibold text-primary-background leading-5">{title}</p>
      {/* Display the description of the event */}
      <p className="text-sm leading-4 font-light">{description}</p>
      {/* Display the date of the event */}
      <p className="text-sm leading-4 font-light text-disabled-text">{date}</p>
    </div>
  );
}

export default TodayEventItem;
