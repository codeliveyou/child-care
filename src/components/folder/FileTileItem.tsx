// Type definition for supported file formats
export type FileFormat = "doc" | "pdf" | "mp4" | "xsl";

// Interface defining the properties of a file tile item
export interface IFileTileItem {
  file_id: string
  filename: string; // Name of the file
  file_type: FileFormat; // Format of the file
  date: Date;
}

// Props for the FileTileItem component, extending IFileTileItem and including a click handler
interface FileTileItemProps extends IFileTileItem {
  onClick: () => void; // Function to call when the item is clicked
}

// Functional component displaying a file tile item
const FileTileItem = ({ filename, file_type, onClick }: FileTileItemProps) => {
  return (
    <div
      className="py-4 px-1 max-w-36 w-full h-fit flex flex-col items-center gap-4 hover:bg-light-background transition duration-300 rounded-lg cursor-pointer overflow-x-clip"
      onClick={onClick} // Handle click event
    >
      {/* Icon representing the file type */}
      <img
        src={`/images/report/${file_type}.svg`}
        alt="File icon" // Alternative text for the file icon
        className="w-16"
      />
      {/* File name */}
      <p className="font-semibold leading-5">{filename}</p>
    </div>
  );
};

export default FileTileItem;
