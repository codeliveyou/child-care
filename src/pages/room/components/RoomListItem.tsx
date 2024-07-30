import react from "react"
import { colors } from "../../../constants/colors";

type RoomListItemProps = {
    title: string,
    createdAt: string,
    logoUrl: string,
    activity: string,
    pending?: number,
}
const RoomListItem = ({ title, pending, createdAt, activity, logoUrl }: RoomListItemProps) => {
    return (
        <div className="flex gap-2">
            <div className="rounded-xl overflow-hidden"><img src={logoUrl} className="w-[120px] h-[90px]"/></div>

            <div className="flex flex-col flex-1 py-2">
                <div className="text-xl font-bold">{title}</div>
                <div className="flex-1"></div>
                <div className="text-[#B6C2E1] text-sm">{activity} </div>
                <div className="text-[#B6C2E1] text-sm">Skapades rapport {createdAt} </div>
            </div>
            <div className="flex flex-col items-center justify-between py-3">
                <div className="text-[#B6C2E1] text-sm">{createdAt}</div>
                {pending ? (
                    <div className="rounded-full w-6 h-6 text-white text-center flex items-center justify-center" style={{backgroundColor: colors.blue}}><p>{pending}</p></div>
                ) : (
                    <button className="bg-[#E9E9F3] p-1 rounded"><img src="/Message.svg" /></button>
                )}
            </div>
        </div>
    )
}

export default RoomListItem;