import { twMerge } from "tailwind-merge";

type TradeMarkProps = {
  className?: string; // Optional: Additional CSS classes for customization
};

const TradeMark = ({ className }: TradeMarkProps) => {
  return (
    <div className={twMerge("font-extrabold text-2xl text-white", className)}>
      ChildCare  {/* Display the trademark text */}
    </div>
  );
};

export default TradeMark;
