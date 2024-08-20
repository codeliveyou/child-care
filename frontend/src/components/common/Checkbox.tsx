import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface CheckboxProps {
  label: string;
  className?: string;
  labelClass?: string;
}

function Checkbox({ label, labelClass = "", className = "" }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div
      className={twMerge(
        "flex items-center gap-x-2.5 cursor-pointer",
        className
      )}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {/* <input type="checkbox" id="id-checkbox" className={inputClass} /> */}
      <span className="shrink-0 w-4 h-4 flex items-center justify-center border border-disabled-text rounded-[4px]">
        {checked && <FaCheck className="text-primary-background" />}
      </span>
      <label htmlFor="id-checkbox" className={labelClass}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
