"use client";

import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {BiDollar} from "react-icons/bi";
import {IconType} from "react-icons";

interface InputProps {
    id: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    placeholder: string;
    icon?: IconType;
    border?: boolean;
}

const Input = ({id,label,type="text",disabled,formatPrice,required,register,errors,placeholder,icon: Icon,border}: InputProps) => {
    return (
        <div className="w-full relative">
            {
                formatPrice && (<BiDollar size={24} className="text-neutral-700 absolute top-5 left-2" />)
            }
            {
                Icon && (<Icon size={24} className="text-neutral-700 absolute top-6 left-2" />)
            }
            <input
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder={placeholder}
                type={type}
                className={`
                    peer 
                    w-full
                    p-4
                    pt-6
                    pl-12
                    font-light
                    bg-white
                    border-2
                    rounded-full
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${Icon ? 'pl-9' : 'pl-4'}
                    ${border ? 'border-slate-600' : 'border-none'}
                    ${errors[id] ? 'border-red-600' : 'border-slate-600'}
                    ${errors[id] ? 'focus:border-red-600' : 'focus:border-slate-600'}
                `}
            />
            <label className={`
                absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                ${formatPrice ? 'left-9' : 'left-4'}
                ${Icon ? 'left-9' : 'left-4'}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? 'text-red-600' : 'text-zinc-400'}
            `}>
                {label}
            </label>
        </div>
    );
};

export default Input;