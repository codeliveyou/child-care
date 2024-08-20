type LastActivityItemProps = {
  title: string;
  imageUri: string;
  activity: string;
};

const LastActivityItem = ({
  title,
  imageUri,
  activity,
}: LastActivityItemProps) => {
  return (
    <div className="flex gap-2">
      {/* Display logo */}
      <div className="shrink-0 rounded-xl overflow-hidden">
        <img src={imageUri} className="w-[72px] h-[72px]" />
      </div>

      <div className="flex flex-col">
        {/* Display title */}
        <div className="text-xl font-bold">{title}</div>
        {/* Display activity and creation date */}
        <div className="text-disabled-text text-xs">Sista aktiviteten</div>
        <div className="text-disabled-text text-xs">{activity}</div>
      </div>
    </div>
  );
};

export default LastActivityItem;
