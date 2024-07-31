import react from "react"
import { colors } from "../../constants/colors";
import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
    value: number;
    className: string;
}
const ProgressBar = ({value, className}: ProgressBarProps) => {
    return <>
        <div className={twMerge("w-full rounded-full h-2 overflow-hidden bg-[#E9E9F3]", className)}>
            <div style={{width: `${value}%`, backgroundColor: colors.blue}} className="h-2"></div>
        </div>
    </>
}

export default ProgressBar;