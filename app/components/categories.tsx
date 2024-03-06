"use client";

import CategoryBox from "@/app/components/category-box";
import {useState} from "react";
import Btn from "@/app/components/btn";

interface CategoriesProps {
    style: any;
    categories: any;
    nextBtn: () => void;
    backBtn: () => void;
    position: number;
    maxWidth: number;
}

const Categories = ({style, nextBtn, backBtn, categories, position, maxWidth}: CategoriesProps) => {
    const newStyle = {transform: `translateX(${position}px)`}

    return (
        <>
            <div className="absolute flex h-[45px] w-full flex-row items-center justify-between">
                <Btn direction="left" onClick={backBtn} position={position} maxWidth={maxWidth} />
                <Btn direction="right" onClick={nextBtn} position={position} maxWidth={maxWidth} />
            </div>
            <ul className="flex flex-row transition duration-300" style={newStyle}>
                {
                    categories.map((item:any) => (
                        <CategoryBox key={item.label} icon={item.icon} label={item.label}/>
                    ))
                }
            </ul>
        </>
    );
}

export default Categories;