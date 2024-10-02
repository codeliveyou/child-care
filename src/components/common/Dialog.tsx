import { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

type MaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "screen";
type Animation = "to-bottom" | "to-left";

interface DialogProps extends PropsWithChildren {
  // Controls whether the dialog is open or closed
  open: boolean;
  // Function to call when the dialog should be closed
  onClose: () => void;
  // Optional additional CSS classes for the outer container
  className?: string;
  // Optional maximum width of the dialog
  maxWidth?: MaxWidth;
  // Optional animation type for dialog entrance and exit
  animation?: Animation;
}

/**
 * Dialog component is a modal that displays content with optional animations and width settings.
 *
 * @param {DialogProps} props - Component properties including visibility, styling, and animations.
 * @param {boolean} props.open - Determines if the dialog is currently visible.
 * @param {() => void} props.onClose - Function to be called when the dialog should be closed.
 * @param {string} [props.className=""] - Optional additional CSS classes to apply to the dialog.
 * @param {MaxWidth} [props.maxWidth="sm"] - Defines the maximum width of the dialog.
 * @param {Animation} [props.animation="to-bottom"] - Defines the animation style for the dialog.
 * @param {React.ReactNode} props.children - The content to display inside the dialog.
 * @returns {JSX.Element} The rendered Dialog component.
 */
function Dialog({
  open,
  className = "",
  maxWidth = "sm",
  animation = "to-bottom",
  children,
  onClose = () => {},
}: DialogProps) {
  // Ref to manage the dialog element and handle outside clicks
  const dialogRef = useRef<HTMLDivElement>(null);

  // Hook to detect clicks outside the dialog and trigger the onClose function
  useOnClickOutside(dialogRef, onClose);

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
