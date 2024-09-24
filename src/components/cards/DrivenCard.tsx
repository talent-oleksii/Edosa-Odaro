import React, { FC } from "react";
import DefaultButton from "../buttons/DefaultButton";
interface DrivenCardProps {
    header: string;
    content: string;
    buttonName: string;
    buttonColor: string;
    cardColor: string;
    imgUrl?: string;
}

const DrivenCard: FC<DrivenCardProps> = ({
    header,
    content,
    buttonName,
    buttonColor,
    cardColor,
    imgUrl,
}: DrivenCardProps) => {
    return (
        <div className={`bg-[${cardColor}] card col-span-2 flex flex-col shadow-md gap-3 rounded-xl`}>
            <DefaultButton className={`bg-[${buttonColor}] mt-11 ml-11 max-w-24`}>{buttonName}</DefaultButton>
            <div className="leading-8 text-3xl font-bold mt-16 ml-11">
                {header}
            </div>
            <div className="leading-6 text-lg mt-4 ml-11 text-text-color">
                {content}
            </div>
        </div>
    );
}

export default DrivenCard;