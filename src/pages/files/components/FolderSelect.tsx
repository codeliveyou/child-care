import React, { useState } from "react";
import FolderSVG from "../../../assets/FolderClosed.svg?react"; // Importing SVG icon for folders
import { twMerge } from "tailwind-merge";

type FolderSelectProps = {
    folderNames: string[]; // Array of folder names to display
};

const FolderSelect = ({ folderNames }: FolderSelectProps) => {
    const [selectedId, setSelectedId] = useState<number>(0); // State to track the selected folder ID

    return (
        <div className="flex flex-col">
            {folderNames.map((folderName, id) => (
                <button
                    key={id}
                    className={twMerge("flex items-center p-3 flex gap-2", selectedId === id ? "rounded bg-[#E9E9F3]" : "")} // Dynamically applying styles based on selection
                    onClick={() => setSelectedId(id)} // Updating selected folder ID on button click
                >
                    <FolderSVG /> {/* Rendering folder icon */}
                    {folderName} {/* Displaying folder name */}
                </button>
            ))}
        </div>
    );
};

export default FolderSelect;