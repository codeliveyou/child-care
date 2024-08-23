import { twMerge } from "tailwind-merge";

type ButtonSize = "large" | "compress" | "small";
type ButtonVariant = "contained" | "outlined" | "text";
type ButtonColor = "primary" | "secondary";

type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;

  [key: string]: any;
};

const Button = ({
  size = "large",
  variant = "contained",
  color = "primary",
  className = "",
  onClick = () => {},
  children,
  ...props
}: ButtonProps) => {
  const sizeClass =
    size === "large"
      ? "h-[42px] py-[11px] px-5 text-base leading-5"
      : size === "small"
      ? "h-[34px] py-2 px-4 text-sm leading-[17px]"
      : "h-[37px] py-2 px-4 text-base leading-5";
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
      className={twMerge(
        "flex items-center justify-center hover:opacity-90 active:opacity-80 rounded-lg",
        sizeClass,
        variantClass,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
