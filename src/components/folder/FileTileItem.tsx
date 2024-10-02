// Type definition for supported file formats
export type FileFormat = "doc" | "pdf" | "mp4" | "xsl";

// Interface defining the properties of a file tile item
export interface IFileTileItem {
  name: string; // Name of the file
  type: FileFormat; // Format of the file
}

// Props for the FileTileItem component, extending IFileTileItem and including a click handler
interface FileTileItemProps extends IFileTileItem {
  onClick: () => void; // Function to call when the item is clicked
}

// Functional component displaying a file tile item
const FileTileItem = ({ name, type, onClick }: FileTileItemProps) => {
  return (
    <div
      className="py-4 px-1 max-w-36 w-full h-fit flex flex-col items-center gap-4 hover:bg-light-background transition duration-300 rounded-lg cursor-pointer"
      onClick={onClick} // Handle click event
    >
      {/* Icon representing the file type */}
      <img
        src={`/images/report/${type}.svg`}
        alt="File icon" // Alternative text for the file icon
        className="w-16"
      />
      {/* File name */}
      <p className="font-semibold leading-5 text-center">{name}</p>
    </div>
  );
};

export default FileTileItem;
