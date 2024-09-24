import React, { FC } from "react";

interface DefaultButtonProps {
    children: any;
    className?: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({ children, className }: DefaultButtonProps) => {
    return <div className={`${className} bg-[#475467] rounded-full text-[20px] font-[Inter] bold text-white text-center py-1 px-6`}>{children}</div>
}

export default DefaultButton;