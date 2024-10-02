// Type definition for supported file formats
export type FileFormat = "doc" | "pdf" | "mp4" | "xsl";

// Interface defining the properties of a file list item
export interface IFileListItem {
  name: string; // Name of the file
  type: FileFormat; // Format of the file
  size: string; // Size of the file (e.g., "2 MB")
}

// Props for the FileListItem component, extending IFileListItem and including a click handler
interface FileListItemProps extends IFileListItem {
  onClick: () => void; // Function to call when the item is clicked
}

// Functional component displaying a file list item
const FileListItem = ({ name, size, type, onClick }: FileListItemProps) => {
  return (
    <div
      className="shrink-0 p-4 flex items-center gap-2 rounded-lg border border-light-background hover:bg-light-background transition duration-300 cursor-pointer select-none"
      onClick={onClick} // Handle click event
    >
      {/* Icon representing the file type */}
      <img
        src={`/images/report/${type}.svg`}
        alt="File icon" // Alternative text for the file icon
        className="w-10 image-selector"
      />
      <div className="flex flex-col gap-y-1">
        {/* File name */}
        <div className="font-semibold leading-5">{name}</div>
        {/* File size */}
        <div className="text-sm leading-4">{size}</div>
      </div>
    </div>
  );
};

export default FileListItem;
