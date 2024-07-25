import react from "react"
import { useNavigate } from "react-router-dom";
import Button from "../../globalcomponents/Button";
import Input from "../../globalcomponents/Input";
import { colors } from "../../../constants/colors";

const PaymentTypeSelect = () => {
    const navigate = useNavigate();
    return <>
        <div className="flex w-full h-full">


            <div className="flex-1 p-10 flex items-center justify-center" style={{backgroundColor: colors.blue}}>
                <div className="flex flex-col items-center justify-center w-[70%] gap-10">
                    <div className="text-5xl font-extrabold text-[#E9E9F3]">Anpassa din profil för att få tillgång till och betalningstjänster.</div>
                    <Input placeholder="Företag kod" className="w-full bg-[#FFFFFF1A] border-[#FFFFFF80] text-white"/>
                    <div className="text-[#9E9CEF] text-2xl">
                    Eftersom du inte har angett en specifik företagskod, fyll i betalningsmetoden. Kan du vara vänlig och specificera vilken betalningsmetod du vill använda? Till exempel, kreditkort, Swish, faktura.
                    </div>
                </div>
            </div>


            <div className="flex-1 bg-white relative flex items-center justify-center">

                <div className="flex flex-col w-[80%] gap-4">
                    <div className="text-5xl font-extrabold text-center" style={{ color: colors.textBlack }}>Betalningsalternativ</div>
                    <div className="flex gap-10">
                        <Button backgroundColor="#FFF" textColor="#6F6F6F" className="flex items-center border-[#1D19E542] flex-1 py-5" onClick={() => navigate("/signup/payment/subscription")}>
                            <img src="/Klarna.png" width={100} />
                            Prenumeration
                        </Button>
                        <Button backgroundColor="#FFF" textColor="#6F6F6F" className="flex items-center border-[#1D19E542] flex-1 py-5" onClick={() => navigate("/signup/payment/hourly")}>
                            <img src="/Klarna.png" width={100} />
                            Timpriser
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    </>
};

export default PaymentTypeSelect;