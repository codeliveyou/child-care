import { IoFolderOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

// Interface defining the props for the FolderList component
interface FolderListProps {
  folders: string[]; // Array of folder names to display
  activeFolder: string;
  onFolderChange: (folder: string) => void;
}

function FolderList({ folders, activeFolder, onFolderChange }: FolderListProps) {
  // State to keep track of the currently active folder index

  return (
    <div className="flex flex-col gap-y-2.5">
      {/* Render a list of folder items */}
      {folders.map((folder, index) => (
        <div
          key={index} // Unique key for each folder item
          className={twMerge(
            "py-1 px-4 flex gap-x-4 items-center cursor-pointer rounded-lg",
            // Apply active styles if the folder is the currently selected one
            folder === activeFolder
              ? "text-primary-background bg-light-background py-3"
              : "text-primary-text hover:text-primary-background"
          )}
          onClick={() => {
            onFolderChange(folder);
          }}
        >
          {/* Folder icon */}
          <span className="w-8 h-8 flex items-center justify-center">
            <IoFolderOutline size={24} />
          </span>
          {/* Folder name */}
          <p
            className={twMerge(
              "text-base leading-5",
              // Increase text size if the folder is the currently selected one
              folder === activeFolder ? "text-lg leading-6" : ""
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
