import { twMerge } from "tailwind-merge";

interface InputProps {
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
}

function Input({
  type = "text",
  name,
  value = "",
  placeholder = "",
  className,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      className={twMerge(
        "rounded-lg placeholder:text-primary-text bg-light-background py-[11px] px-5 font-light text-base leading-5 outline-none h-[42px]",
        className
      )}
    />
  );
}

export default Input;
