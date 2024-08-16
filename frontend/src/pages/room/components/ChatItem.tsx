import { twMerge } from "tailwind-merge";

type ChatItemProps = {
  name: string;
  role: string;
  content: string;
};

const ChatItem = ({ name, content, role }: ChatItemProps) => {
  const isLeftAligned = role === "me" || role === "AI";

  return (
    <div className={`flex gap-2 ${isLeftAligned ? "" : "flex-row-reverse"}`}>
      <span
        className={twMerge(
          "flex-none w-12 h-12",
          role !== "me"
            ? "flex items-center justify-center bg-[#DBF6D4] text-[32px] leading-10 text-primary-text rounded-lg"
            : ""
        )}
      >
        {role === "me" || role === "AI" ? (
          <img
            src={
              role === "me"
                ? "/images/avatar.png"
                : "/images/room/call/mine.png"
            }
            alt={`${name}'s avatar`}
            className="rounded-lg overflow-hidden w-full h-full object-cover"
          />
        ) : (
          name.charAt(0).toUpperCase()
        )}
      </span>
      <div
        className={`flex flex-col gap-2 ${isLeftAligned ? "" : "items-end"}`}
      >
        <div className={`font-bold ${isLeftAligned ? "" : "text-right"}`}>
          {role === "guest" && "Dr. "}
          {name}
        </div>
        <div
          className={`rounded-lg p-2 text-sm text-[#374151] ${
            isLeftAligned ? "bg-[#E9E9F3] mr-10" : "bg-[#DBF6D4] ml-10"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
