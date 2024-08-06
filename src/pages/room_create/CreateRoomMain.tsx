import React from "react";
import TradeMark from "../account/components/TradeMark";
import Button from "../globalcomponents/Button";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../globalcomponents/SignOutButton";

const CreateRoomMain = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative gap-3 bg-[#E9E9F3]">
            {/* Trademark component */}
            <TradeMark color={colors.blue} />
            
            {/* Button to create a room */}
            <Button className="flex items-center gap-3" onClick={() => navigate("/room/create/onboarding#1")}>
                <span className="text-4xl">+</span> Skapa ett rum
            </Button>

            {/* Sign out button */}
            <SignOutButton className="absolute top-10 right-10" />
        </div>
    );
};

export default CreateRoomMain;