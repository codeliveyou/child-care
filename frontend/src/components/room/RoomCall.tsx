import { TbDotsVertical } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

import ActionButton from "../common/ActionButton";

interface RoomCallProps {
  className?: string;
}

function RoomCall({ className = "" }: RoomCallProps) {
  return (
    <div
      className={twMerge(
        "relative w-full rounded-lg overflow-hidden",
        className
      )}
    >
      <img
        src="/images/room/call/background.png"
        alt="Background image"
        className="absolute top-1/2 -translate-y-1/2 w-full h-auto"
      />
      <div className="absolute top-0 p-2.5 w-full flex justify-between">
        <ActionButton className="bg-primary-background">
          <img src="/icons/call/share.svg" className="w-6 h-6" />
        </ActionButton>
        <img
          src="/images/room/call/mine.png"
          alt="Mine image"
          className="w-[150px] h-[160px] rounded-lg"
        />
      </div>
      <div className="absolute bottom-0 p-2.5 w-full">
        <div className="py-2 px-4 flex items-center justify-between">
          <ActionButton className="rounded-full bg-red-500">
            <img src="/icons/call/stop.svg" className="w-4 h-4" />
          </ActionButton>
          <div className="flex items-center gap-x-4">
            <ActionButton className="rounded-full bg-white">
              <img src="/icons/call/mute.svg" className="w-6 h-6" />
            </ActionButton>
            <ActionButton className="rounded-full bg-white">
              <img src="/icons/call/photo.svg" className="w-6 h-6" />
            </ActionButton>
            <ActionButton className="rounded-2xl bg-green-500 w-16 h-16">
              <img src="/icons/call/phone.svg" className="w-9 h-9" />
            </ActionButton>
            <ActionButton className="rounded-full bg-white">
              <img src="/icons/call/microphone.svg" className="w-6 h-6" />
            </ActionButton>
            <ActionButton className="rounded-full bg-white">
              <img src="/icons/call/video.svg" className="w-5 h-4" />
            </ActionButton>
          </div>
          <ActionButton className="justify-end text-white">
            <TbDotsVertical size={24} />
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

export default RoomCall;
