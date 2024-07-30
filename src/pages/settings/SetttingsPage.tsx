import react from "react"
import Button from "../globalcomponents/Button";

const SettingsPage = () => {
    return <>
        <div className="grid grid-cols-5 grid-rows-8 w-full h-full p-5 pt-0 gap-5">
            <div className="row-span-4 rounded-xl bg-white p-5 flex flex-col gap-2">
                <img src="/public/logo/logo1.jpg" className="rounded-xl aspect-square object-cover" />
                <Button className="py-1 text-sm">Byt profil bild</Button>
                <div className="my-auto">
                    
                    <div className="text-center">Johan Anders</div>
                    <div className="text-center">johan.anders@region.se</div>
                    <div className="text-center">Värmlands central sjukhuset </div>
                </div>
            </div>
            <div className="row-span-3 rounded-xl bg-white"></div>
            <div className="row-span-8 col-span-3 rounded-xl bg-white"></div>
            <div className="row-span-5 rounded-xl bg-white"></div>
            <div className="row-span-4 rounded-xl bg-white"></div>
        </div>
    </>
};

export default SettingsPage;