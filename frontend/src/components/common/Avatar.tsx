import { twMerge } from "tailwind-merge";

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
  className = "",
}: AvatarProps) => {
  const isNameShown = true;

  return (
    <div
      // Merge default Tailwind styles with any additional classes and conditional styles based on isExpanded
      className={twMerge(
        "px-2 w-full h-[71px] rounded-2xl bg-white flex items-center gap-x-9 overflow-hidden",
        className
      )}
    >
      {/* Display the avatar image */}
      <img src={uri} className="w-[55px] h-[55px] rounded-lg" />
      {isNameShown && (
        <div>
          {/* Display the name when expanded */}
          <p className="font-extrabold text-lg leading-5 text-primary-background text-nowrap">
            {name}
          </p>
          {/* Display the label when expanded */}
          <p className="font-light text-sm leading-4 text-primary-background text-nowrap">
            {label}
          </p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
