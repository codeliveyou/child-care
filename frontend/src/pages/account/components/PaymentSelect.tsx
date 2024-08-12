import React from "react";
import { colors } from "../../../constants/colors";

const PaymentSelect = () => {
    // Component to display payment options and details

    return <>
        <div className="w-full flex flex-col" style={{color: colors.textBlack}}>
            {/* Section header */}
            <div className="text-xl font-semibold p-2">Betalningsmetod</div>
            <hr/>

            {/* Radio button for credit card payment */}
            <label className="flex items-center p-2">
                <input type="radio" name="paymentType" className="w-5 h-5"/>
                <span className="grow ml-4 text-base text-[#6F6F6F]">Kort betalning</span>
                <img src="/Klarna.png" width={60} alt="Klarna logo"/>
            </label>

            {/* Container for credit card payment details */}
            <div className="flex items-center p-2 border-2 border-[#DBF6D4] rounded-md">
                <span className="text-base"><b>Kort</b>  VISA - - - - 8324</span>
            </div>

            {/* Container for bank account payment details */}
            <div className="flex items-center p-2 border-2 border-[#B6C2E1] rounded-md mt-2">
                <span className="text-base"><b>Använda bank konto</b>  - - - - 123922</span>
            </div>

            {/* Section for additional information */}
            <div className="bg-[#E9E9F3] p-2 mt-4">
                <ul style={{listStyleType: "disc"}} className="ml-10 font-semibold flex flex-col gap-2">
                    <li>Pengar tas ut cirka två bankdagar</li>
                    <li>Autogirodebitering</li>
                    <li>Klarna betalnings säkerhet</li>
                </ul>
            </div>

            {/* Link to read more section */}
            <div style={{color: colors.blue}} className="underline py-4">Läs mer</div>

            <hr />

            {/* Radio button for invoice payment */}
            <label className="flex items-center p-2">
                <input type="radio" name="paymentType" className="w-5 h-5"/>
                <span className="grow ml-4 text-base text-[#6F6F6F]">Faktura betalning</span>
                <img src="/Klarna.png" width={60} alt="Klarna logo"/>
            </label>
        </div>
    </>
}

export default PaymentSelect;