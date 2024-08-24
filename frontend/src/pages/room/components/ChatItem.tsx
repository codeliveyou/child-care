import { twMerge } from "tailwind-merge";

type ChatItemProps = {
  name: string;  // Name of the person sending the chat message
  role: string;  // Role of the person ("me", "AI", "guest", etc.)
  content: string;  // Content of the chat message
};

// Functional component to render a chat item
const ChatItem = ({ name, content, role }: ChatItemProps) => {
  // Determine alignment based on the role
  const isLeftAligned = role === "me" || role === "AI";

  return (
    <div className={`flex gap-2 ${isLeftAligned ? "" : "flex-row-reverse"}`}>
      {/* Avatar or initial based on the role */}
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
                ? "/images/avatar.png"  // Avatar image for the user
                : "/images/room/call/mine.png"  // Avatar image for AI
            }
            alt={`${name}'s avatar`}  // Alt text for the avatar image
            className="rounded-lg overflow-hidden w-full h-full object-cover"
          />
        ) : (
          // Display the first letter of the name for non-avatar roles
          name.charAt(0).toUpperCase()
        )}
      </span>
      <div
        className={`flex flex-col gap-2 ${isLeftAligned ? "" : "items-end"}`}
      >
        {/* Display the name with optional prefix for guest roles */}
        <div className={`font-bold ${isLeftAligned ? "" : "text-right"}`}>
          {role === "guest" && "Dr. "}
          {name}
        </div>
        {/* Display the content of the chat message with conditional styling */}
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
