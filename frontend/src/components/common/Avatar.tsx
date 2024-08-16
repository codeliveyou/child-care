import { twMerge } from "tailwind-merge";

type AvatarProps = {
  uri: string;
  className?: string;
};

const Avatar = ({ uri, className }: AvatarProps) => {
  return (
    <div className={twMerge("p-2 rounded-2xl bg-white", className)}>
      <img src={uri} className="w-[55px] h-[55px] rounded-lg m-auto" />
    </div>
  );
};

export default Avatar;
