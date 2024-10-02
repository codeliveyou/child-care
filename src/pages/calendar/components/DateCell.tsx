import React from "react";
import { colors } from "../../../constants/colors";

// Define the props expected by the DateCell component
type DateCellProps = {
    value: string; // The date value to display
    eventNum?: number; // Optional number of events for the day
    status?: "default" | "selected" | "outofmonth"; // Optional status to style the cell
};

// Functional component to render a single date cell
const DateCell: React.FC<DateCellProps> = ({ value, eventNum = 0, status = "default" }) => {
    // Determine if the cell is selected or out of the month
    const isSelected = status === "selected";
    const isOutOfMonth = status === "outofmonth";

    return (
        <div
            className={`aspect-square flex items-center justify-center relative h-16 w-16 m-auto`}
        >
            {
                // Render a background circle if the cell is selected
                isSelected && <div className="rounded-full w-10 h-10 -z-0 absolute" style={{ backgroundColor: colors.blue }} />
            }
            <div className={`text-center z-10 ${isOutOfMonth ? "text-[#B6C2E1]" : ""} ${isSelected ? "text-white" : ""}`}>
                {value} {/* Display the date value */}
            </div>
            {eventNum > 0 && (
                <div className="absolute bottom-1 flex justify-center gap-1">
                    {
                        // Render a small circle for each event, if there are any
                        Array(eventNum).fill(0).map((_, index) => (
                            <div key={index} className="rounded-full w-1 h-1" style={{ backgroundColor: colors.blue }} />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default DateCell;
