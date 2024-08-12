import react from "react";
import { colors } from "../../../constants/colors";
import TradeMark from "../../account/components/TradeMark";
import Button from "../../globalcomponents/Button";
import ProgressBar from "../../globalcomponents/ProgressBar";
import { useNavigate } from "react-router-dom";

const RoomCreateOnboarding1 = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Main container */}
            <div className="flex w-full h-full items-center justify-center bg-[E9E9F3]">
                {/* Container for the onboarding process */}
                <div className="w-[60%] h-[60%] rounded-xl overflow-hidden flex border-[#B6C2E1] border">
                    {/* Left side with branding and welcome message */}
                    <div className="flex-1 flex flex-col relative p-10" style={{ backgroundColor: colors.blue }}>
                        <div><TradeMark /></div>

                        <div className="flex-1 flex justify-center items-center">
                            <div className="text-white">
                                <div className="text-3xl font-extrabold">
                                    <p>Välkommen!</p>
                                    <p>Jag är glad att du vill skapa ett rum.</p>
                                </div>
                                <div className="text-[#9E9CEF] mt-20 text-lg">
                                    <ul style={{ listStyleType: "disc" }} className="pl-6 flex flex-col gap-4">
                                        <li>Att skapa ett rum innebär enkla steg som att välja en avatars namn, outfit och publik</li>
                                        <li>Alla valda inställningar kan ändras när som helst i rummet.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side with progress bar and form inputs */}
                    <div className="flex-1 flex flex-col p-10">
                        <div>
                            <ProgressBar value={25} />
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-1">
                            <div className="text-xl font-bold text-[#374151]">Skapa ett Namn</div>

                            {/* Placeholder form inputs */}
                            <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Rum namn</div>
                            <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Patient namn</div>
                            <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Patient personnumret</div>
                            <div className="p-3 border-[#1D19E542] border rounded-lg text-[#6F6F6F]">Avatar namn</div>
                        </div>
                        <div>
                            {/* Button to proceed to next onboarding step */}
                            <Button className="float-right" onClick={() => navigate("/room/create/onboarding#2")}>Nästa</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomCreateOnboarding1;