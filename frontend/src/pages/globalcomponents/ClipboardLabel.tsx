import react from "react"
import { twMerge } from "tailwind-merge";
import { colors } from "../../constants/colors";

type ClipBoardLabelProps = {
    className?: string;
    children?: React.ReactNode;
}
const ClipBoardLabel = ({className, children}: ClipBoardLabelProps) => {
    return <div className={twMerge("border border-[#B6C2E1] py-2 px-4 rounded-2xl flex justify-between text-lg font-normal text-[#B6C2E1] w-60", className)} style={{backgroundColor: colors.blue}}>
        {children}
        <button><img src="/Copy.svg" /></button>
    </div>
};

export default ClipBoardLabel;