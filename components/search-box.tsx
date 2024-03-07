"use client";

import Input from "@/components/Input";
import {FieldValues, useForm} from "react-hook-form";
import {BiSearch} from "react-icons/bi";

const SearchBox = () => {
    const {register,handleSubmit,formState:{errors,}} = useForm<FieldValues>({
        defaultValues: {
            search: '',
        }
    });

    return (
        <div className="w-full h-[70px] flex flex-row justify-between items-center pr-1 rounded-full border-2 border-slate-600">
            <Input id="search" border={false} placeholder="Search" icon={BiSearch} register={register} errors={errors} required/>
            <button className="w-50 h-[60px] flex-row items-center rounded-full bg-orange-600 px-6 py-2 font-light text-white hover:cursor-pointer">
                Search
            </button>
        </div>
    );
};

export default SearchBox;