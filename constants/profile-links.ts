import {FaRegUserCircle} from "react-icons/fa";
import {PiCampfireBold, PiHandHeartBold, PiSignOutBold} from "react-icons/pi";
import {FaPeopleGroup} from "react-icons/fa6";
import {LuPartyPopper, LuSettings} from "react-icons/lu";
import {BsWindowDesktop} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5";

export const sideLinks = [
    {
        title: 'Profile',
        slug: '/profile',
        icon: FaRegUserCircle,
    },
    {
        title: 'Feeds',
        slug: '/feeds',
        icon: BsWindowDesktop,
    },
    {
        title: 'Event',
        slug: '/event',
        icon: LuPartyPopper,
        notification: 9,
    },
    {
        title: 'Charity',
        slug: '/charity',
        icon: PiHandHeartBold,
    },
    {
        title: 'Friends',
        slug: '/friends',
        icon: FaPeopleGroup,
    },
    {
        title: 'Community',
        slug: '/community',
        icon: PiCampfireBold,
    },
    {
        title: 'Statistics',
        slug: '/statistics',
        icon: IoStatsChartSharp,
    },
    {
        title: 'Settings',
        slug: '/settings',
        icon: LuSettings,
        notification: 9,
    },
    {
        title: 'Sign out',
        slug: '/sign-out',
        icon: PiSignOutBold,
    }
];