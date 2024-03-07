import React from 'react';
import Image from "next/image";

interface CategoryAdBoxProps {
    image: string;
    label: string;
}

const CategoryAdBox = ({image,label}: CategoryAdBoxProps) => {
    return (
        <div className="shadow-xl rounded-md bg-white p-2 group">
            <div className="w-full h-36 relative">
                <Image src={image} alt={label} layout='fill' objectFit="cover" className="rounded-md"/>
                <div className="
                    w-full
                    h-full
                    bg-slate-50
                    bg-opacity-30
                    absolute
                    flex
                    justify-center
                    items-center
                    font-bold
                    text-white
                    text-xl
                    transition
                    duration-300
                    group-hover:bg-opacity-0
                ">{label}</div>
            </div>
        </div>
    );
};

export default CategoryAdBox;