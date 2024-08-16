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
      value={value}
      className={twMerge(
        "rounded-lg bg-light-background py-2 px-4 font-light text-sm leading-4 outline-none",
        className
      )}
    />
  );
}

export default Input;
