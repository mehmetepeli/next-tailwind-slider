"use client";

import SideMenuLink from "@/components/profile/side-menu-link";

interface SideMenuProps {
    links: any[],
}

const SideMenu = ({links}: SideMenuProps) => {
    return (
        <div className="w-2/12 mr-8 p-2">
            <ul className="w-full flex flex-col">
                {
                    links.map(({icon, title, slug, notification}) => (
                        <SideMenuLink key={slug} title={title} slug={slug} icon={icon} notification={notification}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default SideMenu;