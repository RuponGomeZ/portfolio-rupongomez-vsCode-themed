"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineMonitor } from 'react-icons/md'

export default function Themes() {
    const [theme, setTheme] = useState("black")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const localTheme = localStorage.getItem("theme")

        if (localTheme) {
            setTheme(localTheme)
            document.querySelector("html").setAttribute("data-theme", localTheme)
        }
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return
        localStorage.setItem("theme", theme)
        document.querySelector("html").setAttribute("data-theme", theme)

    }, [theme, mounted])

    const handleChangeTheme = (themeName) => {
        if (theme) {
            setTheme(themeName)
            document.querySelector("html").setAttribute("data-theme", themeName)
        } else {
            setTheme("light")
        }
    }

    // themes.js
    // themes.js
    const daisyThemes = [
        { name: "light", color: "bg-white text-black", description: "GitHub Light – Clean, white, and professional." },
        { name: "dark", color: "bg-black text-white", description: "One Dark Pro – Atom's iconic dark theme." },
        { name: "black", color: "bg-black text-white", description: "GitHub Dark – High contrast dark mode." },
        { name: "cyberpunk", color: "bg-pink-900 text-cyan-400", description: "Horizon – Retro synthwave inspired." },
        { name: "wireframe", color: "bg-gray-200 text-gray-900", description: "Precision Gray – Minimal and neutral." },
        { name: "aqua", color: "bg-cyan-200 text-cyan-800", description: "Nord Frost – Arctic teal and cyan tones." },
        { name: "coffee", color: "bg-amber-100 text-amber-900", description: "Sunset Brown – Warm and cozy coffee vibes." },
        { name: "valentine", color: "bg-pink-100 text-pink-800", description: "Rose Pink – Deep pink background aesthetics." },
        { name: "synthwave", color: "bg-purple-800 text-pink-400", description: "Amethyst Purple – Vibrant retro purple aesthetics." },
    ]

    return (
        <div className='grid grid-cols-3 gap-5 mt-10 mb-16'>
            {daisyThemes.map(theme => (<div className='hover:cursor-pointer' onClick={() => handleChangeTheme(theme.name)} key={theme.name}>

                <div className={` backdrop-blur w-full py-10 h-64 p-5 rounded-lg drop-shadow-2xl border border-base-100 ${theme.color}`}>
                    <div className={` w-fit rounded-lg `}>
                        <MdOutlineMonitor className={`text-4xl w-14 h-14 ${theme.color} rounded-lg ml-5`} />
                    </div>
                    <div className='ml-5'>
                        <h2 className='font-bold mt-5 capitalize'>{theme.name}</h2>
                        <p className='text-sm font-mono'>{theme.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}
