"use client";

import Image from "next/image";
import {TbCloudUpload} from "react-icons/tb";

interface ProfileImgProps {
    src: string,
}

const ProfileImg = ({src}: ProfileImgProps) => {
    return (
        <div className="w-24 h-24 mr-4 rounded-full relative overflow-hidden">
          <Image src={src} fill objectFit="cover" alt="Profile Picture" className="rounded-full"/>
          <p className="w-full h-8 flex justify-center pt-1 bg-gray-50 bg-opacity-50 absolute -bottom-2 right-0 cursor-pointer"><TbCloudUpload/></p>
        </div>
    );
};

export default ProfileImg;