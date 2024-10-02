import React from "react";
import { colors } from "../../../constants/colors";

// Define the types for the props expected by the EventListItem component
type EventListItemProps = {
  title: string; // Title of the event
  content: string; // Detailed content or description of the event
  date: string; // Date of the event
};

// Functional component that displays an event item with title, content, and date
const EventListItem: React.FC<EventListItemProps> = ({
  title,
  content,
  date,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Display the event title with a specific color and font styling */}
      <div style={{ color: colors.blue }} className="text-lg font-semibold">
        {title}
      </div>
      {/* Display the detailed content of the event */}
      <div>{content}</div>
      {/* Display the event date with a different color and reduced opacity */}
      <div style={{ color: colors.textBlack, opacity: 0.5 }}>{date}</div>
    </div>
  );
};

export default EventListItem;
