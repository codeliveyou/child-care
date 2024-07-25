import react from "react";
import { colors } from "../../../constants/colors";
import { twMerge } from "tailwind-merge";

type TradeMarkProps = {
    color?: string;
    className?: string;
}
const TradeMark = ({className, color = colors.white}: TradeMarkProps) => {
    return <div className={twMerge("text-3xl font-extrabold", className)} style={{color}}>ChildCare</div>
}

export default TradeMark;