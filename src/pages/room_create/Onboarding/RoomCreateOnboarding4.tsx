import react from "react"
import SignOutButton from "../../globalcomponents/SignOutButton";
import LogoButton from "../../globalcomponents/LogoButton";
import { colors } from "../../../constants/colors";
import TradeMark from "../../account/components/TradeMark";
import ClipBoardLabel from "../../globalcomponents/ClipboardLabel";
import Button from "../../globalcomponents/Button";
import { useNavigate } from "react-router-dom";

const RoomCreateOnboarding4 = () => {
    const navigate = useNavigate();
    return <>
        <div className="w-full h-full flex items-center justify-center relative bg-[#E9E9F3]">
            <SignOutButton className="absolute top-10 right-10" />
            <LogoButton className="absolute bottom-5 left-5" />

            <div className="w-[60%] max-w-[640px] rounded-xl p-10 flex flex-col gap-5 items-center" style={{backgroundColor: colors.blue}}>
                <TradeMark className="self-start" />  
                <div className="text-center text-white text-3xl font-extrabold mt-5">
                    <p>Noah rum</p>
                    <p>är redo att användas.</p>
                </div>
                <div className="text-center text-[#9E9CEF] text-xl">
                    Siffrorna nedan hjälper dig att bjuda in en patient eller moderator till det här rummet.
                </div>
                <div className="flex text-white text-xl items-center gap-3">
                    <span className="w-32 text-right">Patient ID:</span>
                    <ClipBoardLabel>#123445456546</ClipBoardLabel>
                </div>
                <div className="flex text-white text-xl items-center gap-3">
                    <span className="w-32 text-right">Gäst ID:</span>
                    <ClipBoardLabel>#123445456546</ClipBoardLabel>
                </div>

                <Button backgroundColor="#E9E9F3" textColor="#211DEF" className="mt-10" onClick={() => navigate("/")}>Klart</Button>
            </div>
        </div>
    </>
};

export default RoomCreateOnboarding4;