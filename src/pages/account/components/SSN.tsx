import react from "react"
import Input from "../../globalcomponents/Input";
import Button from "../../globalcomponents/Button";

const SSN = () => {
    return <>
        <div className="flex flex-col w-full gap-2">
            <div className="text-[#B6C2E1] text-xl">Personnummer</div>
            <Input placeholder="853423-5432" className="rounded-none"/>
            <Button backgroundColor="#1C1C1C" className="rounded-none">Koppla konto</Button>
        </div>
    </>
};

export default SSN;