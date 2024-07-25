import react from "react"
import TradeMark from "./components/TradeMark";
import { colors } from "../../constants/colors";
import Button from "../globalcomponents/Button";
import Input from "../globalcomponents/Input";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    return <>
        <div className="flex w-full h-full">


            <div className="flex-1 bg-[#211DEF] p-10 flex flex-col">
                <div><TradeMark /></div>

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

                <div><Button onClick={() => navigate('/signup')}>Skapa ett konto </Button></div>
            </div>


            <div className="flex-1 bg-white relative flex items-center justify-center">

                <div className="flex flex-col w-[60%] gap-4">
                    <div className="text-5xl font-extrabold" style={{color: colors.textBlack}}>Logga In</div>
                    <Input placeholder="Användarnamn" className="w-full" />
                    <Input placeholder="Lösenord" className="w-full" />
                    <div className="text-[#211DEF] underline">Har du glömd lösenordet?</div>
                    <Button className="w-full" >Logga In</Button>
                    <div className="text-center w-full text-gray-400">Or use Bank ID</div>
                    <Button className="w-full border-[#1D19E542]" backgroundColor="#FFF" textColor="#B6C2E1" onClick={() => navigate('/bank_qr', {state: {qrType: "signin"}})}>Bank ID</Button>
                    <div className="text-[#B6C2E1] text-sm">Genom att logga in samtycker jag till Childcare  Integritetspolicy och tjänstevillkor.</div>
                    <div><label className="text-gray-400 flex items-center"><input type="checkbox" className="mr-5 w-6 h-6"/>Fortsätt att vara inloggad</label></div>
                </div>

                <div className="absolute bottom-10 right-10">
                    <Button textColor="#000" backgroundColor="#FFF" className="border-[#1D19E542] mr-5" onClick={() => navigate("/patient_signin")}>Patient</Button>
                    <Button textColor="#000" backgroundColor="#FFF" className="border-[#1D19E542]" onClick={() => navigate("/guest_signin")}>Gäst</Button>
                </div>

            </div>
        </div>
    </>
};

export default SignIn;