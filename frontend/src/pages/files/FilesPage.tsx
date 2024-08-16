import { useState } from "react";
import { motion } from "framer-motion";

import Button from "../globalcomponents/Button";
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
  {
    name: "Elsas möte rapport",
    size: "10Mb",
    type: "doc",
  },
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
  {
    name: "Elsas laddad information",
    type: "mp4",
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
  const [reportDialogOpen, setReportDialogOpen] = useState<boolean>(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false);

  const handleFileItemClick =
    (fileItem: IFileListItem | IFileTileItem) => () => {
      if (fileItem.type === "mp4") setVideoDialogOpen(true);
      else setReportDialogOpen(true);
    };

  return (
    <>
      <motion.div
        className="grid grid-cols-3 gap-x-2.5 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left panel with folders */}
        <div className="bg-white rounded-xl p-4 flex flex-col gap-y-2.5 overflow-y-auto">
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
          <div>
            {/* Button to create a new folder */}
            <Button className="float-right flex items-center gap-2 py-1">
              <span className="text-3xl">+</span>Skapa ett mapp
            </Button>
          </div>
        </div>

        {/* Right panel with recent files */}
        <div className="p-4 pr-1.5 flex flex-col bg-white col-span-2 rounded-xl overflow-y-auto">
          <div className="grow pr-2 flex flex-col gap-y-2.5 overflow-x-auto">
            <p className="text-xl font-semibold">Senaste filer</p>
            <div className="flex gap-2 overflow-x-auto pb-1.5">
              {/* Displaying recent FileItem1 components */}
              {latestFiles.map((fileItem, index) => (
                <FileListItem
                  key={index}
                  {...fileItem}
                  type={fileItem.type as FileFormat}
                  onClick={handleFileItemClick(fileItem)}
                />
              ))}
            </div>
            <p className="text-xl font-semibold">Filer</p>
            <div className="grow py-2 pr-2 flex flex-wrap gap-2.5 overflow-y-auto">
              {/* Displaying FileItem2 components */}
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
      </motion.div>
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
