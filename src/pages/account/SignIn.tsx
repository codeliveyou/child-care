import React from "react";
import TradeMark from "./components/TradeMark";
import { colors } from "../../constants/colors";
import Button from "../globalcomponents/Button";
import Input from "../globalcomponents/Input";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">
            {/* Background image */}
            <img src="/background.jpg" className="absolute w-full h-full opacity-5"></img>

            {/* Container for split layout */}
            <div className="flex w-[60%] h-[70%] z-10 rounded-xl overflow-hidden">
                {/* Left section for welcome and options */}
                <div className="flex-1 bg-[#211DEF] p-10 flex flex-col">
                    {/* Trademark component */}
                    <div><TradeMark /></div>

                    {/* Main content */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="text-white">
                            <div className="text-3xl font-extrabold mt-10">Välkommen!</div>
                            <div className="text-[#9E9CEF] mt-10 text-xl">
                                <div className="my-4">Denna sida innehåller tre sätt att logga in på.</div>
                                <ul style={{listStyleType: "disc"}} className="pl-6 flex flex-col gap-4">
                                    <li>Skapa ett användarkonto som kan skapa och bjuda in deltagare till rum</li>
                                    <li>Deltar i rummet som ett gäst, observera och kommunicera med användaren</li>
                                    <li>Delta som patient eller deltagare.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Button to navigate to sign-up */}
                    <div><Button onClick={() => navigate('/signup')}>Skapa ett konto</Button></div>
                </div>

                {/* Right section for sign-in form */}
                <div className="flex-1 bg-white relative flex items-center justify-center">
                    {/* Form for sign-in */}
                    <div className="flex flex-col w-[60%] gap-3">
                        <div className="text-3xl font-extrabold" style={{color: colors.textBlack}}>Logga In</div>
                        <Input placeholder="Användarnamn" className="w-full text-lg" />
                        <Input placeholder="Lösenord" className="w-full text-lg" />
                        <div className="text-[#211DEF] underline">Har du glömd lösenordet?</div>
                        <Button className="w-full">Logga In</Button>
                        <div className="text-center w-full text-gray-400">Or use Bank ID</div>
                        {/* Button to navigate to Bank QR */}
                        <Button className="w-full border-[#1D19E542]" backgroundColor="#FFF" textColor="#B6C2E1" onClick={() => navigate('/bank_qr', {state: {qrType: "signin"}})}>Bank ID</Button>
                        <div className="text-[#B6C2E1] text-sm">Genom att logga in samtycker jag till Childcare Integritetspolicy och tjänstevillkor.</div>
                        {/* Checkbox for stay logged in */}
                        <div><label className="text-gray-400 flex items-center"><input type="checkbox" className="mr-5 w-6 h-6"/>Fortsätt att vara inloggad</label></div>
                    </div>

                    {/* Buttons to navigate to different sign-in options */}
                    <div className="absolute bottom-10 right-10">
                        <Button textColor="#000" backgroundColor="#FFF" className="border-[#1D19E542] mr-5 py-2 px-4" onClick={() => navigate("/patient_signin")}>Patient</Button>
                        <Button textColor="#000" backgroundColor="#FFF" className="border-[#1D19E542] py-2 px-4" onClick={() => navigate("/guest_signin")}>Gäst</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;