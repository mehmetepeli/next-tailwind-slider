"use client";

import CategoryBox from "@/app/components/category-box";

interface CategoriesProps {
    style: object;
    categories: any;
}

const Categories = ({style,categories}: CategoriesProps) => {
    return (
        <ul id="category-slider" className="flex flex-row transition duration-300" style={style}>
        {
            categories.map((item:any) => (
                <CategoryBox key={item.label} icon={item.icon} label={item.label}/>
            ))
        }
        </ul>
    );
}

export default Categories;