import React, { useRef } from "react";
import DownSVG from "../../../assets/down.svg?react";
import LeftSVG from "../../../assets/left.svg?react";
import { colors } from "../../../constants/colors";
import Button from "../../globalcomponents/Button";

const DashboardCalendar = () => {
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);
    const ref6 = useRef<HTMLDivElement>(null);
    const ref7 = useRef<HTMLDivElement>(null);

    const selectRef = (num: number) => {
        if(!ref1.current || !ref2.current || !ref3.current || !ref4.current || !ref5.current || !ref6.current || !ref7.current)
            return ;
        ref1.current.style.display =
        ref2.current.style.display =
        ref3.current.style.display =
        ref4.current.style.display =
        ref5.current.style.display =
        ref6.current.style.display =
        ref7.current.style.display =
             'none';
        switch(num) {
            case 1:
                ref1.current.style.display = 'block';
                break;
            case 2:
                ref2.current.style.display = 'block';
                break;
            case 3:
                ref3.current.style.display = 'block';
                break;
            case 4:
                ref4.current.style.display = 'block';
                break;
            case 5:
                ref5.current.style.display = 'block';
                break;
            case 6:
                ref6.current.style.display = 'block';
                break;
            case 7:
                ref7.current.style.display = 'block';
                break;
        }

    }

    const uhaha = () => {
        const a = document.querySelectorAll(".rounded-lg.w-full.text-white.text-\\[12px\\].py-2");
        a.forEach(b => {
            b.style.backgroundColor = "#211DEF";
        })

    }
    

    

    return (
        <div className="flex flex-col h-full">
            {/* Calendar header with month and year */}
            <div className="flex items-center gap-3">
                <div className="font-bold text-xl">Kalender</div>
                <div className="flex-1" />
                <DownSVG />
                <div>Mars 2024</div>
            </div>
            {/* Navigation for week view */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                    <LeftSVG />
                    <div className="text-xl font-semibold">Vecka 2</div>
                </div>
                <div>
                    <LeftSVG className="transform rotate-180" />
                </div>
            </div>
            {/* Grid displaying days and events */}
            <div className="flex gap-5 flex-1 min-h-0">
                {/* Day columns */}
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Mon</div>
                    <div className="text-2xl font-bold">12</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(1); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(1); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref1}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Tis</div>
                    <div className="text-2xl font-bold">13</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(2); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(2); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref2}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Ons</div>
                    <div className="text-2xl font-bold">14</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(3); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(3); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref3}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Tor</div>
                    <div className="text-2xl font-bold">15</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(4); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(4); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref4}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Fre</div>
                    <div className="text-2xl font-bold">16</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(5); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(5); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref5}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Lör</div>
                    <div className="text-2xl font-bold">17</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(6); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(6); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref6}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
                <div className="flex flex-col gap-1 items-center flex-1">
                    <div className="text-sm">Sön</div>
                    <div className="text-2xl font-bold">18</div>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(7); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>10:00</button>
                    <button className="rounded-lg w-full text-white text-[12px] py-2" style={{ backgroundColor: colors.blue }} onClick={(ev) => {selectRef(7); uhaha(); ev.target.style.backgroundColor = '#9E9CEF'; }}>14:00</button>
                    <div className="rounded-lg w-full text-center">14:00</div>
                </div>
                {/* Main event display */}
                <div className="flex flex-col gap-1 flex-[2] hidden" ref={ref7}>
                    <div className="text-xs">14:00 -16:00</div>
                    <div className="font-bold">Noah möte </div>
                    <div className="text-sm overflow-y-auto flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                    <div><Button className="py-1 float-right">Se allt</Button></div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCalendar;