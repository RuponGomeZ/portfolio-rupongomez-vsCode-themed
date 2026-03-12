import Image from 'next/image'
import React from 'react'
import { SlBadge } from 'react-icons/sl'
import { SiTicktick } from "react-icons/si";
import { IoCalendar, IoOpen } from 'react-icons/io5';
import Link from 'next/link';

export const metadata = {
    title: "Achievement | Rupon Anthony Gomez",
    description: "Full-stack web development fundamentals covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and real-world projects. Other than that I have Mastered Photoshop tools and techniques for professional graphic design back in 2022.",
    keywords: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "SSLCommerz",
        "years",
        "based",
        "hire",
    ]
}

export default function page() {
    const achievements = [
        {
            "name": "Complete Web Development Course with Jhankar Mahbub",
            "year": 2023,
            "academy": "Programming Hero",
            "description": "Full-stack web development fundamentals covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and real-world projects.",
            "img": "programminghero.webp",
            "url": "https://web.programming-hero.com/"
        },
        {
            "name": "Adobe Photoshop Master Course",
            "year": 2022,
            "academy": "BrightSkills",
            "description": "Mastered Photoshop tools and techniques for professional graphic design.",
            "img": "brightskills.webp",
            "url": "https://brightskills.com/"
        },
        {
            "name": "WordPress Development",
            "year": 2021,
            "academy": "YTC",
            "description": "Learned website creation and customization using WordPress.",
            "img": "ytc.png",
            "url": "http://ytcbd.org/"
        }
    ]

    return (
        <div className='mt-32 mx-32 min-h-screen'>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <SlBadge className='text-blue-400' />
                    <h2 className=''>Achievements & Certifications</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500  rounded-lg text-sm font-mono'>achievements.json</div>
            </div>
            <p className='my-5 '>Certifications and achievements I’ve earned along my journey as I’ve grown and developed my skills.</p>

            <div>
                {achievements.map(achieve => (
                    <div key={achieve.name} className='text-neutral-200 bg-neutral-950 rounded-lg drop-shadow-lg p-10 mb-10 flex justify-between'>
                        <div className='flex gap-10 '>
                            <div className="w-[80px] h-[80px] border border-gray-500 p-1  flex items-center justify-center">
                                <Image width={80} height={80} src={achieve.img} alt='logo' className=' object-contain px-2'></Image>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>{achieve.name}</h2>
                                <p className='text-fg-secondary'>{achieve.academy}</p>
                                <p className='font-mono text-sm'>{achieve.description}</p>
                                <div className='flex gap-4'>
                                    <p className='flex gap-2 items-center'><IoCalendar className='text-blue-400' />{achieve.year}</p>
                                    <Link className=' text-blue-400 flex items-center gap-1 font-mono' target='_blank' href={achieve.url}> view <IoOpen />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <SiTicktick className='w-10 text-green-400 ' />
                    </div>
                ))}
            </div>
        </div>
    )
}
