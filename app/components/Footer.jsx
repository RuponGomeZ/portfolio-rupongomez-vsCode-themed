import React from 'react'
import { IoIosGitBranch } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiCheckDoubleLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";


export default function Footer() {
    return (
        <div className='bg-[#1f6feb] py-0 items-center flex justify-between fixed bottom-0 w-full z-50'>
            <div className='flex gap-1 items-center'>
                <CgArrowsExchangeAlt className='mr-7 ml-2 text-xl' />
                <IoIosGitBranch />
                <p className='text-xs font-semibold py-1 mr-4'>main</p>
                <FaCloudUploadAlt />
            </div>
            <div className='flex gap-4 items-center text-xs mr-4'>
                <p>Ln 17, Col 15</p>
                <p>UTF-8 </p>
                <p>{"{ } "}JavaScript</p>
                <p className='flex items-center gap-1'><RiCheckDoubleLine className='text-xl' /><span>Prettier</span></p>
                <p><GrNotification /></p>
            </div>
        </div>
    )
}
