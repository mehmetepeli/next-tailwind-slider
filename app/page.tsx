"use client";

import Categories from "@/components/categories";
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
import Slider from "@/components/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import CategoryAdBox from "@/components/category-ad-box";

import CountrySelection from "@/components/footer/CountrySelection";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {ChevronDown} from "lucide-react";
import * as React from "react";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpSchema} from "@/lib/validation";
import {signUpForm} from "@/lib/types";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

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
  const [lang, setLang] = useState('Dutch');
  const [currency, setCurrency] = useState('Euro');
  const [selectedCountry, setSelectedCountry] = useState('Netherlands');
  const languages = [
    {
      id: 1,
      title: 'Dutch',
    },
    {
      id: 2,
      title: 'English',
    },
    {
      id: 3,
      title: 'Turkish',
    },
    {
      id: 4,
      title: 'German',
    },
  ]
  const currencies = [
    {
      id: 1,
      title: 'Euro',
      symbol: '€',
    },
    {
      id: 2,
      title: 'Dollar',
      symbol: '$',
    },
    {
      id: 3,
      title: 'Lira',
      symbol: '₺',
    },
    {
      id: 4,
      title: 'Pound',
      symbol: '£',
    },
  ]
  const countries = [
    {
      id: 1,
      title: 'Netherlands',
      code: 'nl',
    },
    {
      id: 2,
      title: 'United States',
      code: 'us',
    },
    {
      id: 3,
      title: 'Turkey',
      code: 'tr',
    },
    {
      id: 4,
      title: 'United Kingdom',
      code: 'uk',
    },
    {
      id: 5,
      title: 'Germany',
      code: 'de',
    }
  ]

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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

  const signUpSchemaTemplate = signUpSchema;

  type signUpType = signUpForm;

  //type 1
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchemaTemplate)
  });

  //type 2
  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchemaTemplate),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = async (data: signUpType) => {
    //do something
    console.log(signUpSchemaTemplate.safeParse(data))
  }

  const secondOnSubmit = async (values: signUpType) => {
    console.log("second hi")
  }

  const isLoading = isSubmitting

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
            <div className="w-full h-[200px] bg-green-900">
              ad
            </div>
            <div className="w-full h-auto my-6 px-4">
              <Tabs defaultValue="cities" className="w-full">
                <TabsList className="flex flex-row justify-between">
                  <div>
                    <TabsTrigger value="cities">Cities</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="messages">Messages</TabsTrigger>
                    <TabsTrigger value="requests">Requests</TabsTrigger>
                  </div>

                  <Link href="/">
                    <h1 className="py-2 px-4 rounded-full text-sm text-white bg-orange-600">View All</h1>
                  </Link>
                </TabsList>
                <TabsContent value="cities" className="grid gap-4 grid-cols-4 gap-x-4">
                  <CategoryAdBox label="Maldives" link="/city/maldives" image="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  <CategoryAdBox label="Los Angeles" link="/city/los-angeles" image="https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  <CategoryAdBox label="Barcelona" link="/city/barcelona" image="https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  <CategoryAdBox label="Istanbul" link="/city/istanbul" image="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
                <TabsContent value="profile">You can see profile details.</TabsContent>
                <TabsContent value="messages">Check your messages.</TabsContent>
                <TabsContent value="requests">Check your friend requests.</TabsContent>
              </Tabs>
            </div>
            <div className="w-full h-auto my-6 px-4 flex flex-row justify-end">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                  >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select framework..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                          <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                          >
                            {framework.label}
                            <CheckIcon
                                className={cn(
                                    "ml-auto h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                )}
                            />
                          </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="w-full h-auto px-4 mb-8">
              <Accordion type="single" collapsible className="w-full grid grid-cols-4 gap-4">
                <AccordionItem value="item-1" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Canyon</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/19210730/pexels-photo-19210730/free-photo-of-gorsa-bridge-en-norvege-vue-de-drone-chute-d-eau-montagne-pont.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Istanbul</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/14963976/pexels-photo-14963976/free-photo-of-boats-on-bay-istambul-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Rotterdam</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/11387333/pexels-photo-11387333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Barcelona</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/5282585/pexels-photo-5282585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Maldives</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Tokyo</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Los Angeles</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Rio de Janeiro</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Munich</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Paris</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/2738173/pexels-photo-2738173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Brussels</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/16922920/pexels-photo-16922920/free-photo-of-ornamented-tenements-in-brussels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12" className="mb-4">
                  <AccordionTrigger className="flex flex-row relative p-0 rounded-lg shadow-md">
                    <p className="w-full h-full flex items-center pl-4 absolute text-black">Moscow</p>
                    <div className="w-full h-full bg-gray-100 rounded-lg">
                      <div className="w-full h-20 header_test flex items-center rounded-lg text-black bg-cover bg-[url(https://images.pexels.com/photos/12369260/pexels-photo-12369260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center ">
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mt-2 bg-gray-100 rounded-b-lg p-4">
                    <ul className="w-full mt-2 grid grid-cols-2 gap-2">
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                      <li><Link href="/">City test</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-full h-auto my-6 px-4 flex flex-row justify-end">
              <div className="mr-4">
                <CountrySelection type="language" label={lang} items={languages} isOpen={false}  onChange={(value) => setLang(value)}/>
              </div>
              <div className="mr-4">
                <CountrySelection type="currency" label={currency} items={currencies} isOpen={false} onChange={(value) => setCurrency(value)}/>
              </div>
              <div>
                <CountrySelection type="country" label={selectedCountry} items={countries} isOpen={false} onChange={(value) => setSelectedCountry(value)}/>
              </div>
            </div>
            <div className="w-full h-auto px-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email" placeholder="E-Mail" disabled={isSubmitting}/>
                {errors.email && (<p>{`${errors.email.message}`}</p>)}
                <input {...register("password")} type="password" placeholder="Password"/>
                {errors.password && (<p>{`${errors.password.message}`}</p>)}
                <input {...register("confirmPassword")} type="password" placeholder="Confirm Password"/>
                {errors.confirmPassword && (<p>{`${errors.confirmPassword.message}`}</p>)}
                <button type="submit">send</button>
              </form>

              {/*<form onSubmit={form.handleSubmit(secondOnSubmit)}>*/}
              {/*  <input {...register("email")} type="email" placeholder="E-Mail"/>*/}
              {/*  {errors.email && (<p>{`${errors.email.message}`}</p>)}*/}
              {/*  <input {...register("password")} type="password" placeholder="Password"/>*/}
              {/*  {errors.password && (<p>{`${errors.password.message}`}</p>)}*/}
              {/*  <input {...register("confirmPassword")} type="password" placeholder="Confirm Password"/>*/}
              {/*  {errors.confirmPassword && (<p>{`${errors.confirmPassword.message}`}</p>)}*/}
              {/*  <button type="submit">send</button>*/}
              {/*</form>*/}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
