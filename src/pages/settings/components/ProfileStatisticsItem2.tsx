import react from "react"

type ProfileStatisticsItem2Props = {
    title: string;
    value: number;
}
const ProfileStatisticsItem2 = ({title, value}: ProfileStatisticsItem2Props) => {
    return <div className="flex items-center gap-2">
        <div className="text-sm font-bold">{title}</div> 
        <div className="text-[#B6C2E1] text-sm">{value}</div>
        <div className="flex-1"></div>
        <div>&gt;</div>
    </div>
};

export default ProfileStatisticsItem2;