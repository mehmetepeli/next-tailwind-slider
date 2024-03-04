"use client";

import {IconType} from "react-icons";

interface CategoryBoxProps {
    icon?: IconType;
    label?: string;
}

const CategoryBox = ({icon: Icon, label}: CategoryBoxProps) => {
    return (
        <li key={label} className="w-fit mr-6 flex flex-col items-center text-gray-500 transition duration-500 hover:text-black hover:cursor-pointer">
            { Icon && (
                <Icon size={24}/>
            ) }
            <p className="text-sm">{label}</p>
        </li>

    );
};

export default CategoryBox;