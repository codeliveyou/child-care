import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa6";

import DateCell from "../../pages/calendar/components/DateCell";
import EventDialog from "../dashboard/EventDialog";
import { Action } from "../dashboard/EventDialog";

function MonthCalendar() {
  // State to control the visibility of the EventDialog
  const [eventDialogOpen, setEventDialogOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative p-4 flex flex-col gap-y-6 bg-white rounded-xl">
        {/* Button to open the EventDialog */}
        <button
          className="absolute top-2 right-2 py-2 px-4 bg-primary-background text-white rounded-lg"
          onClick={() => {
            setEventDialogOpen(true);
          }}
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <FaPlus />
          </span>
        </button>
        {/* Calendar title */}
        <p className="font-semibold text-lg leading-6">Kalender</p>
        <div className="flex flex-col gap-2.5">
          {/* Calendar navigation */}
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl leading-6">
              Juni <span className="font-normal">2024</span>
            </p>
            <div className="flex gap-x-2.5">
              {/* Button to navigate to the previous month */}
              <span className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-disabled-text cursor-pointer hover:bg-primary-background hover:border-primary-background hover:text-white">
                <FaChevronLeft />
              </span>
              {/* Button to navigate to the next month */}
              <span className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-disabled-text cursor-pointer hover:bg-primary-background hover:border-primary-background hover:text-white">
                <FaChevronRight />
              </span>
            </div>
          </div>
          {/* Calendar grid showing days of the week and dates */}
          <div className="grid grid-cols-7 text-center">
            {/* Weekday headers */}
            <div>Mon</div>
            <div>Tis</div>
            <div>Ons</div>
            <div>Tor</div>
            <div>Fre</div>
            <div>Lör</div>
            <div>Sön</div>
            {/* Date cells for the calendar */}
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
      </div>
      {/* Event dialog component */}
      <EventDialog
        title=""
        description=""
        day=""
        time=""
        open={eventDialogOpen}
        onClose={() => {
          setEventDialogOpen(false);
        }}
        action={Action.Create}
      />
    </>
  );
}

export default MonthCalendar;
