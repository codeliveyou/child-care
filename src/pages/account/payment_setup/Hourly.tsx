import react from "react"
import Button from "../../globalcomponents/Button";
import PaymentSelect from "../components/PaymentSelect";
import SSN from "../components/SSN";
import { colors } from "../../../constants/colors";
import { useNavigate } from "react-router-dom";

const Hourly = () => {
    const navigate = useNavigate();
    return <>
        <div className="flex w-full h-full relative flex-1" style={{color: colors.textBlack}}>
            <Button backgroundColor="#FFF" textColor="#6F6F6F" className="border-[#1D19E542] absolute top-10 left-10" onClick={() => navigate("/signup/payment")}>Tillbaka</Button>

            <div className="flex-[3] flex justify-center items-center">

                <div className="w-[90%] flex flex-col gap-3">
                    <PaymentSelect />

                    <div className="text-center text-xl">Totalsumma inkluderar moms</div>
                    <div className="text-center text-3xl font-extrabold text-[#030303]">500 SEK</div>
                    <Button className="rounded-none" backgroundColor="#000" onClick={() => navigate("/room/create")}>Betala</Button>
                </div>
            </div>

            <div className="flex-[2] flex flex-col justify-center relative p-10">
                <div className="flex flex-col gap-2 items-end top-10 right-10 absolute">
                    <div className="text-5xl font-extrabold">Timpriser</div>
                    <div className="text-[#B6C2E1]">Choose the payment method</div>
                </div>

                <SSN />
                <div className="p-10 text-xl text-[#6F6F6F]">
                    <p>Johan Anderson</p>
                    <p>Ringgatan 40,</p>
                    <p>653 49 Karlstad</p>
                </div>
                <div className="bg-[#E9E9F3] rounded-xl flex flex-col px-3 py-10 gap-3">
                    <span className="text-2xl font-extrabold">TId</span>
                    <div className="bg-white rounded-lg p-4 font-bold">
                        <span>Tidkostnad </span>
                        <span className="float-right">500kr</span>
                    </div>

                    <span className="text-xl">Kvantitet</span>
                    <select className="p-4 bg-inherit border-b border-[#B6C2E1] outline-none">
                        <option>1</option>
                    </select>
                </div>
            </div>
        </div>
    </>
}

export default Hourly;