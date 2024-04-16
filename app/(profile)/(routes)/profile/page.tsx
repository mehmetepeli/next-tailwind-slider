"use client";

import ProfileImg from "@/components/profile/profile-img";
import {GrLocation} from "react-icons/gr";
import {MdOutlineEmail, MdWorkOutline} from "react-icons/md";
import {LuPhone, LuSettings} from "react-icons/lu";
import {TbCloudUpload} from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineLike, AiOutlineQuestion, AiOutlineQuestionCircle} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";
import {GoPaperAirplane} from "react-icons/go";

const ProfilePage = () => {
    return (
        <div className="h-full">
            <div className="w-full h-32 mb-8 flex flex-row rounded-lg relative bg-gradient-to-r from-[#225243] to-[#008359] overflow-hidden">
                <div className="w-[70%] flex flex-col px-4 py-6">
                    <h3 className="mb-2 text-white font-bold">Please Confirm Your Email</h3>
                    <p className="text-white text-sm">
                        To unlock full access to our platform, please confirm your email. If you haven't done
                        so already, you can request another confirmation email by clicking the button to the right.
                    </p>
                </div>
                <Image src="/big-email-icon.png" width="180" height="180" alt="Icon" className="absolute -top-8 right-0 opacity-10 -rotate-45"/>
                <div className="w-[30%] h-full flex justify-center items-center z-10">
                    <Link href="/profile" className="w-auto h-fit px-6 py-2 text-sm rounded-lg shadow-lg bg-white">Resend Confirmation Link</Link>
                </div>
            </div>
            <div className="w-full h-auto px-4 py-6 flex flex-row rounded-lg border-[1px] border-[#eceeed] bg-[#fbfbfb]">
                <ProfileImg src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <div className="w-[calc(100%_-_6rem)] h-auto flex flex-row">
                    <div className="w-[40%] flex flex-col">
                        <h3 className="w-full mb-2 text-xl font-bold">Steven Jobs</h3>
                        <div className="w-full flex flex-col text-sm">
                            <p className="w-full flex flex-row items-center mb-2"><span className="mr-2"><MdWorkOutline/></span> <span>Business</span></p>
                            <p className="w-full flex flex-row items-center"><span className="mr-2"><GrLocation/></span> <span>Rotterdam, Netherlands</span></p>
                        </div>
                    </div>
                    <div className="w-[60%] flex items-center">
                        <div className="w-full flex flex-col text-sm">
                            <p className="w-full flex flex-row items-center mb-2"><span className="mr-2"><MdOutlineEmail/></span> <span>ceo@apple.com</span></p>
                            <p className="w-full flex flex-row items-center mb-2"><span className="mr-2"><GrLocation/></span> <span>92 Miles Drive, Newark, NJ 07103, California,
United States of America </span></p>
                            <p className="w-full flex flex-row items-center"><span className="mr-2"><LuPhone/></span> <span>+31685987987</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto px-4 py-6 my-8 flex flex-col rounded-lg border-[1px] border-[#eceeed] bg-[#fbfbfb]">
                <h3 className="w-full pb-4 px-2 mb-6 flex flex-row items-center text-md font-medium border-b-[1px] border-[#eceeed]">
                    <GoPaperAirplane/>
                    <span className="ml-3">Requests</span>
                </h3>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="text-left text-sm">Song</th>
                            <th className="text-left text-sm">Service</th>
                            <th className="text-left text-sm">Offers</th>
                            <th className="text-left text-sm">Status</th>
                            <th className="text-left text-sm">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>10</td>
                            <td>Waiting</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>5</td>
                            <td>Send</td>
                            <td>Waiting</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1</td>
                            <td>Waiting</td>
                            <td>Reject</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="w-full h-auto flex flex-row">
                <div className="w-2/4 h-auto px-4 py-6 mr-8 rounded-lg border-[1px] border-[#eceeed] bg-[#fbfbfb]">
                    <h4 className="w-full pb-2 px-2 mb-6 flex flex-row items-center text-md font-medium border-b-[1px] border-[#eceeed]">
                        <LuSettings/>
                        <span className="ml-3">General</span>
                    </h4>
                    <ul className="w-full flex flex-col text-sm font-medium">
                        <li className="mb-2"><Link href="/profile" className="w-full flex flex-row items-center"><AiOutlineLike/> <span className="ml-3">Leave feedback</span></Link></li>
                        <li className="mb-2"><Link href="/profile" className="w-full flex flex-row items-center"><AiOutlineQuestionCircle/> <span className="ml-3">FAQ</span></Link></li>
                        <li><Link href="/profile" className="w-full flex flex-row items-center"><BiSupport/> <span className="ml-3">Contact Support</span></Link></li>
                    </ul>
                </div>
                <div className="w-2/4 h-auto px-4 py-6 rounded-lg border-[1px] border-[#eceeed] bg-[#fbfbfb]">
                    <h4 className="w-full pb-2 px-2 mb-6 flex flex-row items-center text-md font-medium border-b-[1px] border-[#eceeed]">
                        <LuSettings/>
                        <span className="ml-3">General</span>
                    </h4>
                    <ul className="w-full flex flex-col text-sm font-medium">
                        <li className="mb-2"><Link href="/profile" className="w-full flex flex-row items-center"><AiOutlineLike/> <span className="ml-3">Make Available</span></Link></li>
                        <li className="mb-2"><Link href="/profile" className="w-full flex flex-row items-center"><AiOutlineLike/> <span className="ml-3">Languages / English - Bulgarian - Dutch</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;