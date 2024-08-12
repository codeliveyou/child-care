import React, { useState } from "react";
import Button from "../globalcomponents/Button";
import LastActivityItem from "./components/LastActivityItem";
import RoomListItem from "./components/RoomListItem";
import VideoListItem from "./components/VideoListItem";
import DocListItem from "./components/DocListItem";
import DashboardCalendar from "./components/DashboardCalendar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Dialog from "../globalcomponents/Dialog";
import VideoDialog from "../globalcomponents/VideoDialog";
import DocumentDialog from "../globalcomponents/DocumentDialog";

const DashboardPage = () => {
    const navigate = useNavigate();
    const [videoDialog, setVideoDialog] = useState<boolean>(false);

    return (
        <>
            <VideoDialog isOpen={videoDialog} onClose={() => setVideoDialog(false)} />
            {/* <DocumentDialog isOpen={true} onClose={() => {}} /> */}
            {/* Framer Motion container with grid layout */}
            <motion.div
                className="w-full h-full grid grid-cols-12 grid-rows-3 gap-5 p-5 pt-0 text-[#374151]"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                {/* Section for displaying last activities */}
                <div className="col-span-3 rounded-xl bg-white p-4 flex flex-col">
                    <div className="text-lg font-bold text-[#374151]">Sista aktiviteten</div>
                    <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-auto">
                        {/* Last activity items */}
                        <LastActivityItem logoUrl="/logo/logo2.png" title="Noah rum" activity="Sista aktiviteten" createdAt="2024-03-25" />
                    </div>
                    {/* Button for more details */}
                    <div>
                        <Button className="float-right py-2">Läs mer</Button>
                    </div>
                </div>

                {/* Calendar section */}
                <div className="col-span-9 rounded-xl bg-white p-3">
                    <DashboardCalendar />
                </div>

                {/* Room list section */}
                <div className="col-span-4 row-span-2 rounded-xl bg-white p-5 flex flex-col">
                    <div className="text-lg font-bold text-[#374151]">Rum lista</div>
                    <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-auto">
                        {/* Room list items */}
                        <button className="text-left" onClick={() => {navigate("/room/id")}}><RoomListItem logoUrl="/logo/logo2.png" title="Noah rum" pending={5} createdAt="2024-03-25" /></button>
                        <button className="text-left" onClick={() => {navigate("/room/id")}}><RoomListItem logoUrl="/logo/logo2.png" title="Noah rum" createdAt="2024-03-25" /></button>
                    </div>
                    {/* Button for adding rooms */}
                    <div>
                        <Button className="float-right py-2">Lägg till rum</Button>
                    </div>
                </div>

                {/* Video reports section */}
                <div className="col-span-4 row-span-2 rounded-xl bg-white p-5 flex flex-col">
                    <div className="text-lg font-bold text-[#374151]">Video rapport</div>
                    <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-auto">
                        {/* Video report items */}
                        <button className="text-left" onClick={() => {setVideoDialog(true)}}><VideoListItem logoUrl="/video/video1.jpg" title="Noah rum" createdAt="2024-03-25" /></button>
                        <button className="text-left" onClick={() => {setVideoDialog(true)}}><VideoListItem logoUrl="/video/video1.jpg" title="Noah rum" createdAt="2024-03-25" /></button>
                        <button className="text-left" onClick={() => {setVideoDialog(true)}}><VideoListItem logoUrl="/video/video1.jpg" title="Noah rum" createdAt="2024-03-25" /></button>
                    </div>
                    {/* Button for more details */}
                    <div>
                        <Button className="float-right py-2">Läs mer</Button>
                    </div>
                </div>

                {/* DOCs reports section */}
                <div className="col-span-4 row-span-2 rounded-xl bg-white p-5 flex flex-col">
                    <div className="text-lg font-bold text-[#374151]">DOCs rapport </div>
                    <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-auto">
                        {/* DOCs report items */}
                        <DocListItem filetype="doc" title="Noah rum" createdAt="2024-03-25" />
                        <DocListItem filetype="pdf" title="Noah rum" createdAt="2024-03-25" />
                    </div>
                    {/* Button for more details */}
                    <div>
                        <Button className="float-right py-2">Läs mer</Button>
                    </div>
                </div>

            </motion.div>
        </>
    );
}

export default DashboardPage;