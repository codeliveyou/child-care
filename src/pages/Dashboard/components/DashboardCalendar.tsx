import react from "react"
import DownSVG from "../../../assets/down.svg?react"
import LeftSVG from "../../../assets/left.svg?react"
import { colors } from "../../../constants/colors";
import Button from "../../globalcomponents/Button";
const DashboardCalendar = () => {
    return <div className="flex flex-col h-full">
        <div className="flex items-center gap-3">
            <div className="font-bold text-xl">Kalender</div>
            <div className="flex-1" />
            <DownSVG />
            <div>Mars 2024</div>
        </div>
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
                <LeftSVG />
                <div className="text-xl font-semibold">Vecka 2</div>
            </div>
            <div>
                <LeftSVG className="transform rotate-180" />
            </div>
        </div>
        <div className="flex gap-5 flex-1 min-h-0">
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Mon</div>
                <div className="text-xl font-bold">12</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Tis</div>
                <div className="text-xl font-bold">13</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Ons</div>
                <div className="text-xl font-bold">14</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Tor</div>
                <div className="text-xl font-bold">15</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Fre</div>
                <div className="text-xl font-bold">16</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
            <div className="flex flex-col gap-1 flex-[2]">
                <div className="text-xs">14:00 -16:00</div>
                <div className="font-bold">Noah möte </div>
                <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div><Button className="py-1 float-right">Se allt</Button></div>
            </div>
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Lör</div>
                <div className="text-xl font-bold">17</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
            <div className="flex flex-col gap-2 items-center flex-1">
                <div>Sön</div>
                <div className="text-xl font-bold">18</div>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>10:00</button>
                <button className="rounded-lg w-full text-white" style={{backgroundColor: colors.blue}}>14:00</button>
                <div className="rounded-lg w-full text-center">14:00</div>
            </div>
        </div>
    </div>
};

export default DashboardCalendar;