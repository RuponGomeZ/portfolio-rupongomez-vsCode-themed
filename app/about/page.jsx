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
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Neon DB"
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
            <div className='flex justify-between pb-2 border-b-[1px] border-[#2D333A]'>
                <h2 className='flex items-center gap-2 text-2xl font-bold'>
                    <FaUser className='text-blue-400' />
                    About Me
                </h2>
                <div className='border border-neutral px-2 text-neutral-500 rounded-lg'>
                    about.css
                </div>
            </div>

            <div className='my-14 text-fg-secondary'>
                <p className='text-fg-secondary'>
                    Hi, I'm <span className='font-bold text-blue-500'>Rupon Anthony Gomez</span>, an aspiring full-stack web developer with a passion for building modern, responsive, and user-friendly web applications. My programming journey began with curiosity about how websites work, and it quickly grew into a passion for creating real-world projects. Every project gives me an opportunity to learn something new, improve my problem-solving skills, and become a better developer.
                </p>

                <p className='mt-14'>
                    I enjoy building full-stack applications using <span className='font-bold text-blue-500'>React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and Neon DB</span>. I like writing clean, maintainable code and creating intuitive user experiences that are both functional and visually appealing. Outside of programming, I'm a passionate football fan, enjoy exploring new technology, and love learning about computer hardware. I believe that consistency, patience, and continuous learning are the foundation of growth, and I'm always excited to take on new challenges.
                </p>
            </div>

            {/* cards */}
            <div className='flex flex-col gap-14'>
                <div className='w-full bg-black h-full p-10 border-l-4 border-blue-500 rounded-lg'>
                    <h2 className='text-fg-primary flex gap-2 items-center'>
                        <FaTools />
                        Core Tech Stacks
                    </h2>

                    <div className='flex gap-2 text-fg-secondary flex-wrap mt-5'>
                        {techStack.map(stack => (
                            <div
                                className='border rounded-lg py-1 px-3 border-[#2D333A]'
                                key={stack}
                            >
                                {stack}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full bg-black h-fit p-10 border-l-4 border-blue-500 rounded-lg'>
                    <h2 className='text-fg-primary flex gap-2 items-center'>
                        Education
                    </h2>

                    <div className='flex flex-col gap-10 mt-5'>
                        {education.map(e => (
                            <div
                                className='relative border-l-[1px] py-2 px-4 border-gray-500'
                                key={e.degree}
                            >
                                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-blue-400"></div>

                                <div className='flex gap-3 items-center'>
                                    <h4>{e.degree}</h4>
                                    <p className='text-gray-500 text-sm'>
                                        {e.status ? `( ${e.status} )` : ""}
                                    </p>
                                </div>

                                <a
                                    className='underline text-blue-500'
                                    href={e.url}
                                    target='_blank'
                                >
                                    {e.institution}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <Link
                    href={"/resume"}
                    className='border w-fit mx-auto border-blue-500 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-500 font-bold mb-14'
                >
                    Checkout my Resume
                </Link>
            </div>
        </div>
    )
}