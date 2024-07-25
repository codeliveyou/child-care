import react from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../globalcomponents/Button";

const BankQR = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { qrType } = location.state;
    return <> 
        <div className="w-full h-full flex items-center justify-center relative">

            <div className="absolute top-10 left-10"><Button className="border-[#1D19E542]" backgroundColor="#FFF" textColor="#6F6F6F" onClick={() => navigate("/signin")}>Tillbaka</Button></div>

            <div className="flex flex-col items-center gap-4">
                <div className="text-5xl font-extrabold text-center">
                    <div>{ qrType === "signin" ? "Logga in": "Skapa konto" } </div>
                    <div>med Bank ID</div>
                </div>
                <div className="w-96 h-96 rounded-xl border-gray-400 border p-2">
                    <div className="bg-black w-full h-full"></div>
                </div>
                <div className="text-[#B6C2E1]">För att bekräfta din identitet, skanna vänligen den bifogade QR-koden.</div>
            </div>
        </div>
    </>
}

export default BankQR;