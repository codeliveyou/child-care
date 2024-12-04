import { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

// Helper function to check if an element is inside a portal (e.g., MUI pickers)
const isElementInPortal = (event: Event) => {
  const portalClass = "MuiPickersPopper-root"; // Class added by MUI pickers
  let target = event.target as HTMLElement | null;
  while (target) {
    if (target.classList?.contains(portalClass)) {
      return true;
    }
    target = target.parentElement;
  }
  return false;
};

type MaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "screen";
type Animation = "to-bottom" | "to-left";

interface DialogProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
  maxWidth?: MaxWidth;
  animation?: Animation;
}

function Dialog({
  open,
  className = "",
  maxWidth = "sm",
  animation = "to-bottom",
  children,
  onClose = () => { },
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Custom hook: only close if the click is outside the dialog and not in a portal
  const handleClickOutside = (event: FocusEvent | MouseEvent | TouchEvent) => {
    // Ensure the event target is not inside a portal
    if (isElementInPortal(event)) return;

    // Ensure the event target is outside the dialog
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useOnClickOutside(dialogRef, handleClickOutside);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={twMerge(
            "fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/20 z-50"
          )}
        >
          <motion.div
            ref={dialogRef}
            initial={
              animation === "to-bottom"
                ? { y: "-100vh" }
                : animation === "to-left"
                  ? { x: "100vw" }
                  : {}
            }
            animate={
              animation === "to-bottom"
                ? { y: 0 }
                : animation === "to-left"
                  ? { x: 0 }
                  : {}
            }
            exit={
              animation === "to-bottom"
                ? { y: "-100vh" }
                : animation === "to-left"
                  ? { x: "100vw" }
                  : {}
            }
            transition={{
              type: "spring",
              bounceDamping: 0.8,
              bounce: 0.2,
              duration: 0.9,
            }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dialog;
export type { Animation };
