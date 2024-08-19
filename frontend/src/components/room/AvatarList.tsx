import { useState } from "react";
import { twMerge } from "tailwind-merge";

const avatarUris = [
  "/images/room/avatar/1.png",
  "/images/room/avatar/2.png",
  "/images/room/avatar/3.png",
  "/images/room/avatar/4.png",
  "/images/room/avatar/5.png",
];

function AvatarList() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex items-center gap-x-2.5">
      <div className="shrink-0 relative">
        <div className="relative w-36 h-56 rounded-lg overflow-hidden">
          <img
            src={avatarUris[activeIndex]}
            className="absolute left-1/2 -translate-x-1/2 max-w-[200%] h-full w-auto"
          />
        </div>
        <img
          src="/icons/room/check-circle.svg"
          alt="Check icon"
          className="absolute -top-1 -right-2 z-50"
        />
      </div>
      <div className="grow pb-4 flex gap-x-2.5 overflow-x-auto">
        {avatarUris.map((avatarUri, index) => (
          <div
            key={index}
            className={twMerge(
              "shrink-0 relative w-[100px] h-32 rounded-lg opacity-50 hover:opacity-70 active:opacity-80 cursor-pointer overflow-hidden",
              index === activeIndex ? "hidden" : "block"
            )}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            <img
              src={avatarUri}
              alt="Avatar"
              className="absolute left-1/2 -translate-x-1/2 h-full w-auto max-w-[200%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarList;
