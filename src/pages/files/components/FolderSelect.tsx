import react, { useState } from "react"
import FolderSVG from "../../../assets/FolderClosed.svg?react"
import { twMerge } from "tailwind-merge";

type FolderSelectProps = {
    folderNames: string[];
}
const FolderSelect = ({folderNames}: FolderSelectProps) => {
    const [selectedId, setSelectedId] = useState<number>(0);
    return <>
        <div className="flex flex-col">
            { folderNames.map((folderName, id) => {
                return (
                    <button key={id} className={twMerge("flex items-center p-3 flex gap-2", selectedId === id ? "rounded bg-[#E9E9F3]" : "")}>
                        <FolderSVG />
                        {folderName}
                    </button>
                )
            }) }
        </div>
    </>
};

export default FolderSelect;