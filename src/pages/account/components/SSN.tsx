import React from "react";
import Input from "../../globalcomponents/Input";
import Button from "../../globalcomponents/Button";

const SSN = () => {
    // Component to handle Social Security Number input and account linking

    return <>
        <div className="flex flex-col w-full gap-2">
            {/* Section header */}
            <div className="text-[#B6C2E1] text-xl">Personnummer</div>

            {/* Input field for Social Security Number */}
            <Input placeholder="853423-5432" className="rounded-none"/>

            {/* Button to link account */}
            <Button backgroundColor="#1C1C1C" className="rounded-none">Koppla konto</Button>
        </div>
    </>
};

export default SSN;