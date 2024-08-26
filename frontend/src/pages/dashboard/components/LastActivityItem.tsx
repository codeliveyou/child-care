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
    <div className="p-2 flex gap-2 hover:bg-light-background transition duration-300 cursor-pointer rounded-lg">
      {/* Display the image/logo associated with the activity */}
      <div className="shrink-0 rounded-xl overflow-hidden">
        <img src={imageUri} className="w-[72px] h-[72px]" alt="Activity Logo" />{" "}
        {/* Provide alt text for accessibility */}
      </div>

      <div className="flex flex-col">
        {/* Display the title of the activity */}
        <div className="text-xl font-bold">{title}</div>
        {/* Display static label for activity */}
        <div className="text-disabled-text text-xs">Sista aktiviteten</div>
        {/* Display the details of the last activity */}
        <div className="text-disabled-text text-xs">{activity}</div>
      </div>
    </div>
  );
};

export default LastActivityItem;
