import { MutableRefObject, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDraggable } from "react-use-draggable-scroll";
import { motion } from "framer-motion";

import Button from "../../components/common/Button";
import {
  FileFormat,
  IFileListItem,
} from "../../components/folder/FileListItem";
import FileTileItem, {
  IFileTileItem,
} from "../../components/folder/FileTileItem";
import FolderList from "../../components/folder/FolderList";
import ReportDialog from "../../components/dashboard/ReportDialog";
import VideoDialog from "../../components/dashboard/VideoDialog";
import FileListItem from "../../components/folder/FileListItem";

const latestFiles: IFileListItem[] = [
  // Example list of latest files with their metadata
  {
    name: "Elsas möte rapport",
    size: "10Mb",
    type: "doc",
  },
  // More file items...
  {
    name: "Elsas laddad information",
    size: "15.5Mb",
    type: "pdf",
  },
  {
    name: "Elsas Statistik",
    size: "123.3Mb",
    type: "xsl",
  },
  {
    name: "Elsas laddad information",
    size: "15.5Mb",
    type: "pdf",
  },
  {
    name: "Elsas laddad information",
    size: "15.5Mb",
    type: "pdf",
  },
];

const fileData: IFileTileItem[] = [
  // Example list of files to be displayed as tiles
  {
    name: "Elsas laddad information",
    type: "mp4",
  },
  // More file items...
  {
    name: "Elsas möte rapport",
    type: "doc",
  },
  {
    name: "Elsas laddad information",
    type: "pdf",
  },
  {
    name: "Elsas möte rapport",
    type: "doc",
  },
  {
    name: "Elsas laddad information",
    type: "pdf",
  },
  {
    name: "Elsas Statistik",
    type: "xsl",
  },
  {
    name: "Elsas laddad information",
    type: "pdf",
  },
  {
    name: "Elsas 2023",
    type: "xsl",
  },
  {
    name: "Elsas laddad information",
    type: "mp4",
  },
  {
    name: "Elsas Statistik",
    type: "xsl",
  },
  {
    name: "Elsas laddad information",
    type: "pdf",
  },
  {
    name: "Elsas laddad information",
    type: "pdf",
  },
  {
    name: "Elsas laddad information",
    type: "mp4",
  },
];

const FilesPage = () => {
  const filesRef = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(filesRef as MutableRefObject<HTMLElement>);

  const [reportDialogOpen, setReportDialogOpen] = useState<boolean>(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false);

  const handleFileItemClick =
    (fileItem: IFileListItem | IFileTileItem) => () => {
      // Open dialog based on the file type
      if (fileItem.type === "mp4") setVideoDialogOpen(true);
      else setReportDialogOpen(true);
    };

  return (
    <>
      <motion.div
        className="flex gap-x-2.5 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left panel with folder list */}
        <div className="max-w-[400px] w-full bg-white rounded-xl p-4 flex flex-col gap-y-2.5 overflow-y-auto">
          <p className="text-xl font-semibold">Mapp</p>
          <div className="flex-1 flex flex-col">
            {/* Rendering FolderSelect component with folder names */}
            <FolderList
              folders={[
                "Elsas rapport",
                "Noah",
                "Stefan",
                "Johan",
                "Sparad documentation",
              ]}
            />
          </div>
          <div className="flex justify-end">
            {/* Button to create a new folder */}
            <Button className="py-2 px-4 flex items-center gap-2 text-base leading-5">
              <span className="w-6 h-6 flex items-center justify-center">
                <FaPlus size={20} />
              </span>
              Skapa ett mapp
            </Button>
          </div>
        </div>

        {/* Right panel with recent files and all files */}
        <div className="p-4 pr-1.5 flex flex-col bg-white rounded-xl overflow-y-auto">
          <div className="grow pr-2 flex flex-col gap-y-2.5 overflow-x-auto">
            {/* Section for displaying recent files */}
            <div className="flex flex-col gap-y-2.5">
              <p className="text-xl font-semibold">Senaste filer</p>
              <div
                ref={filesRef}
                {...events}
                className="pb-1.5 flex gap-2 overflow-x-auto scrollbar scrollbar-none"
              >
                {/* Displaying recent FileListItem components */}
                {latestFiles.map((fileItem, index) => (
                  <FileListItem
                    key={index}
                    {...fileItem}
                    type={fileItem.type as FileFormat}
                    onClick={handleFileItemClick(fileItem)}
                  />
                ))}
              </div>
            </div>
            {/* Section for displaying all files */}
            <div className="grow flex flex-col gap-y-2.5 overflow-y-auto">
              <p className="text-xl font-semibold">Filer</p>
              <div className="py-2 pr-2 flex flex-wrap gap-2.5 overflow-y-auto">
                {/* Displaying FileTileItem components */}
                {fileData.map((fileItem, index) => (
                  <FileTileItem
                    key={index}
                    {...fileItem}
                    onClick={handleFileItemClick(fileItem)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Dialogs for reports and videos */}
      <ReportDialog
        open={reportDialogOpen}
        onClose={() => {
          setReportDialogOpen(false);
        }}
        title="Sofia Rapport"
        lastDate="2 Mars, 2024"
      />
      <VideoDialog
        open={videoDialogOpen}
        onClose={() => {
          setVideoDialogOpen(false);
        }}
      />
    </>
  );
};

export default FilesPage;
