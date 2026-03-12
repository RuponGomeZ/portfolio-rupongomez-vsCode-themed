"use client"
import React, { useEffect, useState } from 'react'
import { IoBriefcase, IoBriefcaseOutline } from "react-icons/io5";
import { FaCode, FaFileAlt, FaFileImage, FaGraduationCap, FaTerminal } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdContactPage, MdHome, MdOutlineKeyboardArrowRight, MdSend, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { PiMonitorFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import Link from 'next/link';
import { BsFileEarmarkFontFill, BsFileEarmarkTextFill, BsFiletypeJsx } from "react-icons/bs";
import { LuFileJson, LuFileTerminal } from "react-icons/lu";
import { FaFileCode } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { BiSolidFileJs } from "react-icons/bi";
import { TbFileCv } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import { IoIosMailOpen } from 'react-icons/io';
import TabsControl from '../components/TabsControl';
import { tabs } from '../components/tabs';




export default function NavigationIcons() {
    const [displayFileNames, setDisplayFileNames] = useState(true)
    const [theme, setTheme] = useState("black")
    const [showExplorer, setShowExplorer] = useState(true)
    const [existedTab, setExistedTab] = useState(
        [{
            name: "Home.jsx",
            route: "/",
            icon: FaFileCode,
            iconClass: "text-blue-400",
        }]
    )

    const pathName = usePathname()

    useEffect(() => {
        const getTheme = localStorage.getItem("theme")
        if (getTheme) {
            document.querySelector("html").setAttribute("data-theme", getTheme)
        } else {
            document.querySelector("html").setAttribute("data-theme", theme)
        }
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'b') {
                e.preventDefault();
                setShowExplorer(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])




    useEffect(() => {
        // const currentTab = tabs.find(tab => tab.route === pathName)
        // if (!currentTab) return

        // setExistedTab(prevTabs => {
        //     const withoutDuplicate = prevTabs.filter(t => pathName !== t.route)
        //     console.log([...withoutDuplicate, currentTab], "from navicon");
        //     return [...withoutDuplicate, currentTab]
        // })

        const checkIfAlreadyExist = existedTab.find(t => t.route === pathName)
        if (checkIfAlreadyExist) return
        const findTab = tabs.find(tab => tab.route === pathName)
        const currentTab = [...existedTab, findTab]
        setExistedTab(currentTab)
    }, [pathName])

    return (
        <div className='flex  navigation-icon-container z-50 '>
            {/* icons */}
            <div className='flex bg-base-300 min-h-[calc(100vh-66px)]'>
                <div className='flex flex-col justify-between  border-r-2 border-[#2D333A] '>
                    <ul className="flex flex-col  md:gap-[18px]   mt-3 ">
                        <Link className={` ${pathName === '/' ? " border-l-2 border-blue-400" : "border-l-2  border-transparent"}`} href={"/"}>
                            <MdHome className="icons-custom" />
                        </Link >
                        <Link className={`${pathName === '/about' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/about"}>
                            <FaUser className="icons-custom" />
                        </Link>
                        <Link className={`${pathName === '/experience' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/experience"}><IoBriefcase className="icons-custom" /></Link>
                        <Link className={`${pathName === '/skills' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/skills"}><FaCode className="icons-custom" /></Link>
                        <Link className={`${pathName === '/projects' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/projects"}><PiMonitorFill className="icons-custom" /></Link>
                        <Link className={`${pathName === '/achievements' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"achievements"}><SlBadge className="icons-custom" /></Link>
                        {/* <Link className={`${pathName === '/courses' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/courses"}>< FaBookOpen className="icons-custom" /></Link> */}
                        {/* <Link className={`${pathName === '/' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={""}><FaGraduationCap className="icons-custom" /></Link> */}
                        <Link className={`${pathName === '/terminal' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/terminal"}><FaTerminal className="icons-custom" /></Link>
                        <Link className={`${pathName === '/contact' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/contact"}><IoIosMailOpen className="icons-custom" /></Link>
                        <Link className={`${pathName === '/resume' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`} href={"/resume"}><FaFileAlt className="icons-custom" /></Link>
                    </ul>
                    <div className='mb-3 flex'>
                        <Link href={"/settings"} className={`${pathName === '/settings' ? " border-l-2 border-blue-400" : "border-l-2 border-transparent"}`}>
                            <FaGear className="icons-custom" />
                        </Link>
                    </div>
                </div>

                {showExplorer && (
                    <div className='border-r-2 border-[#2D333A]'>
                        <h4 className='text-gray-400 text-sm font-bold m-3'>EXPLORER</h4>
                        <button onClick={() => setDisplayFileNames(prev => !prev)} className='truncate text-xs font-bold uppercase flex gap-1 hover:cursor-pointer hover:bg-gray-700 pl-2 pr-14 py-1'>
                            <span className='text-lg'>{displayFileNames ? <MdOutlineKeyboardArrowDown />
                                : <MdOutlineKeyboardArrowRight />
                            }</span> Rupon Anthony Gomes</button>

                        {/* Routing based on file selection */}
                        <div className={displayFileNames ? "" : " hidden"}>
                            <ul className=''>
                                <Link href={"/"} className={`${pathName === '/' ? "active" : ""} file-names`}>
                                    <FaFileCode className='text-blue-400' /><span>Home.jsx</span>
                                </Link>

                                <Link href={"/about"} className={`${pathName === '/about' ? "active" : ""} file-names`}>
                                    <BiSolidFileCss className='text-orange-400' /><span>about.css</span>
                                </Link>

                                <Link href={"/experience"} className={`${pathName === '/experience' ? "active" : ""} file-names`}>
                                    <LuFileJson className='text-yellow-300' /><span>experience.json</span>
                                </Link>

                                <Link href={"/skills"} className={`${pathName === '/skills' ? "active" : ""} file-names`}><BiSolidFileJs className='text-orange-300' /><span>skills.js</span> </Link>
                                <Link href={"/projects"} className={`${pathName === '/projects' ? "active" : ""} file-names`}><BsFiletypeJsx className='text-blue-300' /><span>projects.jsx</span> </Link>
                                <Link href={"/achievements"} className={`${pathName === '/achievements' ? "active" : ""} file-names`}><LuFileJson className='text-yellow-300' /><span>achievements.json</span> </Link>
                                {/* <Link href={"/courses"} className={`${pathName === '/courses' ? "active" : ""} file-names`}><FaFileAlt className='text-gray-400' /><span>courses.js</span> </Link> */}
                                {/* <Link href={"/"} className={`${pathName === '/d' ? "active" : ""} file-names`}><BsFileEarmarkFontFill className='text-blue-300' /><span>blog.md</span> </Link> */}
                                <Link href={"/terminal"} className={`${pathName === '/terminal' ? "active" : ""} file-names`}><LuFileTerminal className='text-gray-300' /><span>terminal.sh</span> </Link>
                                <Link href={"/contact"} className={`${pathName === '/contact' ? "active" : ""} file-names`}><FaFileCode className='text-blue-300' /><span>contact.css</span> </Link>
                                {/* <Link href={"/"} className={`${pathName === '/d' ? "active" : ""} file-names`}><FaFileImage className='text-green-400' /><span>newsletter.config</span> </Link> */}
                                <Link href={"/resume"} className={`${pathName === '/resume' ? "active" : ""} file-names`}><TbFileCv className='text-red-400' /><span>resume.pdf</span></Link>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <TabsControl existedTab={existedTab} setExistedTab={setExistedTab} className="relative" />
        </div>
    )
}
