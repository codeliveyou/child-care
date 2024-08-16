import { twMerge } from "tailwind-merge";

interface CheckboxProps {
  label: string;
  className?: string;
}

function Checkbox({ label, className = "" }: CheckboxProps) {
  return (
    <div className={twMerge("flex items-center gap-x-2.5", className)}>
      <input type="checkbox" id="id-checkbox" />
      <label htmlFor="id-checkbox">{label}</label>
    </div>
  );
}

export default Checkbox;
