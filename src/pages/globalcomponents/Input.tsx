import react from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
    className?: string;
    placeholder?: string;
    value?: string;
};
const Input = ({className, placeholder, value} : InputProps) => {
    return <input className={twMerge("border-[#1D19E542] border rounded-lg text-base py-2 px-5 outline-none text-[#374151]", className)} placeholder={placeholder} value={value}/>
};

export default Input;