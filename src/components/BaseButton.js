import React from "react";

interface ButtonProps {
    type: 'button' | 'link',
    label: string,
    showDot: boolean,
    link?: string
}
const BaseButton :React.FC<ButtonProps> = ({ type, label, showDot, link }) => {
    const ButtonComponent = type === 'link' ? 'a' : 'button';
    return (
        <ButtonComponent
            type={type}
            href={link?.length ? link : null}
            target={link?.length ? '_blank' : null}
            className="flex items-center group font-medium text-sm overflow-hidden rounded-[25px] px-4 h-[45px] bg-soft-black text-inverted-soft-black uppercase"
        >
            {showDot && <div className="size-[5px] bg-inverted-soft-black mr-2.5 rounded-full"></div>}
            <span className="flex flex-col gap-3 h-[2cap] overflow-y-clip relative">
                <span className="translate-y-[0%] group-hover:-translate-y-full transition duration-300">{label}</span>
                <span className="translate-y-full group-hover:translate-y-[0%] transition duration-300 absolute top-0 left-0">{label}</span>
            </span>
        </ButtonComponent>
    )
}

export default BaseButton;
