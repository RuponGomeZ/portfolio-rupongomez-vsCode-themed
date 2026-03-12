import React from 'react'
import Themes from './Themes'
import { IoSettingsSharp } from 'react-icons/io5'

export const metadata = {
    title: "Settings | Rupon Anthony Gomez",
    description: "This is where you can switch between multiple cool themes. You can pick your favorite theme based on your preference",
    keywords: [
        "themes",
        "cool",
        "light",
        "dark",
        "gray",
        "custom",
        "cyberpunk",
        "coffee",
        "black",
        "github"
    ]
}

export default function page() {
    return (
        <div className='mx-32 mt-32 min-h-screen'>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    {/* <FaFileAlt className='text-blue-600' /> */}
                    <h2 className='flex gap-2 items-center'><IoSettingsSharp className='text-blue-600' />Themes you might like</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500 items-center rounded-lg text-sm font-mono'>
                    settings.json
                </div>
            </div>
            <h2 className='text-fg-secondary my-10'>Chose theme based on your preference</h2>
            <Themes />
        </div>
    )
}
