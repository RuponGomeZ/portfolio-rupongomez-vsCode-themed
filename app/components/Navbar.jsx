import React from 'react'
import { FiMonitor } from "react-icons/fi";
import { FiSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa";


export default function Navbar() {
    return (
        <div className='bg-[#161B22] w-full fixed h-20 top-0 z-50' >

            <div className="navbar min-h-0 py-0 bg-[#161B22]shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <ul className='flex gap-3 text-xs font-thin text-gray-300 p-0 '>
                        <li></li>
                        <li>File</li>
                        <li>Edit</li>
                        <li>Selection</li>
                        <li>View</li>
                        <li>Go</li>
                        <li>Run</li>
                        <li>Terminal </li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        <p className='bg-[#0D1117] px-14 rounded-sm border border-[#2D333A] text-xs  py-1 text-[#8B949E] uppercase'>{"<"}Rupon_Anthony_Gomes{"/>"}</p>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='flex gap-4 items-center'>
                        <li><FiMonitor className=' text-neutral-400' /> </li>
                        <li className='font-thin text-neutral-400'>|</li>
                        <li className='hover:bg-white/40 text-neutral-400 rounded-sm p-1'><FaMinus /> </li>
                        <li className='hover:bg-white/20  rounded-sm p-1 text-neutral-400'><FiSquare /></li>
                        <li className='hover:bg-red-500  rounded-sm p-1 text-neutral-400'><IoMdClose /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
