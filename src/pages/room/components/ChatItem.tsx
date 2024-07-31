import React from 'react';

type ChatItemProps = {
    name: string;
    content: string;
    avatarUrl: string;
    alignment: 'left' | 'right';
};

const ChatItem = ({ name, content, avatarUrl, alignment }: ChatItemProps) => {
    const isLeftAligned = alignment === 'left';

    return (
        <div className={`flex gap-2 ${isLeftAligned ? '' : 'flex-row-reverse'}`}>
            <div className="flex-none w-12 h-12">
                <img
                    src={avatarUrl}
                    alt={`${name}'s avatar`}
                    className="rounded-lg overflow-hidden w-full h-full object-cover"
                />
            </div>
            <div className={`flex flex-col gap-2 ${isLeftAligned ? '' : 'items-end'}`}>
                <div className={`font-bold ${isLeftAligned ? '' : 'text-right'}`}>
                    {name}
                </div>
                <div
                    className={`rounded-lg p-2 text-sm text-[#374151] ${
                        isLeftAligned ? 'bg-[#E9E9F3] mr-10' : 'bg-[#DBF6D4] ml-10'
                    }`}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
