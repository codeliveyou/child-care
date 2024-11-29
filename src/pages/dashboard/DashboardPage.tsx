import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/common/Button";
//import LastActivityItem from "./components/LastActivityItem";
import Calendar from "../../components/dashboard/Calendar";
import VideoDialog from "../../components/dashboard/VideoDialog";
import ReportDialog from "../../components/dashboard/ReportDialog";

//import MessageIcon from "/Message.svg";
import RoomListItem, { IRoomListItem } from "../../components/room/RoomListItem";
import apiClient from "../../libs/api";
import { useAppSelector } from "../../store";
import { FileFormat, IFileTileItem } from "../../components/folder/FileTileItem";
import { IFileListItem } from "../../components/folder/FileListItem";
import FileReportItem from "../../components/folder/FileReportItem";




const DashboardPage = () => {
  const navigate = useNavigate();
  const userEmail = useAppSelector(state => state.auth.createUser.user_email)
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false); // State to manage video dialog visibility
  const [reportDialogOpen, setReportDialogOpen] = useState<boolean>(false); // State to manage report dialog visibility
  const [roomData, setRoomData] = useState<any>([]);
  const [docList, setDocList] = useState<any>([]);
  const [reportContent, setReportContent] = useState<string>("");
  const [videoList, setVideoList] = useState<any>([]);
  const [currentVideoLink, setCurrentVideoLink] = useState<string>("");

  const handleFileItemClick =
    (fileItem: IFileListItem | IFileTileItem) => async () => {
      // Open dialog based on the file type
      if (fileItem.file_type === "mp4") setVideoDialogOpen(true);
      else {
        setReportDialogOpen(true);
        apiClient
          .get(`/api/file_system/file-as-xml/${fileItem.file_id}`)
          .then((response: any) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, 'application/xml');
            const contentText = xmlDoc.getElementsByTagName('Content')[0]?.textContent || '';
            setReportContent(contentText);
            setReportDialogOpen(true);
          });
      }
    };

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await apiClient.post('/api/room/fetch_rooms_data', {
          userEmail
        });
        setRoomData(response);
      } catch (err: any) {
        console.log("Error in fetching room data", err);
      }
    };

    fetchRoomData();
  }, []);

  useEffect(() => {
    apiClient.get('api/file_system/list-documents').then((response: any) => {
      console.log('list-documents', response)
      setDocList(response);
    })
  }, [])

  useEffect(() => {
    apiClient.get('api/file_system/list-videos').then((response: any) => {
      console.log('list-videos', response)
      setVideoList(response);
    })
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col gap-y-4 text-primary-text"
      >
        {/* Container for the grid layout */}
        <div className="grid grid-cols-4 gap-4">
          {/* Section for displaying last activities */}
          <div className="rounded-xl bg-white p-4 pr-1.5 flex flex-col h-full overflow-y-auto">
            <div className="text-lg font-bold text-[#374151]">
              Sista aktiviteten
            </div>
            <div className="flex-1 pr-2 my-5 flex flex-col h-auto">
              {/* Render each activity item */}
              {/* {activityData.map((activity, index) => (
                <LastActivityItem
                  key={index}
                  title={activity.title}
                  imageUri={activity.imageUri}
                  activity={activity.activity}
                />
              ))} */}
              {roomData.length > 0 && roomData.slice(0, 2).map((room: IRoomListItem, index: Key | null | undefined) => (
                <RoomListItem key={index} room={room} room_name={0} />
              ))}
            </div>
            {/* Button to view more details */}
            <div className="flex justify-end">
              <Button size="compress" onClick={() => { navigate(`/rooms`); }}>Läs mer</Button>
            </div>
          </div>

          {/* Calendar section */}
          <Calendar className="col-span-3 h-full" />
        </div>

        <div className="grid grid-cols-3 gap-4 grow overflow-y-auto">
          {/* Room list section */}
          <div className="rounded-xl bg-white p-4 pr-2 h-full overflow-y-auto flex flex-col">
            <div className="flex flex-col gap-y-2.5 grow overflow-y-auto">
              <div className="text-lg font-bold text-primary-text">
                Rum lista
              </div>
              <div className="grow flex flex-col overflow-y-auto pt-4 pr-2">
                {roomData.map((room: IRoomListItem, index: Key | null | undefined) => (
                  <RoomListItem key={index} room={room} room_name={0} />
                ))}
              </div>
              {/* Button to add a new room */}
              <div className="pt-7 self-end">
                <Button
                  size="compress"
                  onClick={() => {
                    navigate("/room/create/onboarding"); // Navigate to room creation page
                  }}
                >
                  Lägg till rum
                </Button>
              </div>
            </div>
          </div>

          {/* Video reports section */}
          <div className="rounded-xl bg-white p-4 pr-2 h-full overflow-y-auto flex flex-col">
            <div className="flex flex-col gap-y-2.5 grow overflow-y-auto">
              <div className="text-lg font-bold text-primary-text">
                Video rapport
              </div>
              <div className="grow flex flex-col overflow-y-auto pt-4 pr-2">
                {/* Render each video item */}
                {videoList.map((video: any, index: number) => (
                  <div
                    key={index}
                    className="p-2 flex items-center gap-x-4 hover:bg-light-background transition duration-300 cursor-pointer rounded-lg"
                    onClick={() => {
                      setCurrentVideoLink(`http://167.88.170.239/api/file_system/file/${video.file_id}`);
                      setVideoDialogOpen(true); // Open video dialog
                    }}
                  >
                    <div className="relative rounded-lg overflow-hidden h-24 w-[200px] shrink-0">
                      <video
                        src={`http://167.88.170.239/api/file_system/file/${video.file_id}`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0"
                        preload="metadata"
                      >
                        <source src={`http://167.88.170.239/api/file_system/file/${video.file_id}#t=0.1`} type="video/mp4" />
                      </video>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-xl leading-6 line-clamp-1">
                        {video.filename}
                      </p>
                      {/* {video.activity && (
                        <div className="text-disabled-text text-sm leading-4">
                          <p>Sista aktiviteten</p>
                          <p>{video.activity}</p>
                        </div>
                      )} */}
                    </div>
                  </div>
                ))}
              </div>
              {/* Button to view more details */}
              <div className="pt-7 self-end">
                <Button size="compress" onClick={() => { navigate(`/files`); }}>Läs mer</Button>
              </div>
            </div>
          </div>

          {/* DOCs reports section */}
          <div className="rounded-xl bg-white py-4 px-7 pr-2 h-full overflow-y-auto flex flex-col">
            <div className="grow flex flex-col gap-y-2.5 overflow-y-auto">
              <div className="text-lg font-bold text-primary-text">
                DOCs rapport
              </div>
              <div className="grow py-4 flex flex-col gap-4 pr-4 overflow-y-auto">
                {/* Render each report item */}
                {docList.map((reportItem: any, index: number) => (
                  <FileReportItem
                    key={index}
                    {...reportItem}
                    file_type={reportItem.file_type as FileFormat}
                    date={reportItem.upload_date as Date}
                    onClick={handleFileItemClick(reportItem)}
                  />
                ))}
              </div>
              {/* Button to view more details */}
              <div className="self-end pt-7">
                <Button size="compress" onClick={() => { navigate(`/files`); }}>Läs mer</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dialog components for video and report details */}
      <VideoDialog
        open={videoDialogOpen}
        onClose={() => {
          setVideoDialogOpen(false); // Close video dialog
        }}        
        source = {currentVideoLink}
      />
      <ReportDialog
        open={reportDialogOpen}
        onClose={() => {
          setReportDialogOpen(false); // Close report dialog
        }}
        title="Sofia Rapport"
        lastDate="2 Mars, 2024"
        content={reportContent}
      />
    </>
  );
};

export default DashboardPage;
