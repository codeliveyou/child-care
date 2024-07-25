import react from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
    className?: string;
    placeholder?: string;
    value?: string;
};
const Input = ({className, placeholder, value} : InputProps) => {
    return <input className={twMerge("border-[#1D19E542] border rounded-lg text-black text-lg py-3 px-5 outline-none", className)} placeholder={placeholder} value={value}/>
};

export default Input;