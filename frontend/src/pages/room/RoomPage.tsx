import react from "react";
import { colors } from "../../constants/colors";
import Input from "../globalcomponents/Input";
import Button from "../globalcomponents/Button";
import SendSVG from "../../assets/send.svg?react";
import ChatItem from "./components/ChatItem";

import LeftSVG from "../../assets/left.svg?react";
import ShareSVG from "../../assets/call/share.svg?react";
import MuteSVG from "../../assets/call/mute.svg?react";
import InfoSVG from "../../assets/call/info.svg?react";
import CallSVG from "../../assets/call/call.svg?react";
import MicSVG from "../../assets/call/mic.svg?react";
import CameraSVG from "../../assets/call/camera.svg?react";
import StopSVG from "../../assets/call/stop.svg?react";

import { motion } from "framer-motion";
import ShareDialog from "./components/ShareDialog";

const RoomPage = () => {
    return (
        <motion.div
            className="p-5 pt-0 flex gap-5 w-full h-full text-[#374151]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* <ShareDialog isOpen={true} /> */}
            {/* Left panel containing call controls and chat */}
            <div className="flex-1 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    {/* Back button */}
                    <div className="flex gap-2 items-center">
                        <LeftSVG />
                        <span className="text-lg">Tillbaka</span>
                    </div>

                    {/* Room title and date */}
                    <div className="flex flex-col">
                        <div className="text-lg font-bold" style={{ color: colors.blue }}>Elsas rum</div>
                        <div className="text-sm">2 Mars, 2024</div>
                    </div>
                </div>

                {/* Video call and controls */}
                <div className="relative rounded-xl overflow-hidden">
                    <img src="/call/you.jpg" alt="You" />
                    <img src="/call/me.png" alt="Me" className="absolute top-5 right-5 w-40 border-[#E9E9F3] border rounded-lg shadow-2xl" />
                    <button className="bg-[#211DEF] p-3 absolute top-5 left-5 rounded-lg"><ShareSVG /></button>
                    <div className="absolute bottom-5 flex justify-center gap-5 items-center w-full">
                        <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center"><MuteSVG /></div>
                        <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center"><InfoSVG /></div>
                        <div className="rounded-xl bg-[#00CB51] w-14 h-14 flex items-center justify-center"><CallSVG /></div>
                        <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center"><MicSVG /></div>
                        <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center"><CameraSVG /></div>

                        <div className="absolute left-5">
                            <div className="rounded-full bg-[#FE0000] w-12 h-12 flex items-center justify-center"><StopSVG /></div>
                        </div>
                    </div>
                </div>

                {/* Chat section */}
                <div className="flex gap-5">
                    {/* Patient chat */}
                    <div className="flex-1 bg-white rounded-lg p-5 flex flex-col gap-2">
                        <div className="text-xl font-bold">Chatt med patient</div>
                        <hr className="border" />
                        <ul className="list-disc pl-5 text-[#37415180]">
                            <li>Tillgång till patient chatt</li>
                            <li>Förmåga att skriva AI-prompt</li>
                        </ul>
                        <div className="flex-1"></div>
                        <div className="flex gap-2 justify-end">
                            <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">L</button>
                            <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">A</button>
                            <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">S</button>
                            <button className="rounded-lg bg-white text-[#B6C2E1] w-8 h-8 text-2xl border-[#B6C2E1] border">+</button>
                        </div>
                    </div>

                    {/* Patient files section */}
                    <div className="flex-1 bg-white rounded-lg p-5 flex flex-col gap-2">
                        <div className="text-xl font-bold">Filer av patient</div>
                        <hr className="border" />
                        <ul className="list-disc pl-5 text-[#37415180]">
                            <li>Gäst kan se patientfiler</li>
                            <li>Gäst kan lägga till filer och se patientinformation</li>
                        </ul>
                        <div className="flex-1"></div>
                        <div className="flex gap-2 justify-end">
                            <button className="rounded-lg bg-[#374151] text-[#E9E9F3] w-8 h-8">L</button>
                            <button className="rounded-lg bg-white text-[#B6C2E1] w-8 h-8 text-2xl border-[#B6C2E1] border">+</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right panel for participant controls */}
            <div className="bg-white rounded-lg w-80 p-2 flex flex-col gap-5">
                <div className="bg-[#E9E9F3] flex rounded-xl p-1 font-bold text-lg">
                    <button className="flex-1 p-2">Patient</button>
                    <button className="flex-1 bg-white rounded-xl p-2 flex gap-2 items-center justify-center" style={{ color: colors.blue }}>
                        <span>Gäst</span>
                        <div className="rounded-lg text-white px-2 py-0 font-thin text-base" style={{ backgroundColor: colors.blue }}>L</div>
                    </button>
                </div>

                {/* Chat items */}
                <div className="flex-1 flex flex-col gap-5">
                    <ChatItem
                        avatarUrl="/logo/logo1.jpg"
                        name="Johan Prompt"
                        content="Hej, Lukas. Jag behöver din expertis när det gäller en ung patient som jag såg tidigare idag. Det är en 6-årig pojke med återkommande magbesvär och frekventa buksmärtor."
                        alignment="left"
                    />
                    <ChatItem
                        avatarUrl="/logo/logo2.png"
                        name="Dr. Lukas"
                        content="Hej, Lukas. Jag är här för att hjälpa till med det. Berätta mer om patienten och hans symptom."
                        alignment="right"
                    />
                </div>

                {/* Input for sending messages */}
                <div className="flex gap-2 m-2">
                    <Input placeholder="Skriva ett meddelande" className="text-base px-2 py-0 flex-1" />
                    <Button className="p-2"><SendSVG /></Button>
                </div>
            </div>
        </motion.div>
    );
};

export default RoomPage;