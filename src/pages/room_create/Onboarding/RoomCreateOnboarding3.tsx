import react, { useState } from "react"
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
    const handleToggle = () => {
        setIsToggled(a => !a);
    }
    return <>
        <div className="flex w-full h-full">
            <div className="flex-1 flex flex-col relative p-10" style={{ backgroundColor: colors.blue }}>
                <div><TradeMark /></div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="text-white">
                        <div className="text-5xl font-extrabold">
                            <p>2 STEG</p>
                            <p>Avatar inställningar</p>
                        </div>
                        <div className="text-[#9E9CEF] mt-10 text-2xl">
                            <div className="py-6">Detta registreringssteg är avsett att konfigurera eller begränsa användningen av AI i interaktion med din publik.</div>
                            <ul style={{ listStyleType: "disc" }} className="pl-6 flex flex-col gap-6">
                                <li>Var specifik med hur du vill att AI ska interagera med barnen</li>
                                <li>Kom ihåg att AI inte alltid kommer att kunna svara på samma sätt som en människa. Därför är det viktigt att skapa svar på de viktigaste frågorna.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex-1 flex flex-col p-10">
                <div>
                    <ProgressBar value={75}/>
                </div>
                <div className="my-10 flex justify-between items-center">
                    <span className="text-[#374151] text-xl font-bold">Använd AI</span>
                    <Toggle isToggled={isToggled} handleToggle={handleToggle}/>
                </div>
                <div className={twMerge("flex-1 flex flex-col justify-center gap-3", isToggled ? "visible" : "invisible")}>

                    <span className="text-[#374151] text-xl font-bold">AI-begränsningar</span>
                    <Input placeholder="Nyckelord"/>

                    <div className="flex flex-wrap text-[#374151] gap-2">
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Alkohol</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Skrik</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Naken</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Våld</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Vuxen</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Stress</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Misshandel </div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Slogen</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Skola</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Vänner</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Mobbar</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Ensam</div>
                        <div className="bg-[#E9E9F3] px-2 py-1 rounded">Hemma</div>
                    </div>

                    <span className="text-[#374151] text-xl font-bold mt-10">AI-svars mönster</span>
                    <Input placeholder="Skriv ett svar"/>
                    <Input placeholder="Skriv nyckelord "/>

                    <span className="text-[#B6C2E1]">List, separated by commas, all the words for which you can choose the right answer.</span>

                    <div className="flex items-center justify-between mt-10">
                        <Button>Lägg till mönster</Button>
                        <span style={{color: colors.blue}} className="underline">Se allt</span>
                    </div>
                </div>
                <div>
                    <Button className="float-right" onClick={() => navigate("/room/create/onboarding#4")}>Nästa</Button>
                    <Button className="float-right border-[#374151] mx-4" backgroundColor="#FFF" textColor={colors.textBlack}
                            onClick={() => navigate("/room/create/onboarding#2")}>Tillbaka</Button>
                </div>
            </div>
        </div>
    </>
};

export default RoomCreateOnboarding3;