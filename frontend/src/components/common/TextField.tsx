import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface TextFieldProps {
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextField({
  name,
  value = "",
  placeholder = "",
  className = "",
  onChange,
}: TextFieldProps) {
  return (
    <textarea
      rows={3}
      name={name}
      value={value}
      placeholder={placeholder}
      className={twMerge(
        "rounded-lg placeholder:text-primary-text bg-light-background py-2 px-4 font-light text-sm leading-4 outline-none",
        className
      )}
      onChange={onChange}
    />
  );
}

export default TextField;
