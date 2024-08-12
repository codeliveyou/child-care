import React from "react";
import { colors } from "../../../constants/colors";
import { twMerge } from "tailwind-merge";

type TradeMarkProps = {
    color?: string;  // Optional: Color for the trademark text
    className?: string;  // Optional: Additional CSS classes for customization
}

const TradeMark = ({className, color = colors.white}: TradeMarkProps) => {
    // Component to display a trademark with optional color and class customization

    return <div className={twMerge("text-2xl font-extrabold", className)} style={{color}}>
        ChildCare
    </div>;
}

export default TradeMark;