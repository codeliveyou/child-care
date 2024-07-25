import react from "react";
import { colors } from "../../../constants/colors";

const PaymentSelect = () => {
    return <>
        <div className="w-full flex flex-col" style={{color: colors.textBlack}}>
            <div className="text-3xl font-semibold p-2">Betalningsmetod</div>
            <hr/>
            <label className="flex items-center p-2">
                <input type="radio" name="paymentType" className="w-8 h-8"/>
                <span className="grow ml-4 text-lg text-[#6F6F6F]">Kort betalning</span>
                <img src="/Klarna.png" width={100} />
            </label>

            <div className="flex items-center p-4 border-2 border-[#DBF6D4] rounded-md">
                <span className="text-lg"><b>Kort</b>  VISA - - - - 8324</span>
            </div>

            <div className="flex items-center p-4 border-2 border-[#B6C2E1] rounded-md mt-2">
                <span className="text-lg"><b>Använda bank konto</b>  - - - - 123922</span>
            </div>

            <div className="bg-[#E9E9F3] p-4 mt-4">
                <ul style={{listStyleType: "disc"}} className="ml-10 font-semibold flex flex-col gap-2">
                    <li>Pengar tas ut cirka två bankdagar</li>
                    <li>Autogirodebitering</li>
                    <li>Klarna betalnings säkerhet</li>
                </ul>
            </div>

            <div style={{color: colors.blue}} className="underline py-4">Läs mer</div>

            <hr />

            <label className="flex items-center p-2">
                <input type="radio" name="paymentType" className="w-8 h-8"/>
                <span className="grow ml-4 text-lg text-[#6F6F6F]">Faktura betalning</span>
                <img src="/Klarna.png" width={100} />
            </label>
        </div>
    </>
}

export default PaymentSelect;