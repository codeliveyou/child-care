import React from "react";
import TradeMark from "./components/TradeMark";
import Button from "../globalcomponents/Button";
import Input from "../globalcomponents/Input";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const PatientSignIn = () => {
    const navigate = useNavigate();

    return <>
        {/* Main container with gradient background */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">

            {/* Background image */}
            <img src="/background.jpg" className="absolute w-full h-full opacity-5"></img>

            {/* Container for split layout */}
            <div className="flex w-[60%] h-[70%] rounded-xl overflow-hidden z-10">

                {/* Left section for patient room form */}
                <div className="flex-[3] bg-white relative flex items-center justify-center">
                    {/* TradeMark component for logo */}
                    <div className="absolute top-10 left-10"><TradeMark color={colors.blue} /></div>

                    {/* Form for patient room */}
                    <div className="flex flex-col w-[60%] gap-4">
                        {/* Title for patient room */}
                        <div className="text-5xl font-extrabold" style={{ color: colors.textBlack }}>Patient rum</div>

                        {/* Input fields */}
                        <Input placeholder="Rum-ID eller Perssonnumer" className="w-full" />

                        {/* Button to proceed */}
                        <Button className="w-full mt-5">Delta</Button>

                        {/* Checkbox for stay logged in */}
                        <div><label className="text-gray-400 flex items-center"><input type="checkbox" className="mr-5 w-6 h-6" />Fortsätt att vara inloggad</label></div>
                    </div>
                </div>

                {/* Right section for patient room details */}
                <div className="flex-[2] bg-[#211DEF] p-10 flex flex-col">
                    <div className="flex-1 flex justify-center items-center">
                        {/* Text content */}
                        <div className="text-white">
                            {/* Title */}
                            <div className="text-5xl font-extrabold">Patient rum</div>
                            
                            {/* Description */}
                            <div className="text-[#9E9CEF] mt-20 text-2xl">
                                Denna sida är avsedd för patienter eller personer som får vård genom vår tjänst.
                            </div>
                        </div>
                    </div>

                    {/* Button to navigate back to sign-in */}
                    <div className="self-end"><Button onClick={() => navigate('/signin')}>Logga In </Button></div>
                </div>
            </div>
        </div>
    </>
};

export default PatientSignIn;