import react from "react"
import TradeMark from "./components/TradeMark";
import Button from "../globalcomponents/Button";
import Input from "../globalcomponents/Input";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    return <>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6BDCF5] to-[#B6C2E1] relative">
        
        <img src="/background.jpg" className="absolute w-full h-full opacity-5"></img>
    <div className="flex w-[60%] h-[70%] rounded-xl overflow-hidden z-10">

        <div className="flex-[3] bg-white relative flex items-center justify-center">

            <div className="absolute top-10 left-10"><TradeMark color={colors.blue} /></div>
            <div className="flex flex-col w-[60%] gap-2">
                <div className="text-3xl font-extrabold" style={{color: colors.textBlack}}>Skapa ett konto</div>
                <Input placeholder="E-post" className="w-full" />
                <Input placeholder="Vård / Företag" className="w-full" />
                <Input placeholder="Användarnamn" className="w-full" />
                <Input placeholder="Lösenord" className="w-full" />
                <Button className="w-full" onClick={() => navigate("/signup/payment")}>Skapa</Button>
                <div className="text-center w-full text-gray-400">Or use Bank ID</div>
                <Button className="w-full border-[#1D19E542]" backgroundColor="#FFF" textColor="#B6C2E1" onClick={() => navigate("/bank_qr", {state: {qrType: "signup"}})} >Bank ID</Button>
                <div className="text-[#B6C2E1] text-sm">Genom att logga in samtycker jag till Childcare  Integritetspolicy och tjänstevillkor.</div>
                <div><label className="text-gray-400 flex items-center"><input type="checkbox" className="mr-5 w-6 h-6"/>Fortsätt att vara inloggad</label></div>
            </div>


        </div>

        <div className="flex-[2] bg-[#211DEF] p-10 flex flex-col">

            <div className="flex-1 flex justify-center items-center">
                <div className="text-white">
                    <div className="text-5xl font-extrabold">Välkommen!</div>
                    <div className="text-[#9E9CEF] mt-20 text-2xl">
                        <div className="my-4">Denna sida innehåller tre sätt att logga in på.</div>
                        <ul style={{listStyleType: "disc"}} className="pl-6 flex flex-col gap-4">
                            <li>Skapa ett användarkonto som kan skapa och bjuda in deltagare till rum</li>
                            <li>Deltar i rummet som ett gäst, observera och kommunicera med användaren</li>
                            <li>Delta som patient eller deltagare.  </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="self-end"><Button onClick={() => navigate('/signin')}>Logga In </Button></div>
        </div>


    </div>
    </div>
</>
};

export default SignUp;