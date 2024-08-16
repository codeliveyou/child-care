import React from "react";
import { colors } from "../../../constants/colors";

type EventListItemProps = {
  title: string; // Title of the event
  content: string; // Detailed content or description of the event
  date: string; // Date of the event
};

const EventListItem: React.FC<EventListItemProps> = ({
  title,
  content,
  date,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div style={{ color: colors.blue }} className="text-lg font-semibold">
        {title}
      </div>
      <div>{content}</div>
      <div style={{ color: colors.textBlack, opacity: 0.5 }}>{date}</div>
    </div>
  );
};

export default EventListItem;
