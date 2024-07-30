import react from "react"
import { colors } from "../../../constants/colors";

type EventListItemProps = {
    title: string,
    content: string,
    date: string,
}
const EventListItem = ({title, content, date}: EventListItemProps) => {
    return <>
        <div className="flex flex-col gap-2">
            <div style={{color: colors.blue}} className="text-lg font-semibold">{title}</div>
            <div>{content}</div>
            <div style={{color: colors.textBlack, opacity: 0.5}}>{date}</div>
        </div>
    </>
};

export default EventListItem;