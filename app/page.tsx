"use client";

import Categories from "@/app/components/categories";
import {useEffect, useState} from "react";

import {TbBeach, TbMountain, TbPool} from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill
} from "react-icons/gi";
import {MdOutlineVilla} from "react-icons/md";
import {FaSkiing} from "react-icons/fa";
import {BsSnow} from "react-icons/bs";
import {IoDiamond} from "react-icons/io5";
import Slider from "@/app/components/slider";

const Home = () => {
  const categories = [
    {
      label: 'Beach',
      icon: TbBeach,
      description: 'This property is close to the beach!',
    },
    {
      label: 'Windmills',
      icon: GiWindmill,
      description: 'This property is has windmills!',
    },
    {
      label: 'Modern',
      icon: MdOutlineVilla,
      description: 'This property is modern!'
    },
    {
      label: 'Countryside',
      icon: TbMountain,
      description: 'This property is in the countryside!'
    },
    {
      label: 'Pools',
      icon: TbPool,
      description: 'This is property has a beautiful pool!'
    },
    {
      label: 'Islands',
      icon: GiIsland,
      description: 'This property is on an island!'
    },
    {
      label: 'Lake',
      icon: GiBoatFishing,
      description: 'This property is near a lake!'
    },
    {
      label: 'Skiing',
      icon: FaSkiing,
      description: 'This property has skiing activies!'
    },
    {
      label: 'Castles',
      icon: GiCastle,
      description: 'This property is an ancient castle!'
    },
    {
      label: 'Caves',
      icon: GiCaveEntrance,
      description: 'This property is in a spooky cave!'
    },
    {
      label: 'Camping',
      icon: GiForestCamp,
      description: 'This property offers camping activities!'
    },
    {
      label: 'Arctic',
      icon: BsSnow,
      description: 'This property is in arctic environment!'
    },
    {
      label: 'Desert',
      icon: GiCactus,
      description: 'This property is in the desert!'
    },
    {
      label: 'Barns',
      icon: GiBarn,
      description: 'This property is in a barn!'
    },
    {
      label: 'Lux',
      icon: IoDiamond,
      description: 'This property is brand new and luxurious!'
    }
  ];
  const [xPos, setXpos] = useState(0);
  const [styled, setStyled] = useState({transform: `translateX(${xPos}px)`});
  const [maxWidth, setMaxWidth] = useState(0);

  const onBack =  () => {
    if(xPos !== 0) {
      setXpos(x => x + 88)
    }
    setStyled({transform: `translateX(${xPos}px)`});
    return true;
  }

  const onNext =  () => {
    if(xPos !== maxWidth && xPos <= maxWidth) {
      setXpos(x => x - 88)
    }
    setStyled({transform: `translateX(${xPos}px)`});
    return true;
  }

  useEffect(() => {
    const sliderBox = document.querySelector("#category_slider");
    const sliderCount = categories.length;
    let sliderBoxWidth = 0;

    if (sliderBox) {
      sliderBoxWidth = sliderBox.clientWidth;
      const sliderVisibleItem = Math.round(sliderBoxWidth / 88);
      setMaxWidth((sliderCount - sliderVisibleItem) * 88);
    }
  }, [onBack,onNext]);

  return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
        <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative w-[1200px] bg-white pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 xl:w-xl lg:w-lg md:w-md sm:mx-auto sm:w-sm sm:rounded-lg">
          <div className="mx-auto w-full">
            <div className="flex w-full flex-row items-center justify-between px-2 border-b-2 border-slate-100 pb-8">
              <img src="https://play.tailwindcss.com/img/logo.svg" className="h-6 hover:cursor-pointer" alt="Tailwind Play" />
              <div className="flex min-w-52 justify-between text-sm">
                <button className="flex w-auto flex-row items-center rounded-full border-2 border-black bg-black px-4 py-2 text-white transition duration-500 hover:border-2 hover:border-black hover:bg-white hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                  Register
                </button>
                <button className="flex w-auto flex-row items-center rounded-full border-2 border-slate-200 bg-slate-200 px-4 py-2 transition duration-500 hover:border-2 hover:border-black hover:bg-white hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                  </svg>

                  Login
                </button>
              </div>
            </div>
            <div id="category_slider" className="relative flex w-full flex-row overflow-hidden py-4 pt-8 mb-8">
              <Categories style={styled} categories={categories} nextBtn={() => onNext()} backBtn={() => onBack()} position={xPos} maxWidth={maxWidth} />
            </div>
            <Slider/>
            <div className="w-full h-[400px] bg-green-900">

            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;