import { colors } from "../../constants/colors";
import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
  // Value representing the progress percentage (0 to 100)
  value: number;
  // Optional additional CSS classes for styling
  className?: string;
};

/**
 * ProgressBar component displays a progress indicator as a horizontal bar.
 *
 * @param {ProgressBarProps} props - Component properties including progress value and custom class names.
 * @param {number} props.value - The progress percentage to display (0 to 100).
 * @param {string} [props.className=""] - Optional additional CSS classes to style the progress bar.
 * @returns {JSX.Element} The rendered progress bar component.
 */
const ProgressBar = ({ value, className = "" }: ProgressBarProps) => {
  return (
    <div
      className={twMerge(
        "w-full rounded-full h-2 overflow-hidden bg-[#E9E9F3]",
        className
      )}
    >
      <div
        style={{ width: `${value}%`, backgroundColor: colors.blue }}
        className="h-2"
      ></div>
    </div>
  );
};

export default ProgressBar;
