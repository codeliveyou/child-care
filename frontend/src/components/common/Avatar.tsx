import { twMerge } from "tailwind-merge";

type AvatarProps = {
  uri: string;
  name?: string;
  label?: string;
  className?: string;
  isExpanded?: boolean;
};

const Avatar = ({
  uri,
  name = "",
  label = "",
  isExpanded = false,
  className = "",
}: AvatarProps) => {
  return (
    <div
      className={twMerge(
        "w-[71px] h-[71px] rounded-2xl bg-white flex items-center justify-center",
        isExpanded ? "px-2 w-full justify-between" : "",
        className
      )}
    >
      <img src={uri} className="w-[55px] h-[55px] rounded-lg" />
      {isExpanded && (
        <div>
          <p className="font-extrabold text-lg leading-5 text-primary-background">
            {name}
          </p>
          <p className="font-light text-sm leading-4 text-primary-background">
            {label}
          </p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
