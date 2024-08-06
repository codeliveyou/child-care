import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../globalcomponents/Button";
import Input from "../../globalcomponents/Input";
import { colors } from "../../../constants/colors";

const PaymentTypeSelect = () => {
    const navigate = useNavigate();

    return <>
        {/* Main container with gradient background */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">

            {/* Background image */}
            <img src="/background.jpg" className="absolute w-full h-full opacity-5"></img>

            {/* Container for split layout */}
            <div className="flex w-[60%] h-[70%] rounded-xl overflow-hidden z-10">

                {/* Left section with blue background */}
                <div className="flex-1 p-10 flex items-center justify-center" style={{ backgroundColor: colors.blue }}>
                    <div className="flex flex-col items-center justify-center w-[70%] gap-5">
                        {/* Title for customizing profile */}
                        <div className="text-3xl font-extrabold text-[#E9E9F3]">Anpassa din profil för att få tillgång till och betalningstjänster.</div>

                        {/* Input field for company code */}
                        <Input placeholder="Företag kod" className="w-full bg-[#FFFFFF1A] border-[#FFFFFF80] text-white" />

                        {/* Explanation text for payment method */}
                        <div className="text-[#9E9CEF] text-xl">
                            Eftersom du inte har angett en specifik företagskod, fyll i betalningsmetoden. Kan du vara vänlig och specificera vilken betalningsmetod du vill använda? Till exempel, kreditkort, Swish, faktura.
                        </div>
                    </div>
                </div>

                {/* Right section with white background */}
                <div className="flex-1 bg-white relative flex items-center justify-center">
                    <div className="flex flex-col w-[80%] gap-4">
                        {/* Title for payment options */}
                        <div className="text-3xl font-extrabold text-center" style={{ color: colors.textBlack }}>Betalningsalternativ</div>

                        {/* Buttons for subscription and hourly payment */}
                        <div className="flex gap-5">
                            <Button backgroundColor="#FFF" textColor="#6F6F6F" className="flex items-center border-[#1D19E542] flex-1 py-3 px-1 text-base" onClick={() => navigate("/signup/payment/subscription")}>
                                <img src="/Klarna.png" width={50} alt="Klarna logo" />
                                Prenumeration
                            </Button>
                            <Button backgroundColor="#FFF" textColor="#6F6F6F" className="flex items-center border-[#1D19E542] flex-1 py-3 px-1 text-base" onClick={() => navigate("/signup/payment/hourly")}>
                                <img src="/Klarna.png" width={50} alt="Klarna logo" />
                                Timpriser
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default PaymentTypeSelect;