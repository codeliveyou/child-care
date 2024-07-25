import react from "react"
import { colors } from "../../constants/colors";

type ProgressBarProps = {
    value: number;
}
const ProgressBar = ({value}: ProgressBarProps) => {
    return <>
        <div className="w-full rounded-full h-2 overflow-hidden bg-[#E9E9F3]">
            <div style={{width: `${value}%`, backgroundColor: colors.blue}} className="h-2"></div>
        </div>
    </>
}

export default ProgressBar;