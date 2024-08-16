import { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";

type MaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "screen";

interface DialogProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
  maxWidth?: MaxWidth;
}

function Dialog({
  open,
  className = "",
  maxWidth = "sm",
  children,
  onClose = () => {},
}: DialogProps) {
  if (!open) return;
  const dialogRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dialogRef, onClose);

  return (
    <div
      className={
        "fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/20"
      }
    >
      <div
        ref={dialogRef}
        className={twMerge(
          "w-full rounded-lg",
          maxWidth === "xs"
            ? "max-w-[450px]"
            : maxWidth === "sm"
            ? "max-w-screen-sm"
            : maxWidth === "md"
            ? "max-w-screen-md"
            : maxWidth === "lg"
            ? "max-w-screen-lg"
            : maxWidth === "xl"
            ? "max-w-screen-xl"
            : maxWidth === "2xl"
            ? "max-w-screen-2xl"
            : "max-w-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Dialog;
