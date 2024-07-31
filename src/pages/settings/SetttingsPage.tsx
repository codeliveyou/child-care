import react from "react"
import Button from "../globalcomponents/Button";
import { colors } from "../../constants/colors";
import ProfileStatisticsItem1 from "./components/ProfileStatisticsItem1";
import ProfileStatisticsItem2 from "./components/ProfileStatisticsItem2";
import Input from "../globalcomponents/Input";
import AIListStructureItem from "./components/AIListStructureItem";

const SettingsPage = () => {
    return <>
        <div className="flex p-5 pt-0 gap-5 w-full h-full text-[#374151]">
            <div className="flex flex-col gap-5 basis-64">
                <div className="bg-white rounded-xl flex-1 flex flex-col gap-2 p-5">
                    <img src="/public/logo/logo1.jpg" className="rounded-xl aspect-square object-cover" />
                    <Button className="py-1 text-sm">Byt profil bild</Button>
                    <div className="my-auto">

                        <div className="text-center text-lg font-bold" style={{color: colors.blue}}>Johan Anders</div>
                        <div className="text-center text-[#B6C2E1] text-xs">johan.anders@region.se</div>
                        <div className="text-center text-sm">Värmlands central sjukhuset </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex-1 p-5 flex flex-col gap-2">
                    <div className="text-xl font-bold">Profil statistik</div>
                    <div className="text-xs text-[#B6C2E1]">List, separated by commas, all the words for which you can choose the right answer.</div>
                    <div className="flex flex-col">
                        <ProfileStatisticsItem1 title="Dokumentet" percentage={40} capacity="3Gb" />
                        <ProfileStatisticsItem1 title="Video" percentage={20} capacity="3Gb" />
                        <ProfileStatisticsItem1 title="Meddelande" percentage={60} capacity="3Gb" />
                        <ProfileStatisticsItem1 title="Kalendar" percentage={90} capacity="3Gb" />
                    </div>
                    <div className="flex flex-col gap-3 pt-2">
                        <ProfileStatisticsItem2 title="Patienter " value={34} />
                        <ProfileStatisticsItem2 title="Gäst / Deltagare" value={12} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 flex-1">
                <div className="bg-white rounded-xl flex-[3] p-5 flex flex-col gap-3">
                    <div className="font-bold text-xl">AI inställningar</div>
                    <div className="flex-1 flex flex-col justify-center gap-2">
                        <div className="font-bold">AI-svars mönster</div>
                        <Input placeholder="Skriv ett svar" className="py-2" />
                        <Input placeholder="Skriv nyckelord " className="py-2" />
                    </div>
                    <div className="text-[#B6C2E1] text-xs">List, separated by commas, all the words for which you can choose the right answer.</div>
                    <div><Button className="py-1">lägg till mönster</Button></div>
                </div>
                <div className="bg-white rounded-xl flex-[5] flex flex-col gap-3 p-5">
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-xl">Profil inställningar </div>
                        <Input value="Johan Anders" className="py-2" />
                        <Input value="johan.anders@region.se " className="py-2" />
                        <Input value="Värmlands central sjukhuset  " className="py-2" />
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-xl">Lösenord</div>
                        <Input value="Nuvarande lösenord" className="py-2" />
                        <Input value="Nytt lösenord" className="py-2" />
                        <Input value="Upprepa lösenord  " className="py-2" />
                    </div>
                    <div><Button className="float-right py-2">Ändra lösenord</Button></div>
                </div>
            </div>
            <div className="flex flex-col gap-5 flex-[3] bg-white rounded-xl p-5 pr-0">
                <div className="font-bold text-xl">AI struktur list </div>
                <div className="grid grid-cols-2 gap-5 overflow-y-auto pr-5">
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                    <AIListStructureItem title="Fråga om huvudverk " content="Jag kan kontakta läkare och han kan hjälpa dig" keywords={["Dricka", "Krossa", "Naked", "Violence", "Adults", "Stress", "Voltage"]} />
                </div>
            </div>
        </div>
    </>
};

export default SettingsPage;