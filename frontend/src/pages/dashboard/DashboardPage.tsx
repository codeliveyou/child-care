import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/common/Button";
import LastActivityItem from "./components/LastActivityItem";
import Calendar from "../../components/dashboard/Calendar";
import VideoDialog from "../../components/dashboard/VideoDialog";
import ReportDialog from "../../components/dashboard/ReportDialog";

import MessageIcon from "/Message.svg";
import DocIcon from "/images/report/doc.svg";
import PdfIcon from "/images/report/pdf.svg";

// Sample data for activities, rooms, videos, and reports
const activityData = [
  {
    imageUri: "/images/activity/1.png",
    title: "Noah rum",
    activity: "Skapades rapport 2024-03-25",
  },
  {
    imageUri: "/images/activity/2.png",
    title: "Elsa rum",
    activity: "Skapades rapport 2024-03-25",
  },
  {
    imageUri: "/images/activity/2.png",
    title: "Elsa rum",
    activity: "Skapades rapport 2024-03-25",
  },
];

const roomData = [
  {
    name: "Elsa rum",
    imageUri: "/images/dashboard/room/1.png",
    badge: 5,
  },
  {
    name: "Noah rum",
    imageUri: "/images/dashboard/room/2.png",
    activity: "Skapades nästa möte",
    badge: 2,
  },
  {
    name: "Anna Lindberg",
    imageUri: "/images/dashboard/room/3.png",
    activity: "Video samtal",
    badge: 2,
  },
  {
    name: "Elsa",
    imageUri: "/images/dashboard/room/4.png",
    activity: "Skapades rapport 2024-02-23",
  },
];

const videoData = [
  {
    title: "Noah möte",
    videoUri: "/images/video/1.png",
    activity: "Igår 11:25",
  },
  {
    title: "Noah möte",
    videoUri: "/images/video/2.png",
    activity: "Igår 11:25",
  },
  {
    title: "Annas rum - inspelning",
    videoUri: "/images/video/3.png",
    activity: "Den 12-02-2024",
  },
  {
    title: "Stella rooms",
    videoUri: "/images/video/4.png",
    activity: "Den 24-02-2024",
  },
];

const reportData = [
  {
    type: "doc",
    title: "Elsas möte rapport",
    lastDate: "Igår 11:11",
  },
  {
    type: "pdf",
    title: "Elsas laddad information",
    lastDate: "Den 23-03-2024",
  },
  {
    type: "doc",
    title: "Noah möte rapport",
    lastDate: "Den 20-03-2024",
  },
  {
    type: "doc",
    title: "Stella rooms",
    lastDate: "Den 20-03-2024",
  },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false); // State to manage video dialog visibility
  const [reportDialogOpen, setReportDialogOpen] = useState<boolean>(false); // State to manage report dialog visibility

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col gap-y-4 text-primary-text"
      >
        {/* Container for the grid layout */}
        <div className="grid grid-cols-4 gap-4 max-h-[300px]">
          {/* Section for displaying last activities */}
          <div className="rounded-xl bg-white p-4 pr-1.5 flex flex-col h-full overflow-y-auto">
            <div className="text-lg font-bold text-[#374151]">
              Sista aktiviteten
            </div>
            <div className="flex-1 pr-2 my-5 flex flex-col overflow-y-auto">
              {/* Render each activity item */}
              {activityData.map((activity, index) => (
                <LastActivityItem
                  key={index}
                  title={activity.title}
                  imageUri={activity.imageUri}
                  activity={activity.activity}
                />
              ))}
            </div>
            {/* Button to view more details */}
            <div className="flex justify-end">
              <Button size="compress">Läs mer</Button>
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
                {/* Render each room item */}
                {roomData.map((room, index) => (
                  <div
                    key={index}
                    className="p-2 flex items-center gap-x-4 hover:bg-light-background transition duration-300 cursor-pointer rounded-lg"
                    onClick={() => {
                      navigate(`/room/${index}`); // Navigate to room detail page
                    }}
                  >
                    <div className="w-[72px] h-[72px] rounded-lg overflow-hidden relative">
                      <img
                        src={room.imageUri}
                        alt="Room image"
                        className="absolute left-1/2 -translate-x-1/2 w-auto h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-full grow">
                      <p className="font-semibold text-xl leading-6">
                        {room.name}
                      </p>
                      {room.activity && (
                        <div className="text-disabled-text text-sm leading-4">
                          <p>Sista aktiviteten</p>
                          <p>{room.activity}</p>
                        </div>
                      )}
                    </div>
                    {room.badge ? (
                      <span className="rounded-full bg-primary-background w-6 h-6 text-white flex items-center justify-center">
                        {room.badge}
                      </span>
                    ) : (
                      <span className="w-8 h-8 flex items-center justify-center rounded-[4px] bg-light-background">
                        <img src={MessageIcon} alt="Message icon" />
                      </span>
                    )}
                  </div>
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
                {videoData.map((video, index) => (
                  <div
                    key={index}
                    className="p-2 flex items-center gap-x-4 hover:bg-light-background transition duration-300 cursor-pointer rounded-lg"
                    onClick={() => {
                      setVideoDialogOpen(true); // Open video dialog
                    }}
                  >
                    <div className="relative rounded-lg overflow-hidden h-24 w-[200px] shrink-0">
                      <img
                        src={video.videoUri}
                        alt="Video thumbnail"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-xl leading-6 line-clamp-1">
                        {video.title}
                      </p>
                      {video.activity && (
                        <div className="text-disabled-text text-sm leading-4">
                          <p>Sista aktiviteten</p>
                          <p>{video.activity}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Button to view more details */}
              <div className="pt-7 self-end">
                <Button size="compress">Läs mer</Button>
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
                {reportData.map((reportItem, index) => (
                  <div
                    key={index}
                    className="flex items-center hover:bg-light-background transition duration-300 cursor-pointer rounded-lg"
                    onClick={() => {
                      setReportDialogOpen(true); // Open report dialog
                    }}
                  >
                    <div className="p-4">
                      <img
                        src={reportItem.type === "doc" ? DocIcon : PdfIcon}
                        alt="Report icon"
                        className="w-12"
                      />
                    </div>
                    <div className="py-2.5 px-4 flex flex-col justify-between">
                      <p className="font-semibold text-xl leading-6">
                        {reportItem.title}
                      </p>
                      {reportItem.lastDate && (
                        <div className="space-y-0.5 text-disabled-text text-sm leading-4">
                          <p>Sista aktiviteten</p>
                          <p>{reportItem.lastDate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Button to view more details */}
              <div className="self-end pt-7">
                <Button size="compress">Läs mer</Button>
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
      />
      <ReportDialog
        open={reportDialogOpen}
        onClose={() => {
          setReportDialogOpen(false); // Close report dialog
        }}
        title="Sofia Rapport"
        lastDate="2 Mars, 2024"
      />
    </>
  );
};

export default DashboardPage;
