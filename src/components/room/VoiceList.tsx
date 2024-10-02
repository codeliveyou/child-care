import { MutableRefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDraggable } from "react-use-draggable-scroll";

// Sample voice data
const voiceData = [
  {
    name: "röst 1",  // Voice option 1
  },
  {
    name: "röst 2",  // Voice option 2
  },
  {
    name: "boy 1",   // Voice option 3
  },
  {
    name: "girl 1",  // Voice option 4
  },
];

function VoiceList() {
  // Reference for the voice list container
  const voiceRef = useRef<HTMLDivElement>(null);

  // Draggable functionality for scrolling
  const { events } = useDraggable(voiceRef as MutableRefObject<HTMLElement>);

  // State to track the currently active voice item
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      ref={voiceRef}  // Set ref for draggable functionality
      className="pt-4 pb-2 flex items-center gap-x-2 overflow-x-auto"
      {...events}  // Apply draggable scroll events
    >
      {/* Render each voice item */}
      {voiceData.map((voiceItem, index) => (
        <div
          key={index}
          className={twMerge(
            "relative shrink-0 flex flex-col items-center gap-y-2.5 w-[100px] cursor-pointer select-none",
            index === activeIndex ? "w-[120px]" : ""  // Increase width for active item
          )}
          onClick={() => {
            setActiveIndex(index);  // Set clicked item as active
          }}
        >
          {/* Show check icon for the active item */}
          {index === activeIndex && (
            <img
              src="/icons/room/check-circle.svg"
              className="w-8 h-8 absolute -top-3 -right-1 z-[100]"
              alt="Check icon"
            />
          )}
          <div
            className={twMerge(
              "rounded-lg w-full flex justify-center py-1 bg-light-background",
              index === activeIndex ? "" : ""  // Conditional styling (currently identical)
            )}
          >
            <img
              src={
                index === activeIndex
                  ? "/icons/room/statik.svg"  // Active state icon
                  : "/icons/room/statik-disabled.svg"  // Inactive state icon
              }
              alt="Voice icon"
              className="w-16 h-auto image-selector"
            />
          </div>
          <p
            className={twMerge(
              "text-center text-xs",
              index === activeIndex
                ? "text-primary-background font-bold"  // Styling for active item
                : "text-primary-text"  // Styling for inactive items
            )}
          >
            {voiceItem.name}  {/* Display the voice name */}
          </p>
        </div>
      ))}
    </div>
  );
}

export default VoiceList;
