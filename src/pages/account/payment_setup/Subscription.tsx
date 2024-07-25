import react from "react"
import Button from "../../globalcomponents/Button";
import PaymentSelect from "../components/PaymentSelect";
import SSN from "../components/SSN";
import { colors } from "../../../constants/colors";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const navigate = useNavigate();
    return <>
        <div className="flex w-full h-full relative flex-1">
            <Button backgroundColor="#FFF" textColor="#6F6F6F" className="border-[#1D19E542] absolute top-10 left-10" onClick={() => navigate("/signup/payment")}>Tillbaka</Button>

            <div className="flex-[3] flex justify-center items-center">

                <div className="w-[90%]">
                    <PaymentSelect />
                </div>
            </div>

            <div className="flex-[2] flex flex-col justify-center relative p-10">
                <div className="flex flex-col gap-2 items-end top-10 right-10 absolute">
                    <div className="text-5xl font-extrabold">Prenumeration</div>
                    <div className="text-[#B6C2E1]">Välj betalningsmetod</div>
                </div>

                <SSN />
                <div className="p-10 text-xl text-[#6F6F6F]">
                    <p>Johan Anderson</p>
                    <p>Ringgatan 40,</p>
                    <p>653 49 Karlstad</p>
                </div>

                <Button className="absolute bottom-10 right-10" onClick={() => navigate("/room/create")}>Slutför</Button>

            </div>
        </div>
    </>
}

export default Subscription;