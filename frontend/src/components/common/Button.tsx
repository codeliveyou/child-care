import { twMerge } from "tailwind-merge";

type ButtonSize = "large" | "compress" | "small";
type ButtonVariant = "contained" | "outlined" | "text";
type ButtonColor = "primary" | "secondary";

type ButtonProps = {
  // Optional size of the button
  size?: ButtonSize;
  // Optional variant of the button (contained, outlined, or text)
  variant?: ButtonVariant;
  // Optional color of the button
  color?: ButtonColor;
  // Optional additional CSS classes
  className?: string;
  // Optional click handler function
  onClick?: () => void;
  // Required children to be rendered inside the button
  children: React.ReactNode;

  // Allow additional properties
  [key: string]: any;
};

/**
 * Button component is a versatile UI element for user interactions.
 *
 * @param {ButtonProps} props - Component properties including button size, variant, color, and functionality.
 * @param {ButtonSize} [props.size="large"] - The size of the button, affecting its height and padding.
 * @param {ButtonVariant} [props.variant="contained"] - The button's visual style (contained, outlined, or text).
 * @param {ButtonColor} [props.color="primary"] - The color scheme of the button.
 * @param {string} [props.className=""] - Optional additional CSS classes to apply to the button.
 * @param {() => void} [props.onClick=() => {}] - Optional function to handle click events.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {any} [props.key] - Additional properties for the button element.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({
  size = "large",
  variant = "contained",
  color = "primary",
  className = "",
  onClick = () => {},
  children,
  ...props
}: ButtonProps) => {
  // Determine button size classes based on the size prop
  const sizeClass =
    size === "large"
      ? "h-[42px] py-[11px] px-5 text-base leading-5"
      : size === "small"
      ? "h-[34px] py-2 px-4 text-sm leading-[17px]"
      : "h-[37px] py-2 px-4 text-base leading-5";

  // Determine button variant and color classes based on the variant and color props
  const variantClass =
    variant === "contained"
      ? twMerge(
          color === "primary"
            ? "border border-primary-border/25 bg-primary-background text-light-background"
            : "border-none bg-light-background text-primary-background"
        )
      : variant === "outlined"
      ? twMerge(
          "bg-none border",
          color === "primary"
            ? "border-primary-border/25 text-primary-text"
            : "border-white text-light-background"
        )
      : "bg-none border-none"
      ? "text-primary-text"
      : "text-light-background";

  return (
    <button
      // Merge default Tailwind styles with size, variant, color, and additional classes
      className={twMerge(
        "flex items-center justify-center hover:opacity-90 active:opacity-80 rounded-lg",
        sizeClass,
        variantClass,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Render the button's content */}
      {children}
    </button>
  );
};

export default Button;
