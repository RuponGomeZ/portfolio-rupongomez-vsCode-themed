"use client"
import React, { useEffect, useState } from 'react'
// import { tabs } from './tabs'
import { FaFileCode } from "react-icons/fa";
import { BiSolidFileCss, BiSolidFileJs } from "react-icons/bi";
import { LuFileJson, LuFileTerminal } from "react-icons/lu";
import { BsFiletypeJsx } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from 'lucide-react';

export default function TabsControl({ existedTab, setExistedTab }) {
    const router = useRouter()

    const pathName = usePathname()

    const handleTabClose = async (route) => {
        const currentTab = pathName
        let newTab;
        const updatedTab = existedTab.filter(tab => tab.route !== route)
        if (currentTab === route) {
            router.push("/")
            newTab = updatedTab
        } else {
            newTab = updatedTab
        }
        console.log(newTab, "from tabcontrol");
        setExistedTab(newTab)
    }

    return (
        <div className=' top-[43px] z-50 m-0  background-image '>
            <div className='absolute flex bg-base-200 '>
                {existedTab.map((tab, i) => {
                    const Icon = tab?.icon
                    return (
                        <div key={tab.route || i} className='relative'>
                            <Link
                                href={tab.route}
                                className={`${pathName === tab?.route ? "border-t-2 border-t-blue-600 " : " bg-slate-800/80 text-neutral-200"} border-r-[1px] bg-base-200   border-r-neutral-500 w-fit h-9 bg-transparent pl-4 py-0
                                 pr-6 text-sm italic flex `}>
                                <div className='flex items-center '>
                                    <Icon className={`${tab?.iconClass} mr-1`} />
                                    <button className='italic '>{tab.name}</button>
                                </div>
                            </Link>
                            <button
                                onClick={() => handleTabClose(tab.route)}
                                className='text-neutral-600 absolute top-[6px] right-2'>x</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
