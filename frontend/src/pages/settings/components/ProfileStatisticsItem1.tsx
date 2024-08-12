import react from "react"
import ProgressBar from "../../globalcomponents/ProgressBar"

type ProfileStatisticsItem1Props = {
    title: string,
    percentage: number,
    capacity: string,
}
const ProfileStatisticsItem1 = ({title, percentage, capacity}: ProfileStatisticsItem1Props) => {
    return <>
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <div className="font-semibold text-sm">{title}</div>
                <div>&gt;</div>
            </div>
            <div className="flex items-center gap-3">
                <ProgressBar value={percentage} className="h-1" />
                <div>{capacity}</div>
            </div>
        </div>
    </>
}

export default ProfileStatisticsItem1;