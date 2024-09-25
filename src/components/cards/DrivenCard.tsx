import React, { FC } from "react";
import DefaultButton from "../buttons/DefaultButton";
interface DrivenCardProps {
    header: string;
    content: string;
    buttonName: string;
    buttonColor: string;
    cardColor: string;
    imgUrl?: string;
    linkUrl?: string;
}

const DrivenCard: FC<DrivenCardProps> = ({
    header,
    content,
    buttonName,
    buttonColor,
    cardColor,
    imgUrl,
    linkUrl,
}: DrivenCardProps) => {
    return (
        <div style={{ backgroundColor: cardColor, backgroundImage: imgUrl, backgroundPositionX: "85%" }} className={`min-h-[350px] bg-no-repeat bg-contain card flex flex-col shadow-md gap-3 rounded-xl`}>
            <DefaultButton buttonColor={buttonColor} className={` mt-11 ml-11 max-w-24`}>{buttonName}</DefaultButton>
            <div className="leading-8 text-3xl font-bold mt-16 ml-11">
                {header}
            </div>
            <div className="leading-6 text-lg mt-4 ml-11 text-text-color" dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="flex justify-end pr-8">
                <img src={linkUrl} className="w-8 h-8" />
            </div>
        </div>
    );
}

export default DrivenCard;