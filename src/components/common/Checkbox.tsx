import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps {
  // Label to be displayed next to the checkbox
  label: string;
  // Optional additional CSS classes for the checkbox container
  className?: string;
  // Optional additional CSS classes for the label
  labelClass?: string;
}

/**
 * Checkbox component represents a clickable checkbox with a label.
 *
 * @param {CheckboxProps} props - Component properties including checkbox label and styling.
 * @param {string} props.label - The label text to display next to the checkbox.
 * @param {string} [props.className=""] - Optional additional CSS classes for the checkbox container.
 * @param {string} [props.labelClass=""] - Optional additional CSS classes for the label.
 * @returns {JSX.Element} The rendered Checkbox component.
 */
function Checkbox({ label, labelClass = "", className = "" }: CheckboxProps) {
  // State to track whether the checkbox is checked
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div
      // Merge default Tailwind styles with any additional classes passed via className prop
      className={twMerge(
        "flex items-center gap-x-2.5 cursor-pointer",
        className
      )}
      onClick={() => {
        // Toggle checked state when checkbox is clicked
        setChecked(!checked);
      }}
    >
      {/* Display the checkbox itself */}
      <span className="shrink-0 w-4 h-4 flex items-center justify-center border border-disabled-text rounded-[4px]">
        {checked && (
          // Display the inner filled box when checked
          <span className="shrink-0 w-2.5 h-2.5 rounded-[2px] bg-primary-background" />
        )}
      </span>
      {/* Display the label next to the checkbox */}
      <label htmlFor="id-checkbox" className={labelClass}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
