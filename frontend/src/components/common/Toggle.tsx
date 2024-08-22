import { twMerge } from "tailwind-merge";

type ToggleProps = {
  isToggled: boolean;
  handleToggle: (toggle: boolean) => void;
  className?: string;
  spinClass?: string;
  spinActiveClass?: string;
};
const Toggle = ({
  isToggled,
  handleToggle,
  className = "",
  spinClass = "",
  spinActiveClass = "",
}: ToggleProps) => {
  return (
    <div
      className={twMerge(
        "p-0.5 w-[50px] flex items-center cursor-pointer bg-light-background rounded-full",
        !isToggled ? "justify-start" : "justify-end",
        className
      )}
      onClick={() => {
        handleToggle(!isToggled);
      }}
    >
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isToggled}
        onChange={(e) => {
          handleToggle(e.target.checked);
        }}
      />
      <span
        className={twMerge(
          "w-5 h-5 rounded-full",
          isToggled ? "bg-primary-background" : "bg-disabled-text",
          isToggled ? spinActiveClass : spinClass
        )}
      />
    </div>
  );
};

export default Toggle;
