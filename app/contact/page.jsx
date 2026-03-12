import React from 'react'
import { IoIosMailOpen } from 'react-icons/io'
import ContactPageJsonCode from './ContactPageJsonCode'
import MessageForm from './MessageForm'

export const metadata = {
    title: "Contact Me | Rupon Anthony Gomez",
    description: "You can hire me for building MERN Stack or NextJS Website you can use for your business, portfolio or for anything else",
    keywords: [
        "business",
        "portfolio",
        "make",
        "best",
        "professional",
        "full",
        "with",
        "experience",
        "skilled",
        "how to",
        "hire",
    ]
}
export default function page() {
    return (
        <div className='mx-32 mt-32 min-h-screen '>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <IoIosMailOpen className='text-blue-400' />
                    <h2>Get in touch</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500 items-center rounded-lg text-sm font-mono'>
                    contact.css
                </div>
            </div>

            <h2 className='my-8'>I’m almost always online—either at my computer or on my phone. Feel free to reach out anytime, and I’ll get back to you as soon as I can.</h2>

            <div className='grid grid-cols-2 gap-10 w-full justify-around'>

                <div><ContactPageJsonCode /></div>
                <div><MessageForm /></div>

            </div>
        </div>
    )
}
