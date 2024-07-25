import react from "react"
import TradeMark from "./components/TradeMark";
import Button from "../globalcomponents/Button";
import Input from "../globalcomponents/Input";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const PatientSignIn = () => {
    const navigate = useNavigate();
    return <>
    <div className="flex w-full h-full">

        <div className="flex-[3] bg-white relative flex items-center justify-center">

            <div className="absolute top-10 left-10"><TradeMark color={colors.blue} /></div>
            <div className="flex flex-col w-[60%] gap-4">
                <div className="text-5xl font-extrabold" style={{color: colors.textBlack}}>Patient rum</div>
                <Input placeholder="Rum-ID eller Perssonnumer" className="w-full" />
                <Button className="w-full mt-5" >Delta</Button>
                <div><label className="text-gray-400 flex items-center"><input type="checkbox" className="mr-5 w-6 h-6"/>Fortsätt att vara inloggad</label></div>
            </div>


        </div>

        <div className="flex-[2] bg-[#211DEF] p-10 flex flex-col">

            <div className="flex-1 flex justify-center items-center">
                <div className="text-white">
                    <div className="text-5xl font-extrabold">Patient rum</div>
                    <div className="text-[#9E9CEF] mt-20 text-2xl">
                    Denna sida är avsedd för patienter eller personer som får vård genom vår tjänst.
                    </div>
                </div>
            </div>

            <div className="self-end"><Button onClick={() => navigate('/signin')}>Logga In </Button></div>
        </div>


    </div>
    </>
};

export default PatientSignIn;