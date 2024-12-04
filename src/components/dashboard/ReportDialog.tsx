import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Dialog from "../common/Dialog";
import apiClient from "../../libs/api";

// Props for the ReportDialog component
interface ReportDialogProps {
  open: boolean; // Flag to control dialog visibility
  onClose: () => void; // Callback to close the dialog
  content: string;
  title: string; // Title of the report
  lastDate: string; // Date of the last report update
  fileId: string; // ID of the file to download
}

// Props for the ToolbarIcon component
interface IToolbarIcon {
  name: string; // Name of the icon to be displayed
}

// Array of font sizes for the toolbar
const fontSizes = [8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 72, 80, 96];

// Component to render toolbar icons
const ToolbarIcon = ({ name }: IToolbarIcon) => {
  return (
    <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
      <img src={`/icons/toolbar/${name}.svg`} className="w-[18px] h-[18px]" />
    </span>
  );
};

// Main ReportDialog component
function ReportDialog({ open, onClose, content, title, lastDate, fileId }: ReportDialogProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle between edit and view mode

  const handleDownload = async () => {
    try {
      const response = await apiClient.get(`/api/file_system/download/${fileId}`, {
        responseType: "blob", // Ensure the response is treated as a file
      });

      // Create a temporary URL for the file blob
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement("a");
      fileLink.href = fileURL;

      // Set the download attribute to specify the filename
      fileLink.setAttribute("download", title || "downloaded-file");
      document.body.appendChild(fileLink);

      // Trigger the download
      fileLink.click();

      // Clean up
      fileLink.parentNode?.removeChild(fileLink);
      window.URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <Dialog
      open={open} // Control dialog visibility
      onClose={onClose} // Callback to close the dialog
      maxWidth="md" // Maximum width of the dialog
      className="max-h-[80%] bg-white flex flex-col"
    >
      <div className="grow pb-8 flex flex-col gap-y-2.5 w-full overflow-y-auto">
        <div className="py-2 px-4 flex items-center gap-x-6">
          {/* Back button or close button depending on editing mode */}
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (isEditing) setIsEditing(false); // Exit edit mode
              else onClose(); // Close the dialog
            }}
          >
            {isEditing ? <MdClose size={20} /> : <FaChevronLeft />}
          </span>
          <div className="space-y-1">
            <p className="font-semibold text-lg leading-5 text-primary-background">
              {title} {/* Display report title */}
            </p>
            <p className="text-sm leading-4 text-primary-text">{lastDate}</p> {/* Display last updated date */}
          </div>
          <div className="grow flex justify-end">
            {/* Download button, only visible when not in editing mode */}
            {!isEditing && (
              <div
                className="flex items-center gap-x-1 text-disabled-text cursor-pointer"
                onClick={handleDownload} // Add the download handler
              >
                <p className="text-sm leading-4">Ladda ner</p>
                <span className="w-6 h-6 flex items-center justify-center">
                  <HiOutlineArrowDownTray size={20} />
                </span>
              </div>
            )}
          </div>

          {/* Button to toggle between editing and view mode */}
          <button
            className="py-2 px-4 rounded-lg text-white text-sm leading-4 bg-primary-background outline-none"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Spara" : "Edit"}
          </button>
        </div>
        {/* Toolbar visible only in editing mode */}
        {isEditing && (
          <div className="bg-light-background py-3 px-8 flex gap-x-4 items-center">
            <select className="outline-none bg-light-background">
              {fontSizes.map((fontSize, index) => (
                <option key={index} value={fontSize}>
                  {fontSize}
                </option>
              ))}
            </select>
            <div className="flex gap-x-2">
              <ToolbarIcon name="text" />
              <ToolbarIcon name="color" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="bold" />
              <ToolbarIcon name="italic" />
              <ToolbarIcon name="underline" />
              <ToolbarIcon name="strikethrough" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="text-align-left" />
              <ToolbarIcon name="text-align-center" />
              <ToolbarIcon name="text-align-right" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="ordered-list" />
              <ToolbarIcon name="unordered-list" />
            </div>
            <div className="flex gap-x-2">
              <ToolbarIcon name="photo" />
              <ToolbarIcon name="link" />
            </div>
          </div>
        )}
        {/* Content area with editable text when in editing mode */}
        <div className="grow pt-2 px-8 pr-1 flex flex-col overflow-y-auto">
          {/* <XMLViewer xml={content} /> */}
          <pre>{content}</pre>
        </div>
      </div>
    </Dialog>
  );
}

export default ReportDialog; // Export the ReportDialog component for use in other parts of the application
