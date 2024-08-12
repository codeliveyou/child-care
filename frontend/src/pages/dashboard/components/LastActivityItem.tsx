import React from "react";

type LastActivityItemProps = {
    title: string,
    activity: string,
    createdAt: string,
    logoUrl: string,
}

const LastActivityItem = ({ title, activity, createdAt, logoUrl }: LastActivityItemProps) => {
    return (
        <div className="flex gap-2">
            {/* Display logo */}
            <div className="rounded-xl overflow-hidden"><img src={logoUrl} width={80} /></div>
            
            <div className="flex flex-col">
                {/* Display title */}
                <div className="text-xl font-bold">{title}</div>
                <div className="flex-1"></div>
                {/* Display activity and creation date */}
                <div className="text-[#B6C2E1] text-sm">{activity}</div>
                <div className="text-[#B6C2E1] text-sm">Skapades rapport {createdAt} </div>
            </div>
        </div>
    );
}

export default LastActivityItem;