import React from "react";
import DocSVG from "../../../assets/FileIcon/doc.svg?react";
import Mp4SVG from "../../../assets/FileIcon/mp4.svg?react";
import PdfSVG from "../../../assets/FileIcon/pdf.svg?react";
import XslSVG from "../../../assets/FileIcon/xsl.svg?react";

type FileItem2Props = {
    name: string;
    type: "doc" | "pdf" | "xsl" | "mp4";
};

const FileItem2 = ({ name, type }: FileItem2Props) => {
    let FileIcon;

    // Determine the appropriate SVG icon based on the type prop
    if (type === "doc") FileIcon = <DocSVG />;
    if (type === "mp4") FileIcon = <Mp4SVG />;
    if (type === "pdf") FileIcon = <PdfSVG />;
    if (type === "xsl") FileIcon = <XslSVG />;

    return (
        <div className="flex flex-col items-center w-32 gap-2 py-2">
            {FileIcon}
            <div className="text-sm font-bold text-center">{name}</div>
        </div>
    );
};

export default FileItem2;