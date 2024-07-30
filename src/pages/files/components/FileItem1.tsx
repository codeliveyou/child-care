import react from "react"
import DocSVG from "../../../assets/FileIcon/doc.svg?react"
import Mp4SVG from "../../../assets/FileIcon/mp4.svg?react"
import PdfSVG from "../../../assets/FileIcon/pdf.svg?react"
import XslSVG from "../../../assets/FileIcon/xsl.svg?react"

type FileItem1Props = {
    name: string;
    size: string;
    type: "doc" | "pdf" | "xsl" | "mp4";
}
const FileItem1 = ({name, size, type}:FileItem1Props) => {
    let FileIcon;
    if(type === "doc") FileIcon = <DocSVG className="w-12" />
    if(type === "mp4") FileIcon = <Mp4SVG className="w-12" />
    if(type === "pdf") FileIcon = <PdfSVG className="w-12" />
    if(type === "xsl") FileIcon = <XslSVG className="w-12" />
    return <div className="flex items-center rounded-lg border border-[#E9E9F3] px-5 gap-2">
        {FileIcon}
        <div className="flex flex-col">
            <div className="text-sm font-bold">{name}</div>
            <div className="text-sm">{size}</div>
        </div>
    </div>
};

export default FileItem1;