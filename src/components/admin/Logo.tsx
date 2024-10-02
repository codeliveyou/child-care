import { twMerge } from "tailwind-merge";

interface LogoProps {
  // Optional className prop for custom styling
  className?: string;
}

/**
 * Logo component displays the "Childcare" text with specified styles.
 *
 * @param {LogoProps} props - Component properties.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @returns {JSX.Element} The rendered Logo component.
 */
function Logo({ className = "" }: LogoProps) {
  return (
    <div
      // Merge default Tailwind styles with any additional classes passed via className prop
      className={twMerge(
        "font-extrabold text-[32px] leading-8 text-primary-background",
        className
      )}
    >
      Childcare
    </div>
  );
}

export default Logo;
