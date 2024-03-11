import React, {useCallback, useEffect, useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {TbWorld} from "react-icons/tb";
import {IoIosArrowDown} from "react-icons/io";
import {countryFlags} from "@/constants/country-flag";
import Image from "next/image";

interface CountrySelectionProps {
    type: string;
    label: string;
    items: any;
    isOpen: boolean;
    onChange: (value: string) => void;
}

const CountrySelection = ({type,label,items,isOpen,onChange}: CountrySelectionProps) => {
    const [showDropDown, setShowDropDown] = useState(isOpen)
    const [cValue, setCValue] = useState(label);
    const [currencySymbol, setCurrencySymbol] = useState('€');
    const checkSymbol = () => {
        if(cValue === 'Euro') {
            setCurrencySymbol('€');
        } else if (cValue === 'Dollar') {
            setCurrencySymbol('$');
        } else if (cValue === 'Lira') {
            setCurrencySymbol('₺');
        } else if (cValue === 'Pound') {
            setCurrencySymbol('£');
        }
    }

    const countryFlag = (country_com: string) => {
        let countryFlag = ''
        countryFlags.map(({country, flag, code}) => {
            if(country_com) {
                if(country === country_com) {
                    countryFlag = flag
                }
            } else {
                if(country === cValue) {
                    countryFlag = flag
                }
            }
        })

        return countryFlag;
    }

    const onAdd = useCallback(() => {
        onChange(cValue);
    }, [onChange,cValue]);

    useEffect(() => {
        setShowDropDown(isOpen);
        onAdd()
        checkSymbol()
    }, [isOpen,cValue]);

    return (
        <div>
            <DropdownMenu open={showDropDown} onOpenChange={setShowDropDown}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        {(type === 'language') ? <TbWorld className="mr-2" /> : ''}
                        {(type === 'currency') ? `${currencySymbol} ` : ''}
                        {(type === 'country') ? <div className="w-3.5 h-3.5 mr-2 relative"><Image src={countryFlag(cValue)} alt="image" fill object-fit="contain" className="rounded-md"/></div> : ''}
                        {cValue}
                        <IoIosArrowDown className={`transition duration-300 ml-2 ${(showDropDown) ? '-rotate-180' : 'rotate-0'}`} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuRadioGroup value={cValue} onValueChange={setCValue}>
                        {
                            items.map((item: any) => (
                                <DropdownMenuRadioItem key={item.title} value={item.title}>
                                    {(item?.code) ? <div className="w-3.5 h-3.5 mr-2 relative"><Image src={countryFlag(item.title)} alt="image" fill object-fit="contain" className="rounded-md"/></div>: ''}
                                    {(item?.symbol)} &nbsp;
                                    {item.title}
                                </DropdownMenuRadioItem>
                            ))
                        }
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default CountrySelection;