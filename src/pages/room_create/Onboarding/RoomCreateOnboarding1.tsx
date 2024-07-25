import react from "react"
import { colors } from "../../../constants/colors";
import TradeMark from "../../account/components/TradeMark";
import Button from "../../globalcomponents/Button";
import ProgressBar from "../../globalcomponents/ProgressBar";
import { useNavigate } from "react-router-dom";

const RoomCreateOnboarding1 = () => {
    const navigate = useNavigate();
    return <>
        <div className="flex w-full h-full">
            <div className="flex-1 flex flex-col relative p-10" style={{ backgroundColor: colors.blue }}>
                <div><TradeMark /></div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="text-white">
                        <div className="text-5xl font-extrabold">
                            <p>Välkommen!</p>
                            <p>Jag är glad att du vill skapa ett rum.</p>
                        </div>
                        <div className="text-[#9E9CEF] mt-20 text-2xl">
                            <ul style={{ listStyleType: "disc" }} className="pl-6 flex flex-col gap-4">
                                <li>Att skapa ett rum innebär enkla steg som att välja en avatars namn, outfit och publik</li>
                                <li>Alla valda inställningar kan ändras när som helst i rummet.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex-1 flex flex-col p-10">
                <div>
                    <ProgressBar value={25}/>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">

                    <div className="text-xl font-bold text-[#374151]">Skapa ett Namn</div>

                    <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Rum namn</div>
                    <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Patient namn</div>
                    <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Patient personnumret</div>
                    <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Avatar namn</div>
                </div>
                <div>
                    <Button className="float-right" onClick={() => navigate("/room/create/onboarding#2")}>Nästa</Button>
                </div>
            </div>
        </div>
    </>
};

export default RoomCreateOnboarding1;