import { twMerge } from "tailwind-merge";

interface TextFieldProps {
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
}

function TextField({
  name,
  value = "",
  placeholder = "",
  className,
}: TextFieldProps) {
  return (
    <textarea
      rows={3}
      name={name}
      value={value}
      placeholder={placeholder}
      className={twMerge(
        "rounded-lg bg-light-background py-2 px-4 font-light text-sm leading-4 outline-none",
        className
      )}
    />
  );
}

export default TextField;
