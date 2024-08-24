type VideoListItemProps = {
  title: string;
  createdAt: string;
  logoUrl: string;
};

const VideoListItem = ({ title, createdAt, logoUrl }: VideoListItemProps) => {
  return (
    <div className="flex gap-2">
      {/* Display video thumbnail */}
      <div className="rounded-xl overflow-hidden">
        <img src={logoUrl} width={150} alt="Video Thumbnail" /> {/* Provide alt text for accessibility */}
      </div>

      <div className="flex flex-col p-5">
        {/* Display video title */}
        <div className="text-xl font-bold">{title}</div>
        <div className="flex-1"></div>
        {/* Display creation date */}
        <div className="text-[#B6C2E1] text-sm">
          Skapades rapport {createdAt}
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
