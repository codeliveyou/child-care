import react from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    children: React.ReactNode;

    [key: string]: any;
};
const Button = ({className, backgroundColor="#211DEF", textColor="#FFF", children, ...props} : ButtonProps) => {
    return <button className={twMerge("border-white border rounded-lg text-lg py-3 px-5", className)}
                    style={{backgroundColor: backgroundColor, color: textColor}} {...props}>
        {children}
    </button>
};

export default Button;