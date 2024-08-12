import React from "react";
import Button from "../../globalcomponents/Button";
import PaymentSelect from "../components/PaymentSelect";
import SSN from "../components/SSN";
import { colors } from "../../../constants/colors";
import { useNavigate } from "react-router-dom";

const Hourly = () => {
    const navigate = useNavigate();

    return <>
        {/* Main container with gradient background */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">

            {/* Background image */}
            <img src="/background.jpg" className="absolute w-full h-full opacity-5"></img>

            {/* Content container */}
            <div className="flex w-[60%] h-[80%] rounded-xl overflow-hidden z-10 relative bg-white" style={{ color: colors.textBlack }}>
                {/* Button to navigate back */}
                <Button backgroundColor="#FFF" textColor="#6F6F6F" className="border-[#1D19E542] absolute top-10 left-10" onClick={() => navigate("/signup/payment")}>Tillbaka</Button>

                {/* Left section with payment selection */}
                <div className="flex-[3] flex justify-center items-center">
                    <div className="w-[90%] flex flex-col gap-3">
                        {/* Payment selection component */}
                        <PaymentSelect />

                        {/* Total amount section */}
                        <div className="text-center text-base">Totalsumma inkluderar moms</div>
                        <div className="text-center text-xl font-extrabold text-[#030303]">500 SEK</div>

                        {/* Button to proceed with payment */}
                        <Button className="rounded-none" backgroundColor="#000" onClick={() => navigate("/room/create")}>Betala</Button>
                    </div>
                </div>

                {/* Right section with additional details */}
                <div className="flex-[2] flex flex-col justify-center relative p-10">
                    <div className="flex flex-col gap-2 items-end top-10 right-10 absolute">
                        {/* Title for hourly rates */}
                        <div className="text-3xl font-extrabold">Timpriser</div>
                        <div className="text-[#B6C2E1]">Välj betalningsmetod</div>
                    </div>

                    {/* Component for Social Security Number input */}
                    <SSN />

                    {/* Address and name details */}
                    <div className="p-5 text-sm text-[#6F6F6F]">
                        <p>Johan Anderson</p>
                        <p>Ringgatan 40,</p>
                        <p>653 49 Karlstad</p>
                    </div>

                    {/* Additional information section */}
                    <div className="bg-[#E9E9F3] rounded-xl flex flex-col px-2 py-5 gap-3">
                        <span className="text-lg font-extrabold">Tid</span>

                        {/* Detailed cost breakdown */}
                        <div className="bg-white rounded-lg p-2 font-bold">
                            <span>Tidkostnad </span>
                            <span className="float-right">500kr</span>
                        </div>

                        {/* Quantity selection */}
                        <span className="text-base">Kvantitet</span>
                        <select className="p-2 bg-inherit border-b border-[#B6C2E1] outline-none">
                            <option>1</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Hourly;