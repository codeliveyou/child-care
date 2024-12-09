import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Dialog from "../common/Dialog";
import apiClient from "../../libs/api";
import toast from "react-hot-toast";

interface ReportDialogProps {
  open: boolean;
  onClose: () => void;
  content: string;
  title: string;
  lastDate: string;
  fileId: string;
  isPdf: boolean; // New prop to indicate if the file is a PDF
}

interface IToolbarIcon {
  name: string;
}

const fontSizes = [8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 72, 80, 96];

const ToolbarIcon = ({ name }: IToolbarIcon) => {
  return (
    <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
      <img src={`/icons/toolbar/${name}.svg`} className="w-[18px] h-[18px]" />
    </span>
  );
};

function ReportDialog({ open, onClose, content, title, lastDate, fileId, isPdf }: ReportDialogProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(content);
  const [pdfUrl, setPdfUrl] = useState<string>("");

  useEffect(() => {
    if (open) {
      setEditedContent(content); // Update editedContent when the dialog opens or content changes
    }
  }, [open, content]);

  // Update PDF URL when fileId or isPdf changes
  useEffect(() => {
    if (isPdf && fileId) {
      setPdfUrl(`${apiClient.defaults.baseURL}/api/file_system/file-as-pdf/${fileId}`);
    } else {
      setPdfUrl(""); // Clear the URL if not a PDF
    }
  }, [isPdf, fileId]);

  const handleSave = async () => {
    try {
      // Format the content as XML
      const xmlContent = `
        <Document>
          <Content>${editedContent}</Content>
        </Document>
      `;

      const response: any = await apiClient.post(
        `/api/file_system/save-document/${fileId}`,
        xmlContent,
        {
          headers: {
            'Content-Type': 'application/xml',
          },
        }
      );

      const { message } = response; // No TypeScript complaints now
      toast.success(message);
      setEditedContent(editedContent);
      setIsEditing(false);

    } catch (error) {
      toast.error("Failed to save document.");
    }
  };

  const handleDownload = () => {
    try {
      const downloadUrl = `${apiClient.defaults.baseURL}/api/file_system/download/${fileId}`;
      window.location.href = downloadUrl;
    } catch (error) {
      console.error("Error triggering the download:", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      className="max-h-[80%] bg-white flex flex-col"
    >
      <div className="grow pb-8 flex flex-col gap-y-2.5 w-full overflow-y-auto">
        <div className="py-2 px-4 flex items-center gap-x-6">
          <span
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (isEditing) setIsEditing(false);
              else onClose();
            }}
          >
            {isEditing ? <MdClose size={20} /> : <FaChevronLeft />}
          </span>
          <div className="space-y-1">
            <p className="font-semibold text-lg leading-5 text-primary-background">
              {title}
            </p>
            <p className="text-sm leading-4 text-primary-text">{lastDate}</p>
          </div>
          <div className="grow flex justify-end">
            {!isEditing && (
              <div
                className="flex items-center gap-x-1 text-disabled-text cursor-pointer"
                onClick={handleDownload}
              >
                <p className="text-sm leading-4">Ladda ner</p>
                <span className="w-6 h-6 flex items-center justify-center">
                  <HiOutlineArrowDownTray size={20} />
                </span>
              </div>
            )}
          </div>
          <button
            className="py-2 px-4 rounded-lg text-white text-sm leading-4 bg-primary-background outline-none"
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? "Spara" : "Edit"}
          </button>
        </div>

        {/* Render PDF Viewer if isPdf is true */}
        {isPdf ? (
          <div className="grow px-8">
            {pdfUrl ? (
              <iframe
                src={pdfUrl}
                className="w-full h-96"
                title="PDF Viewer"
                frameBorder="0"
              ></iframe>
            ) : (
              <p className="text-center text-gray-500">Loading PDF...</p>
            )}
          </div>
        ) : (
          <>
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
            {isEditing ? (
              <textarea
                className="grow w-full border border-gray-300 rounded-md p-2 resize-none h-96"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              ></textarea>
            ) : (
              <pre
                className="h-96 overflow-y-auto whitespace-pre-wrap break-words p-4"
              >{editedContent}</pre>
            )}
          </>
        )}
      </div>
    </Dialog>
  );
}

export default ReportDialog;
