"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const Slider = () => {
    return (
        <div className="w-full h-80 min-h-[400px] flex relative">
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="w-full h-full relative">
                <div className="w-[600px] h-[400px] absolute bottom-0 right-0">
                    <Image src="/woman.png" alt="woman" layout='fill' objectFit='contain'/>
                </div>

            </div>
        </div>
    );
}

export default Slider;