import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

type InputSize = "large" | "medium" | "small";

interface InputProps {
  type?: string;
  size?: InputSize;
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type = "text",
  size = "large",
  name,
  value = "",
  placeholder = "",
  className = "",
  onChange = () => {},
}: InputProps) {
  const sizeClass =
    size === "large"
      ? "py-[11px] px-5 h-[42px] text-base leading-5"
      : size === "small"
      ? "py-2 px-4 h-[33px] text-xs leading-[18px]"
      : "";

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={twMerge(
        "font-light placeholder:text-primary-text bg-light-background outline-none rounded-lg",
        sizeClass,
        className
      )}
      onChange={onChange}
    />
  );
}

export default Input;
