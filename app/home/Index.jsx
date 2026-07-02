import React from 'react'
import CodeSection from './CodeSection'
import Image from 'next/image'
import profile from '../../public/profile.png'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'

export default function Index() {
    return (
        <div className='flex-1 grid grid-cols-2 gap-10 items-center justify-center min-h-screen mx-auto container w-10/12 mt-16'>
            <div className='w-full '>
                <Image className='rounded-full border-2 border-blue-400 xl:hidden mx-auto' width={150} height={150} src={profile} alt='profile-photo'></Image>
                <div className='flex items-center'>
                    <h2 className=' font-bold text-5xl items-center'>Rupon <span className='text-blue-400'>Anthony</span> <br /> Gomes</h2>
                    <Image className='rounded-full border-2 border-blue-400 hidden xl:block mx-auto ' width={180} height={180} src={profile} alt='profile-photo'></Image>
                </div>
                <h4 className='text-xl font-semibold my-5 text-neutral-500'>Full Stack Developer</h4>
                <p className='border-l-4 border-gray-500 pl-5 text-neutral-500'>What I enjoy about my work is that I get to enjoy creating full web applications from scratch. Seeing an application go from an idea to a fully functional product is like creating digital art.</p>
                <Link target='_blank' href={"https://drive.google.com/file/d/14Wa-Tpk8mGb9yXjdAwUbMgA20n3dhKAF/view?usp=sharing"} className='bg-blue-600  hover:bg-blue-700 px-4 py-1 rounded-md font-mono font-semibold flex items-center gap-1 text-sm text-primary-foreground w-fit mt-5'><FaDownload />Download Resume</Link>
            </div>
            <div className='w-full '>
                <CodeSection />
            </div>
        </div>
    )
}
