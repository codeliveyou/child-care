import react from "react"
import { colors } from "../../../constants/colors";
import TradeMark from "../../account/components/TradeMark";
import Button from "../../globalcomponents/Button";
import ProgressBar from "../../globalcomponents/ProgressBar";
import { useNavigate } from "react-router-dom";

const RoomCreateOnboarding2 = () => {
    const navigate = useNavigate();
    return <>
        <div className="flex w-full h-full">
            <div className="flex-1 flex flex-col relative p-10" style={{ backgroundColor: colors.blue }}>
                <div><TradeMark /></div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="text-white">
                        <div className="text-5xl font-extrabold">
                            <p>1 STEG</p>
                            <p>Avatar inställningar</p>
                        </div>
                        <div className="text-[#9E9CEF] mt-10 text-2xl">
                            <div className="py-6">I det här steget kommer du att kunna välja en av de medföljande avatarerna och rösterna.</div>
                            <ul style={{ listStyleType: "disc" }} className="pl-6 flex flex-col gap-6">
                                <li>Glöm inte att när du väljer en avatar ska utseendet och rösten matcha varandra.</li>
                                <li>Om du hoppar över att välja en röst i det här steget kommer din avatar att tala med din ursprungliga röst.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex-1 flex flex-col p-10">
                <div>
                    <ProgressBar value={50}/>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">

                    {/* Have to finish */ }
                </div>
                <div>
                    <Button className="float-right" onClick={() => navigate("/room/create/onboarding#3")}>Nästa</Button>
                    <Button className="float-right border-[#374151] mx-4" backgroundColor="#FFF" textColor={colors.textBlack}
                            onClick={() => navigate("/room/create/onboarding#1")}>Tillbaka</Button>
                </div>
            </div>
        </div>
    </>
};

export default RoomCreateOnboarding2;