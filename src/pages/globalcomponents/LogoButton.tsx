import react from "react"
import { twMerge } from "tailwind-merge";

type LogoButtonProps = {
    className?: string;
}
const LogoButton = ({className}: LogoButtonProps) => {
    return <div className={twMerge("w-16 h-16 rounded-lg bg-white flex items-center", className)}>
        <img src="/logo/logo1.jpg" className="w-12 h-12 rounded-lg m-auto" />
    </div>
};

export default LogoButton;