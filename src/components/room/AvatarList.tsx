import { MutableRefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDraggable } from "react-use-draggable-scroll";

// Array containing URIs for avatar images
const avatarUris = [
  "/images/room/avatar/1.png",
  "/images/room/avatar/2.png",
  "/images/room/avatar/3.png",
  "/images/room/avatar/4.png",
  "/images/room/avatar/5.png",
];

function AvatarList() {
  // Reference to the container of avatar images for scroll interaction
  const avatarListRef = useRef<HTMLDivElement>(null);

  // Hook for enabling draggable scrolling on the avatar list
  const { events } = useDraggable(
    avatarListRef as MutableRefObject<HTMLElement>
  );

  // State to keep track of the currently active (selected) avatar
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex items-center gap-x-2.5">
      {/* Container for the active avatar display */}
      <div className="shrink-0 relative">
        <div className="relative w-36 h-56 rounded-lg overflow-hidden">
          {/* Display the currently active avatar */}
          <img
            src={avatarUris[activeIndex]}
            className="absolute left-1/2 -translate-x-1/2 max-w-[200%] h-full w-auto"
          />
        </div>
        {/* Check icon overlay on the active avatar */}
        <img
          src="/icons/room/check-circle.svg"
          alt="Check icon"
          className="absolute -top-1 -right-2 z-50"
        />
      </div>
      {/* Container for the list of avatars to scroll through */}
      <div
        ref={avatarListRef}
        className="grow pb-4 flex gap-x-2.5 overflow-x-auto"
        {...events} // Apply draggable scroll events
      >
        {avatarUris.map((avatarUri, index) => (
          <div
            key={index}
            className={twMerge(
              "shrink-0 relative w-[100px] h-32 rounded-lg opacity-50 hover:opacity-70 active:opacity-80 cursor-pointer overflow-hidden",
              index === activeIndex ? "hidden" : "block" // Hide the active avatar in the list
            )}
            onClick={() => {
              // Update the active avatar index when clicked
              setActiveIndex(index);
            }}
          >
            <img
              src={avatarUri}
              alt="Avatar"
              className="absolute left-1/2 -translate-x-1/2 h-full w-auto max-w-[200%] image-selector"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarList;
