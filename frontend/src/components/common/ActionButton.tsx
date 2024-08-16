import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ActionButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

function ActionButton({
  className = "",
  children,
  onClick,
}: ActionButtonProps) {
  return (
    <span
      className={twMerge(
        "w-12 h-12 flex items-center justify-center rounded-lg hover:opacity-85 active:opacity-70 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

export default ActionButton;
