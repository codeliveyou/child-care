import React from "react";
import { colors } from "../../../constants/colors";

type DateCellProps = {
    value: string;
    eventNum?: number;
    status?: "default" | "selected" | "outofmonth";
};

const DateCell: React.FC<DateCellProps> = ({ value, eventNum = 0, status = "default" }) => {
    const isSelected = status === "selected";
    const isOutOfMonth = status === "outofmonth";

    return (
        <div
            className={`aspect-square flex items-center justify-center relative h-16 w-16  m-auto `}
        >
            {
                isSelected && <div className="rounded-full w-10 h-10 -z-0 absolute" style={{ backgroundColor: colors.blue }} />
            }
            <div className={`text-center z-10 ${isOutOfMonth ? "text-[#B6C2E1]" : ""} ${isSelected ? "text-white" : ""}`}>
                {value}
            </div>
            {eventNum > 0 && (
                <div className="absolute bottom-1 flex justify-center gap-1">
                    {Array(eventNum).fill(0).map((_, index) => (
                        <div key={index} className="rounded-full w-1 h-1" style={{ backgroundColor: colors.blue }} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DateCell;