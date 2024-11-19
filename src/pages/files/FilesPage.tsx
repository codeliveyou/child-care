import { ChangeEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDraggable } from "react-use-draggable-scroll";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

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
import FileDialog from "../../components/dashboard/FileDialog";
import apiClient from "../../libs/api";

const latestFiles: IFileListItem[] = [
  // Example list of latest files with their metadata
  {
    id: '1',
    name: "Elsas möte rapport",
    size: "10Mb",
    type: "doc",
  },
  // More file items...
  {
    id: '2',
    name: "Elsas laddad information",
    size: "15.5Mb",
    type: "pdf",
  },
  {
    id: '3',
    name: "Elsas Statistik",
    size: "123.3Mb",
    type: "xsl",
  },
  {
    id: '4',
    name: "Elsas laddad information",
    size: "15.5Mb",
    type: "pdf",
  },
  {
    id: '5',
    name: "Elsas laddad information",
    size: "15.5Mb",
    type: "pdf",
  },
];

const FilesPage = () => {
  const filesRef = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(filesRef as MutableRefObject<HTMLElement>);

  const [reportDialogOpen, setReportDialogOpen] = useState<boolean>(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false);
  const [fileDialogOpen, setFileDialogOpen] = useState<boolean>(false);
  const [folderNames, setFolderNames] = useState<string[]>([]);
  const [currentFolder, setCurrentFolder] = useState<string>('');
  const [filesOfFolder, setFilesOfFolder] = useState<IFileTileItem[]>([]);
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFileItemClick =
    (fileItem: IFileListItem | IFileTileItem) => () => {
      // Open dialog based on the file type
      if (fileItem.type === "mp4") setVideoDialogOpen(true);
      else if (fileItem.type === 'doc') {
        apiClient.get(`/api/file_system/file/${fileItem.id}`).then((response: any) => {
          console.log(response)
          setReportDialogOpen(true);
        });
      }
    };

  const handleNameSubmit = (name: string) => {
    apiClient.post('/api/file_system/create-folder', { folder_name: name }).then(() => {
      setFolderNames([...new Set([...folderNames, name]).values()]);
    });
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!currentFolder) return;
    const files = e.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('folder_name', currentFolder);
      formData.append('file', files[0]);
      console.log(files[0]);
      apiClient.post('/api/file_system/upload', formData).then(() => {
        toast.success('File uploaded.')
        setFilesOfFolder([...filesOfFolder, {
          id: `${filesOfFolder.length + 1}`,
          name: files[0].name,
          type: files[0].name.split('.').slice().reverse()[0] as FileFormat,
          date: new Date()
        }]);
      })
    }
  }

  useEffect(() => {
    apiClient.get(`/api/file_system/list-files?folder_name=${currentFolder}`).then((response: any) => {
      setFilesOfFolder(response.map((item: any) => ({
        id: item.file_id,
        name: item.filename,
        type: item.file_type === 'document' ? 'doc' : item.file_type === 'video' ? 'mp4' : '',
        date: new Date(item.upload_date)
      })));
    })
  }, [currentFolder]);

  useEffect(() => {
    apiClient.get('api/file_system/list-folders').then((response: any) => {
      setFolderNames(response.map((item: any) => item.folder_name))
    })
  }, []);

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
              folders={folderNames}
              activeFolder={currentFolder}
              onFolderChange={setCurrentFolder}
            />
          </div>
          <div className="flex justify-end">
            {/* Button to create a new folder */}
            <Button className="py-2 px-4 flex items-center gap-2 text-base leading-5" onClick={() => {
              setFileDialogOpen(true)
            }}>
              <span className="w-6 h-6 flex items-center justify-center">
                <FaPlus size={20} />
              </span>
              Skapa ett mapp
            </Button>
          </div>
        </div>

        {/* Right panel with recent files and all files */}
        <div className="p-4 pr-1.5 flex flex-col bg-white rounded-xl overflow-y-auto flex-1">
          <div className="grow pr-2 flex flex-col gap-y-2.5 overflow-x-auto">
            {/* Section for displaying recent files */}
            <div className="flex flex-col gap-y-2.5">
              <p className="text-xl font-semibold">Senaste filer</p>
              <div
                ref={filesRef}
                {...events}
                className="pb-1.5 flex gap-2 overflow-x-auto scrollbar scrollbar-none grow"
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
            <div className="grow flex flex-col gap-y-2.5 overflow-y-auto relative">
              <p className="text-xl font-semibold">Filer</p>
              <div className="py-2 pr-2 flex flex-wrap gap-2.5 overflow-y-auto">
                {/* Displaying FileTileItem components */}
                {filesOfFolder.map((fileItem, index) => (
                  <FileTileItem
                    key={index}
                    {...fileItem}
                    onClick={handleFileItemClick(fileItem)}
                  />
                ))}
              </div>
              <Button className="absolute p-2 flex items-center gap-2 text-base leading-5 right-0 bottom-0" onClick={() => {
                fileRef.current && fileRef.current.click()
              }}>
                <span className="w-6 h-6 flex items-center justify-center">
                  <FaPlus size={20} />
                </span>
              </Button>
              <input ref={fileRef} accept=".txt, .docx, .xsl, .pdf" type="file" onChange={handleFileChange} hidden />
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
      <FileDialog open={fileDialogOpen} onClose={() => {
        setFileDialogOpen(false)
      }} onSubmit={handleNameSubmit} />
    </>
  );
};

export default FilesPage;
