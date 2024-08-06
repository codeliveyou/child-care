import React, { useState } from "react";
import { colors } from "../../../constants/colors";
import TradeMark from "../../account/components/TradeMark";
import Button from "../../globalcomponents/Button";
import ProgressBar from "../../globalcomponents/ProgressBar";
import { useNavigate } from "react-router-dom";
import Toggle from "../../globalcomponents/Toggle";
import Input from "../../globalcomponents/Input";
import { twMerge } from "tailwind-merge";

const RoomCreateOnboarding3 = () => {
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState<boolean>(false);

    // Function to toggle AI settings visibility
    const handleToggle = () => {
        setIsToggled(prev => !prev);
    };

    return (
        <>
            {/* Main container */}
            <div className="w-full h-full flex items-center justify-center bg-[E9E9F3]">
                {/* Container for the onboarding process */}
                <div className="w-[60%] rounded-xl overflow-hidden flex border-[#B6C2E1] border">
                    {/* Left side with branding and instructions */}
                    <div className="flex-1 flex flex-col relative p-10" style={{ backgroundColor: colors.blue }}>
                        <div><TradeMark /></div>

                        <div className="flex-1 flex justify-center items-center">
                            <div className="text-white">
                                <div className="text-3xl font-extrabold">
                                    <p>2 STEG</p>
                                    <p>Avatar inställningar</p>
                                </div>
                                <div className="text-[#9E9CEF] mt-10 text-lg">
                                    <div className="py-6">Detta registreringssteg är avsett att konfigurera eller begränsa användningen av AI i interaktion med din publik.</div>
                                    <ul style={{ listStyleType: "disc" }} className="pl-6 flex flex-col gap-6">
                                        <li>Var specifik med hur du vill att AI ska interagera med barnen</li>
                                        <li>Kom ihåg att AI inte alltid kommer att kunna svara på samma sätt som en människa. Därför är det viktigt att skapa svar på de viktigaste frågorna.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side with progress bar and AI settings */}
                    <div className="flex-1 flex flex-col p-10">
                        <div>
                            <ProgressBar value={75} />
                        </div>
                        <div className="my-10 flex justify-between items-center">
                            <span className="text-[#374151] text-lg font-bold">Använd AI</span>
                            <Toggle isToggled={isToggled} handleToggle={handleToggle} />
                        </div>
                        <div className={twMerge("flex-1 flex flex-col justify-center gap-2", isToggled ? "visible" : "invisible")}>

                            {/* AI limitations */}
                            <span className="text-[#374151] text-base font-bold">AI-begränsningar</span>
                            <Input placeholder="Nyckelord" />

                            <div className="flex flex-wrap text-[#374151] gap-2">
                                {/* Placeholder keywords */}
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Alkohol</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Skrik</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Naken</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Våld</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Vuxen</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Stress</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Misshandel</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Slogen</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Skola</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Vänner</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Mobbar</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Ensam</div>
                                <div className="bg-[#E9E9F3] px-2 py-1 rounded text-xs">Hemma</div>
                            </div>

                            {/* AI response patterns */}
                            <span className="text-[#374151] text-base font-bold mt-5">AI-svars mönster</span>
                            <Input placeholder="Skriv ett svar" />
                            <Input placeholder="Skriv nyckelord" />

                            <span className="text-[#B6C2E1] text-xs">List, separated by commas, all the words for which you can choose the right answer.</span>

                            <div className="flex items-center justify-between mt-5">
                                <Button>Lägg till mönster</Button>
                                <span style={{ color: colors.blue }} className="underline">Se allt</span>
                            </div>
                        </div>
                        <div>
                            {/* Navigation buttons */}
                            <Button className="float-right" onClick={() => navigate("/room/create/onboarding#4")}>Nästa</Button>
                            <Button className="float-right border-[#374151] mx-4" backgroundColor="#FFF" textColor={colors.textBlack} onClick={() => navigate("/room/create/onboarding#2")}>Tillbaka</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomCreateOnboarding3;