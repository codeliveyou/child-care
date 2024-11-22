// Type definition for supported file formats
export type FileFormat = "doc" | "pdf" | "mp4" | "xsl";

// Interface defining the properties of a file tile item
export interface IFileReportItem {
  file_id: string;
  filename: string; // Name of the file
  file_type: FileFormat; // Format of the file
  date: string;
}

// Props for the FileReportItem component, extending IFileReportItem and including a click handler
interface FileReportItemProps extends IFileReportItem {
  onClick: () => void; // Function to call when the item is clicked
}

// Functional component displaying a file tile item
const FileReportItem = ({
  filename,
  file_type,
  date,
  onClick,
}: FileReportItemProps) => {
  return (
    <div
      className="flex items-center hover:bg-light-background transition duration-300 cursor-pointer rounded-lg"
      onClick={onClick} // Handle click event
    >
      {/* Icon representing the file type */}
      <div className="relative rounded-lg overflow-hidden h-24 w-[100px] shrink-0">
        <img
          src={`/images/report/${file_type}.svg`}
          alt="File icon" // Alternative text for the file icon
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 z-0"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-semibold text-xl leading-6 line-clamp-1">
          {filename}
        </p>
        {date && (
          <div className="space-y-0.5 text-disabled-text text-sm leading-4">
            <p>Sista aktiviteten</p>
            <p>{date}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileReportItem;
