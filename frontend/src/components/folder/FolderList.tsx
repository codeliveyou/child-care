import { useState } from "react";
import { IoFolderOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface FolderListProps {
  folders: string[];
}

function FolderList({ folders }: FolderListProps) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <div className="flex flex-col gap-y-2.5">
      {folders.map((folder, index) => (
        <div
          key={index}
          className={twMerge(
            "py-1 px-4 flex gap-x-4 items-center cursor-pointer rounded-lg",
            index === activeIndex
              ? "text-primary-background bg-light-background py-3"
              : "text-primary-text"
          )}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          <span className="w-8 h-8 flex items-center justify-center">
            <IoFolderOutline size={24} />
          </span>
          <p
            className={twMerge(
              "leading-5",
              activeIndex === index ? "text-xl leading-7" : ""
            )}
          >
            {folder}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FolderList;
