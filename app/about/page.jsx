import Link from 'next/link';
import React from 'react'
import { FaTools, FaUser } from 'react-icons/fa'

export const metadata = {
    title: "About | Rupon Anthony Gomez",
    description: "This page is about me ( Junior web developer Rupon Anthony Gomes",
    keywords: [
        "junior",
        "about",
        "free",
        "guide",

    ]
}

export default function page() {
    const techStack = [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB"
    ];

    const education = [
        {
            degree: "B.A. in Tourism and Hospitality Management",
            status: "Currently Running",
            institution: "IUBAT (International University of Business Agriculture and Technology)",
            url: "https://iubat.edu/"
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Uttara High School & College",
            url: "https://uhsc.edu.bd/"
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Uttara High School & College",
            url: "https://uhsc.edu.bd/"
        }
    ];



    return (
        <div className='mt-32 mx-32'>
            <div className='flex justify-between  pb-2 border-b-[1px] border-[#2D333A]'>
                <h2 className='flex items-center gap-2 text-2xl font-bold'><FaUser className='text-blue-400' />About Me</h2>
                <div className='border border-neutral px-2 text-neutral-500  rounded-lg '>about.css</div>
            </div>
            <div className='my-14 text-fg-secondary'>
                <p className='text-fg-secondary'>I don’t treat development as just work — for me, it’s a creative craft. I genuinely enjoy the process of building a website from scratch, shaping every detail like an art piece. Watching an idea turn into a fully interactive, living experience is what excites me the most. Every project is a chance to experiment, learn, and bring something to life in a way that feels both functional and expressive.</p>

                <p className='mt-14'>I’m a full-stack developer with hands-on experience building <span className='font-bold text-blue-500'>modern, responsive web applications</span> using <span className='font-bold text-blue-500'>React.js, Next.js, Node.js, Express, and MongoDB</span>. I’ve developed <span className='font-bold text-blue-500'>real-world projects</span> with a strong focus on <span className='font-bold text-blue-500'>performance, clean UI, and scalable architecture</span>. I enjoy transforming ideas into <span className='font-bold text-blue-500'>functional, user-friendly products</span> while continuously refining my skills and exploring better ways to build on the web.</p>
            </div>

            {/* cards */}
            <div className='flex flex-col gap-14 '>
                <div className='w-full bg-black h-full p-10 border-l-4 border-blue-500 rounded-lg'>
                    <h2 className='text-fg-primary flex gap-2 items-center'><FaTools />Core Tech Stacks</h2>
                    <div className='flex gap-2 text-fg-secondary  flex-wrap mt-5'>{techStack.map(stack => (
                        <div className='border rounded-lg py-1 px-3 border-[#2D333A]' key={stack}>
                            {stack}
                        </div>
                    ))}</div>
                </div>

                <div className='w-full bg-black h-fit p-10 border-l-4 border-blue-500 rounded-lg'>
                    <h2 className='text-fg-primary flex gap-2 items-center'> Education </h2>
                    <div className=' flex flex-col gap-10 mt-5'>
                        {education.map(e => (
                            <div className='relative border-l-[1px] py-2 px-4 border-gray-500' key={e.degree}>
                                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-blue-400"></div>
                                <div className='flex gap-3 items-center'>
                                    <h4>{e.degree}</h4>
                                    <p className=' text-gray-500 text-sm'>{e.status ? `( ${e.status} )` : ""}</p>
                                </div>
                                <a className='underline text-blue-500' href={e.url} target='_blank'>{e.institution}</a>
                            </div>

                        ))}

                    </div>
                </div>
                <Link href={"/resume"} className='border w-fit mx-auto border-blue-500 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-500 font-bold mb-14'>Checkout my Resume</Link>
            </div>
        </div>
    )
}
