"use client";

import {IconType} from "react-icons";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Badge} from "@/components/ui/badge";
import React from "react";

interface SideMenuLinkProps {
    title: string,
    slug: string,
    icon?: IconType,
    notification?: number,
}

const SideMenuLink = ({title, slug, icon: Icon, notification}: SideMenuLinkProps) => {
    const pathname = usePathname();

    return (
        <li key={slug} className={`${(pathname === slug) ? 'activeProfileLink' : '' } mb - 2 px-2.5 py-3`}>
            <Link href={slug} className="w-full flex flex-row items-center relative">
                { Icon && (
                    <Icon size={16}/>
                ) } <span className="ml-4">{title}</span>
                { notification && notification > 0 && (
                    <Badge className="absolute top-0 right-0 z-10" variant={"destructive"}>
                        <small>{notification} { (notification >= 9) ? '+' : ''}</small>
                    </Badge>
                ) }
            </Link>
        </li>
    );
};

export default SideMenuLink;