import { useState } from "react";
import { twMerge } from "tailwind-merge";

const avatarUris = [
  "/images/room/avatar/1.png",
  "/images/room/avatar/2.png",
  "/images/room/avatar/3.png",
  "/images/room/avatar/4.png",
];

function AvatarList() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex items-center gap-x-2.5">
      <div className="relative w-36 shrink-0">
        <img
          src={avatarUris[activeIndex]}
          className="w-full h-auto rounded-lg"
        />
        <img
          src="/icons/room/check-circle.svg"
          alt="Check icon"
          className="absolute -top-1 -right-2"
        />
      </div>
      <div className="grow flex gap-x-2.5 overflow-x-auto">
        {avatarUris.map((avatarUri, index) => (
          <img
            key={index}
            src={avatarUri}
            alt="Avatar"
            className={twMerge(
              "w-[100px] h-auto rounded-lg opacity-50 hover:opacity-70 active:opacity-80 cursor-pointer",
              index === activeIndex ? "hidden" : "block"
            )}
            onClick={() => {
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AvatarList;
