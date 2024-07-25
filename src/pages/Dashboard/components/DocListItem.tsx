import react from "react"
import { colors } from "../../../constants/colors";

type DocListItemProps = {
    title: string,
    createdAt: string,
    filetype: "doc" | "pdf",
}
const DocListItem = ({ title, createdAt, filetype }: DocListItemProps) => {
    return (
        <div className="flex gap-2 px-3">
            <div className="rounded-xl overflow-hidden"><img src={filetype === "doc" ? "/fileicon/doc.svg" : "/fileicon/pdf.svg"} width={50} /></div>

            <div className="flex flex-col py-2 flex-1">
                <div className="text-xl font-bold">{title}</div>
                <div className="flex-1"></div>
                <div className="text-[#B6C2E1] text-sm">Skapades rapport {createdAt} </div>
            </div>
        </div>
    )
}

export default DocListItem;