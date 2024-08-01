import React, { useState } from "react";
import Dialog from "../../globalcomponents/Dialog";
import Input from "../../globalcomponents/Input";
import { twMerge } from "tailwind-merge";
import Button from "../../globalcomponents/Button";


type CustomInputProps = {
    className?: string;
    [key: string]: any;
}
const CustomInput = ({ className = "", ...props }: CustomInputProps) => {
    return <input className={twMerge("bg-[#E9E9F3] border border-[#E9E9F3] rounded-lg py-2 px-4", className)} {...props} />
}

type AddCalendarEventDialogProps = {
    isOpen: boolean;
    onClose: () => void;
}
const AddCalendarEventDialog = ({ isOpen, onClose }: AddCalendarEventDialogProps) => {
    const [status, setStatus] = useState<"create" | "update">("create");
    const createContent = <div className="flex flex-col text-[#374151] gap-5">
        <div className="text-xl font-bold pb-2">Redigera händelse</div>
        <label>
            <div>Händelsenamn</div>
            <CustomInput className="w-full" placeholder="Noah och Elsa" />
        </label>
        <label>
            <div>Patient / Rum namn</div>
            <CustomInput className="w-full" placeholder="Noah" />
        </label>
        <div>
            <div>Tid</div>
            <div className="flex gap-2 items-center w-20">
                <CustomInput className="flex-1" placeholder="12/03/2024 11:00" />
                <span>:</span>
                <CustomInput className="flex-1" placeholder="12/03/2024 13:00" />
            </div>
        </div>
        <label className="flex items-center gap-2">
            <input type="checkbox" />
            <div className="text-[#B6C2E1]">Ange bara start tid</div>
        </label>
        <label>
            <div>Beskrivning</div>
            <textarea
                className="bg-[#E9E9F3] border border-[#E9E9F3] rounded-lg py-2 px-4 w-full h-32 resize-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
        </label>
        <div>
            <Button className="float-right" onClick={() => setStatus("update")}>Spara</Button>
        </div>
    </div>

    const updateContent = <div className="flex flex-col text-[#374151] gap-3">
        <div className="text-2xl font-bold">12 Mars</div>
        <div>10:00 -13:00</div>
        <div className="font-bold text-xl">Noah och Elsa </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
        <div className="justify-end flex">
            <Button backgroundColor="#FFFFFF" textColor="#FF0000">Ta bort</Button>
            <Button onClick={() => setStatus("create")}>Redigera </Button>
        </div>
    </div>
    return <Dialog isOpen={isOpen} onClose={onClose}>
        {status === "create" ? createContent : updateContent}
    </Dialog>
};

export default AddCalendarEventDialog;