import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

type AvatarProps = {
  // URI of the image to display
  uri: string;
  // Optional name to display when expanded
  name?: string;
  // Optional label to display when expanded
  label?: string;
  // Optional additional CSS classes
  className?: string;
  // Optional boolean to control expanded state
  isExpanded?: boolean;
};

/**
 * Avatar component displays a user avatar with optional name and label.
 *
 * @param {AvatarProps} props - Component properties including avatar details and styling.
 * @param {string} props.uri - The URI of the image to display.
 * @param {string} [props.name] - Optional name to display when the avatar is expanded.
 * @param {string} [props.label] - Optional label to display when the avatar is expanded.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the avatar container.
 * @param {boolean} [props.isExpanded] - Optional boolean to control if the avatar should be expanded.
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar = ({
  uri,
  name = "",
  label = "",
  isExpanded = false,
  className = "",
}: AvatarProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isNameShown = false;

  return (
    <div
      // Merge default Tailwind styles with any additional classes and conditional styles based on isExpanded
      className={twMerge(
        "w-[71px] h-[71px] rounded-2xl bg-white flex items-center justify-center",
        isNameShown && isExpanded ? "px-2 w-full justify-between" : "",
        className
      )}
    >
      {/* Display the avatar image */}
      <img src={uri} className="w-[55px] h-[55px] rounded-lg" />
      {isNameShown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Display the name when expanded */}
          <p className="font-extrabold text-lg leading-5 text-primary-background">
            {name}
          </p>
          {/* Display the label when expanded */}
          <p className="font-light text-sm leading-4 text-primary-background">
            {label}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Avatar;
