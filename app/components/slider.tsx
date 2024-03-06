"use client";

import Image from "next/image";
import SearchBox from "@/app/components/search-box";

const Slider = () => {
    return (
        <div className="w-full h-80 min-h-[400px] flex relative">
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="w-full h-full relative flex justify-between items-center">
                <div className="w-3/5 flex flex-col pl-4">
                    <h1 className="w-full text-2xl font-bold">Easiest way to find your partner and more quick!</h1>
                    <h2 className="w-full font-light text-neutral-600 mt-2 mb-8">Easiest way to find your partner and more quick!</h2>
                    <SearchBox/>
                </div>
                <div className="w-[600px] h-[400px] absolute bottom-0 right-0">
                    <Image src="/woman.png" alt="woman" layout='fill' objectFit='contain'/>
                </div>
            </div>
        </div>
    );
}

export default Slider;