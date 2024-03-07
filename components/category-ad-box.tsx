import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface CategoryAdBoxProps {
    image: string;
    label: string;
    link: string;
}

const CategoryAdBox = ({image,label,link}: CategoryAdBoxProps) => {
    return (
        <div className="shadow-xl rounded-md bg-white p-2 group">
            <Link href={link}>
                <div className="w-full h-36 relative overflow-hidden">
                    <Image src={image} alt={label} layout='fill' objectFit="cover" className="rounded-md"/>
                    <div className="
                    w-full
                    h-full
                    bg-stone-800
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
                    rounded-md
                    group-hover:bg-opacity-0
                    group-hover:-translate-y-2
                ">{label}</div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryAdBox;