import { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

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
  onClose = () => {},
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

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
              bounceDamping: 8,
              bounce: 0.3,
              duration: 0.5,
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
