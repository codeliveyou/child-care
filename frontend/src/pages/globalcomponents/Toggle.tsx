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
      ></span>
      {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
    </div>
  );
};

export default Toggle;
