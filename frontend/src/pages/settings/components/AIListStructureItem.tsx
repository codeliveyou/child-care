import react from "react"
import { colors } from "../../../constants/colors";

type AIListStructureItem = {
    title: string;
    content: string;
    keywords: string[];
}
const AIListStructureItem = ({title, content, keywords}: AIListStructureItem) => {
    return <div className="bg-[#E9E9F3] rounded-lg border border-[#B6C2E1] flex flex-col p-5 gap-5 relative">
        <button className="absolute top-5 right-5 font-bold" style={{color: colors.blue}}>X</button>
        <div className="font-bold">{title}</div>
        <div>{content}</div>
        <div className="font-bold">Nyckelord:</div>
        <div className="flex flex-wrap gap-2">
            {
                keywords.map(keyword => {
                    return <div className="bg-white rounded px-2 py-1 text-sm font-medium">
                        {keyword}
                    </div>
                })
            }
        </div>
    </div>
};

export default AIListStructureItem;