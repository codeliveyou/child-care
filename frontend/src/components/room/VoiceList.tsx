import { MutableRefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDraggable } from "react-use-draggable-scroll";

const voiceData = [
  {
    name: "röst 1",
  },
  {
    name: "röst 2",
  },
  {
    name: "boy 1",
  },
  {
    name: "girl 1",
  },
];

function VoiceList() {
  const voiceRef = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(voiceRef as MutableRefObject<HTMLElement>);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      ref={voiceRef}
      className="pt-4 pb-2 flex items-center gap-x-2 overflow-x-auto"
      {...events}
    >
      {voiceData.map((voiceItem, index) => (
        <div
          key={index}
          className={twMerge(
            "relative shrink-0 flex flex-col items-center gap-y-2.5 w-[100px] cursor-pointer select-none",
            index === activeIndex ? "w-[120px]" : ""
          )}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          {index === activeIndex && (
            <img
              src="/icons/room/check-circle.svg"
              className="w-8 h-8 absolute -top-3 -right-1 z-[100]"
            />
          )}
          <div
            className={twMerge(
              "rounded-lg w-full flex justify-center py-1 bg-light-background",
              index === activeIndex ? "" : ""
            )}
          >
            <img
              src={
                index === activeIndex
                  ? "/icons/room/statik.svg"
                  : "/icons/room/statik-disabled.svg"
              }
              alt="Voice icon"
              className="w-16 h-auto image-selector"
            />
          </div>
          <p
            className={twMerge(
              "text-center text-xs",
              index === activeIndex
                ? "text-primary-background font-bold"
                : "text-primary-text"
            )}
          >
            {voiceItem.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default VoiceList;
