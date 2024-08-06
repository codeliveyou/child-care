import React, { useState } from "react";
import Button from "../../globalcomponents/Button";
import LeftSVG from "../../../assets/left.svg?react";
import DateCell from "./DateCell";
import AddCalendarEventDialog from "./AddCalendarEventDialog";

const CalendarItem = () => {
    const [isDialogShowed, setIsDialogShowed] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-4">
            <AddCalendarEventDialog isOpen={isDialogShowed} onClose={() => setIsDialogShowed(false)} />
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Kalender</div>
                <Button className="text-4xl p-0 px-4" onClick={() => setIsDialogShowed(true)}>+</Button>
            </div>
            <div className="flex gap-2">
                <div className="flex gap-1">
                    <div className="font-semibold text-xl">Juni</div>
                    <div className="font-medium text-xl text-[#B6C2E1]">2024</div>
                </div>
                <div className="flex-1" />
                <button className="p-2 border-2 rounded-lg w-10 h-10 border-[#B6C2E1] text-[#B6C2E1] flex items-center justify-center"><LeftSVG /></button>
                <button className="p-2 border-2 rounded-lg w-10 h-10 border-[#B6C2E1] text-[#B6C2E1] flex items-center justify-center"><LeftSVG className="transform rotate-180" /></button>
            </div>
            <div className="grid grid-cols-7 text-center">
                <div>Mon</div>
                <div>Tis</div>
                <div>Ons</div>
                <div>Tor</div>
                <div>Fre</div>
                <div>Lör</div>
                <div>Sön</div>
                <DateCell value="27" status="outofmonth" />
                <DateCell value="28" status="outofmonth" />
                <DateCell value="29" status="outofmonth" />
                <DateCell value="30" status="outofmonth" />
                <DateCell value="1" />
                <DateCell value="2" status="selected" />
                <DateCell value="3" />
                <DateCell value="4" eventNum={2} />
                <DateCell value="5" />
                <DateCell value="6" />
                <DateCell value="7" />
                <DateCell value="8" />
                <DateCell value="9" />
                <DateCell value="10" eventNum={1} />
                <DateCell value="11" />
                <DateCell value="12" />
                <DateCell value="13" eventNum={1} />
                <DateCell value="14" />
                <DateCell value="15" />
                <DateCell value="16" />
                <DateCell value="17" />
                <DateCell value="18" eventNum={3} />
                <DateCell value="19" />
                <DateCell value="20" />
                <DateCell value="21" />
                <DateCell value="22" eventNum={1} />
                <DateCell value="23" />
                <DateCell value="24" />
            </div>
        </div>
    );
};

export default CalendarItem;