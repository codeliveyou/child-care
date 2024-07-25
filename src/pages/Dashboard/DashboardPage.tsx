import react from "react"
import Button from "../globalcomponents/Button";
import LastActivityItem from "./components/LastActivityItem";
import RoomListItem from "./components/RoomListItem";
import VideoListItem from "./components/VideoListItem";
import DocListItem from "./components/DocListItem";

const DashboardPage = () => {
    return <>
        <div className="w-full h-full grid grid-cols-12 grid-rows-3 gap-5 p-5 pt-0">
            <div className="col-span-3 rounded-xl bg-white p-4 flex flex-col">
                <div className="text-lg font-bold text-[#374151]">Sista aktiviteten</div>
                <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-scroll">
                    <LastActivityItem logoUrl="/logo/logo2.png" title="Noah rum" activity="Sista aktiviteten" createdAt="2024-03-25" />
                    {/* <LastActivityItem logoUrl="/logo/logo2.png" title="Noah rum" activity="Sista aktiviteten" createdAt="2024-03-25" /> */}
                    {/* <LastActivityItem logoUrl="/logo/logo2.png" title="Noah rum" activity="Sista aktiviteten" createdAt="2024-03-25" /> */}
                </div>
                <div>
                    <Button className="float-right py-2">Läs mer</Button>
                </div>
            </div>
            <div className="col-span-9 rounded-xl bg-white p-3">
                <img src="/Calendar.png" className="mx-auto "/>
            </div>

            <div className="col-span-4 row-span-2 rounded-xl bg-white p-5 flex flex-col">
                <div className="text-lg font-bold text-[#374151]">Rum lista</div>
                <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-scroll">
                    <RoomListItem logoUrl="/logo/logo2.png" title="Noah rum" pending={5} createdAt="2024-03-25" />
                    <RoomListItem logoUrl="/logo/logo2.png" title="Noah rum" createdAt="2024-03-25" />
                </div>
                <div>
                    <Button className="float-right py-2">Lägg till rum</Button>
                </div>

            </div>
            <div className="col-span-4 row-span-2 rounded-xl bg-white p-5 flex flex-col">
                <div className="text-lg font-bold text-[#374151]">Video rapport</div>
                <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-scroll">
                    <VideoListItem logoUrl="/video/video1.jpg" title="Noah rum" createdAt="2024-03-25" />
                    <VideoListItem logoUrl="/video/video1.jpg" title="Noah rum" createdAt="2024-03-25" />
                    <VideoListItem logoUrl="/video/video1.jpg" title="Noah rum" createdAt="2024-03-25" />
                </div>
                <div>
                    <Button className="float-right py-2">Läs mer</Button>
                </div>

            </div>

            <div className="col-span-4 row-span-2 rounded-xl bg-white p-5 flex flex-col">
                <div className="text-lg font-bold text-[#374151]">DOCs rapport </div>
                <div className="flex-1 my-5 flex flex-col gap-2 overflow-y-scroll">
                    <DocListItem filetype="doc" title="Noah rum" createdAt="2024-03-25" />
                    <DocListItem filetype="pdf" title="Noah rum" createdAt="2024-03-25" />
                </div>
                <div>
                    <Button className="float-right py-2">Läs mer</Button>
                </div>

            </div>

        </div>
    </>
}
export default DashboardPage;