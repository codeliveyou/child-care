import { twMerge } from "tailwind-merge";

interface CheckboxProps {
  label: string;
  className?: string;
  inputClass?: string;
  labelClass?: string;
}

function Checkbox({
  label,
  inputClass = "",
  labelClass = "",
  className = "",
}: CheckboxProps) {
  return (
    <div className={twMerge("flex items-center gap-x-2.5", className)}>
      <input type="checkbox" id="id-checkbox" className={inputClass} />
      <label htmlFor="id-checkbox" className={labelClass}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
