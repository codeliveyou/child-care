import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={twMerge(
        "font-extrabold text-[32px] leading-8 text-primary-background",
        className
      )}
    >
      Clearity
    </div>
  );
}

export default Logo;
